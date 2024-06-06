import identify from "../identify.json" assert { type: "json" };
import { EventEmitter } from "node:events";
import type { Events } from "../types/types";

type EventsMap<T = Events> = T extends { t: infer U, d: infer V }
  ? { event: U, payload: V }
  : never;

interface SocketEvents {
  "open": () => void;
  "close": (wasClean: boolean, code: number, reason: string) => void;
  "dispatch": ({ event, payload }: EventsMap) => void;
  "resume": () => void;
}

interface Socket extends EventEmitter {
  on<T extends keyof SocketEvents>(event: T, listener: SocketEvents[T]): this;
  once<T extends keyof SocketEvents>(event: T, listener: SocketEvents[T]): this;
  off<T extends keyof SocketEvents>(event: T, listener: SocketEvents[T]): this;
  emit<T extends keyof SocketEvents>(event: T, ...args: Parameters<SocketEvents[T]>): boolean;
  removeListener<T extends keyof SocketEvents>(event: T, listener: SocketEvents[T]): this;
  removeAllListeners(event?: keyof SocketEvents): this;
}

class Socket extends EventEmitter {
  public static readonly GATEWAY_URL = "wss://gateway.discord.gg";
  public static readonly GATEWAY_VERSION = 9;
  public static readonly GATEWAY_ENCODING = "json";

  private socket: WebSocket | null = null;
  private token: string;

  private sequence: number = 0;
  private interval?: Timer;
  private sessionId?: string;
  private reconnectUrl?: string;

  private gatewayFails: number = 0;

  // Bun WebSocket does not support the removeAllListeners method >.<
  private _onOpen: typeof Socket.prototype.onOpen;
  private _onMessage: typeof Socket.prototype.onMessage;
  private _onClose: typeof Socket.prototype.onClose;

  constructor(token: string) {
    super();

    this._onOpen = this.onOpen.bind(this);
    this._onMessage = this.onMessage.bind(this);
    this._onClose = this.onClose.bind(this);

    this.token = token;
    this.connect();
  }

  private websocketUrl() {
    const url = this.reconnectUrl || Socket.GATEWAY_URL;
    return `${url}?encoding=${Socket.GATEWAY_ENCODING}&v=${Socket.GATEWAY_VERSION}`;
  }

  private cleanup(callback?: (ws: WebSocket) => void) {
    if (this.interval) {
      clearInterval(this.interval);
      this.interval = undefined;
    }

    const socket = this.socket;
    this.socket = null;

    if (socket) {
      socket.removeEventListener("open", this._onOpen);
      socket.removeEventListener("message", this._onMessage);
      socket.removeEventListener("close", this._onClose);

      callback?.(socket);
    }
  }

  private clear() {
    this.cleanup(ws => ws.close(4000));
    this.sequence = 0;

    this.sessionId = undefined;
    this.reconnectUrl = undefined;
  }

  private connect() {
    this.cleanup(ws => ws.close(4000));
    this.socket = new WebSocket(this.websocketUrl());

    this.socket.addEventListener("open", this._onOpen);
    this.socket.addEventListener("message", this._onMessage);
    this.socket.addEventListener("close", this._onClose);
  }

  private getIdentity() {
    const payload = structuredClone(identify);
    payload.d.token = this.token;
    return payload;
  }

  private getResume() {
    return {
      op: 6,
      d: {
        token: this.token,
        session_id: this.sessionId,
        seq: this.sequence
      }
    };
  }

  private onOpen() {
    this.socket?.send(JSON.stringify(this.sessionId ? this.getResume() : this.getIdentity()));
    this.emit("open")
  }

  private onMessage(event: MessageEvent) {
    const data = JSON.parse(event.data); 
    switch (data.op) {
      case 0:
        this.handleDispatch(data);
        this.sequence = data.s;
        break;

      case 1:
        this.heartbeat();
        break;
    
      case 6:
        this.emit("resume");
        break;

      case 7:
        this.connect();
        break;

      case 9:
        if (!data.d) {
          this.clear();
        }

        this.connect();
        break;

      case 10:
        this.interval = setInterval(() => this.heartbeat(), data.d.heartbeat_interval);
        this.gatewayFails = 0;
        break;
    }
  }

  private handleDispatch({ t: event, d: payload }: Events) {
    if (event === "READY") {
      this.sessionId = payload.session_id;
      this.reconnectUrl = payload.resume_gateway_url;
    }

    this.emit("dispatch", { event, payload } as EventsMap);
  }

  private heartbeat() {
    this.socket?.send(JSON.stringify({ op: 1, d: this.sequence }));
  }

  private onClose(event: CloseEvent) {
    if (event.code === 4004) {
      throw new Error("Gatway authentication failed: invalid token");
    }

    this.emit("close", event.wasClean, event.code, event.reason);

    this.gatewayFails++;
    if (this.gatewayFails > 4) {
      this.clear();
    }

    this.connect();
  }
}

export default Socket;
