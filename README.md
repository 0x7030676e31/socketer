# Socketer

Socketer is an elegant and simple implementation of a Discord gateway WebSocket for user accounts. Written entirely in TypeScript using Bun, it boasts a dependency-free codebase. Socketer manages the entire WebSocket lifecycle, including heartbeating, resuming, and reconnecting, closely mirroring Discord's official implementation as of June 2024.

## Features

Socketer now includes a variety of tools related to the Discord WebSocket, expanding beyond just the user account-based WebSocket implementation. Key functionalities include:

- **WebSocket Client**: A robust client that handles the entire connection lifecycle.
- **Browser Extension Integration**: Tools for injecting code into Discord assets, including a Firefox extension for Discord overlays.
- **Event Injection**: Utilities for injecting and sending events to a local server.
- **Local Server for Mapping**: A server that processes incoming messages for further use.
- **Compilation Tools**: Scripts to compile data into declaration files, enhancing development workflows.

## Future Plans

Socketer continues to evolve, with ongoing updates aimed at improving features and expanding support. Stay tuned for more enhancements and functionalities as the project progresses.

---

Whether you're building custom integrations or enhancing your Discord user experience, Socketer provides a comprehensive set of tools to work with Discord's WebSocket. With its dependency-free, TypeScript-based codebase, Socketer is designed to offer a powerful and flexible solution for developers.
