import { $ } from "bun";

await $`bun run ./src/compile.ts`;
await $`git add .`;

await $`git commit -m "Dataset Recompile @ ${new Date().toLocaleString()}"`;
await $`git push`;