import type { BunFile } from "bun";

const PATH = __dirname + "/../types/dataset.bin";
const DECODER = new TextDecoder("utf-8");
const WRITE_INTERVAL = 1000 * 60;

interface Type {
  types: number;
  arr: Type | null;
  obj: { [key: string]: Type } | null;
}

interface Payload {
  payload: any;
  event: string;
}

class Server {
  private types: { [key: string]: Type } = {};
  private hash: BigInt = 0n;

  public constructor() {
    process.addListener("exit", this.exit.bind(this));
    process.addListener("SIGINT", this.exit.bind(this));
    process.addListener("SIGTERM", this.exit.bind(this));
    process.addListener("SIGKILL", this.exit.bind(this));
  }

  public async load() {
    const file = Bun.file(PATH);
    if (!file.exists()) {
      Bun.write(PATH, "{}");
    }

    this.types = await file.exists() ? await this.read(file) : {};
    this.hash = BigInt(Bun.hash(await file.arrayBuffer()));
    setInterval(async () => await this.write(), WRITE_INTERVAL);
  }

  public async read(file: BunFile) {
    return JSON.parse(DECODER.decode(Bun.inflateSync(await file.arrayBuffer())));
  }

  public async write() {
    const content = Bun.deflateSync(JSON.stringify(this.types));
    const hash = BigInt(Bun.hash(content));
    
    if (hash !== this.hash) {
      this.log(`Writing ${content.byteLength} bytes to file...`);
      this.hash = hash;
    }

    await Bun.write(PATH, content);
  }

  public startServer(port: number = 3000) {
    this.log(`Starting server on port ${port}...`);
    Bun.serve({
      port,
      fetch: async request => {
        if (request.method === "POST") {
          const data = await request.json();
          const { payload, event } = data as Payload;
          
          this.process(payload, event);
        }

        const resp  = new Response("Ok", { status: 200 });
        resp.headers.set("Access-Control-Allow-Origin", "*");
        resp.headers.set("Access-Control-Allow-Methods", "POST, GET, OPTIONS");
        resp.headers.set("Access-Control-Allow-Headers", "Content-Type");

        return resp;
      },
    });
  }

  private exit() {
    console.log();
    this.log("Exiting...");
    this.write();

    process.removeAllListeners("exit");
    process.removeAllListeners("SIGINT");
    process.removeAllListeners("SIGTERM");
    process.removeAllListeners("SIGKILL");
    process.exit();
  }

  private process(payload: any, event: string) {
    this.types[event] ??= { types: 0, arr: null, obj: null };
    this.analyze(payload, this.types[event]);
  }

  private analyze(source: any, target: Type) {
    if (source === undefined) {
      target.types |= 1;
      return;
    }

    if (source === null) {
      target.types |= 1 << 1;
      return;
    }

    if (typeof source === "boolean") {
      target.types |= 1 << 2;
      return;
    }

    if (typeof source === "string") {
      target.types |= 1 << 3;
      return;
    }

    if (typeof source === "number") {
      target.types |= 1 << 4;
      return;
    }

    if (Array.isArray(source)) {
      target.arr ??= { types: 0, arr: null, obj: null };
      for (const item of source) {
        this.analyze(item, target.arr);
      }

      return;
    }

    if (typeof source !== "object") {
      return;
    }

    target.obj ??= {};
    const defined = Object.entries(target.obj ?? {}).filter(([_, value]) => !(value.types & 1)).map(([key]) => key);

    for (const [key, value] of Object.entries(source)) {
      target.obj[key] ??= { types: 0, arr: null, obj: null };
      this.analyze(value, target.obj[key]);

      const idx = defined.indexOf(key);
      if (idx !== -1) {
        defined.splice(idx, 1);
      }
    }

    for (const key of defined) {
      target.obj[key].types |= 1;
    }
  }

  private log(content: string) {
    console.log(`\x1b[33m[${new Date().toLocaleDateString()} @ ${new Date().toLocaleTimeString()}]\x1b[90m ${content}\x1b[0m`);
  }
}

const server = new Server();
server.load();
server.startServer();
