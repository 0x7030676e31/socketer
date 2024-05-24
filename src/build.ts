import { $ } from "bun";

await $`bun run ./src/compiler.ts`;
await $`git add .`;

await $`git commit -m "Dataset Recompile @ ${new Date().toLocaleString()}"`;
await $`git push`;