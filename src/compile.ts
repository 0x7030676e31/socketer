const PATH = __dirname + "/../types/dataset.bin";
const DECODER = new TextDecoder("utf-8");

interface Type {
  types: number;
  arr: Type | null;
  obj: { [key: string]: Type } | null;
}

// const IDENT_SYMBOL = "    ";
const IDENT_SYMBOL = "\t";
const TYPES_BITFIELD = ["null", "boolean", "string", "number"]


class Compiler {
  private async read(): Promise<{ [key: string]: Type }> {
    const file = Bun.file(PATH);
    if (!file.exists) {
      throw new Error("File does not exist");
    }

    return JSON.parse(DECODER.decode(Bun.inflateSync(await file.arrayBuffer())));
  } 

  public async compile() {
    const types = await this.read();
    const events = Object.keys(types).sort();

    let content = `// See: https://github.com/0x7030676e31/socketer\n// ${new Date().toLocaleDateString()} @ ${new Date().toLocaleTimeString()}\n// By: @0x7030676e31\n\n`;
    const longestEvent = events.reduce((a, b) => a.length > b.length ? a : b, "").length;

    for (const event of events) {
      const ns = Bun.nanoseconds();
      content += `export type ${event} = ${this.inspect(types[event])};\n\n`;
      console.log(`${event.padEnd(longestEvent, " ")}  Compiled in ${Math.round((Bun.nanoseconds() - ns) / 1000)}μs`);
    }

    content += `export type Events =\n${events.map(event => `${IDENT_SYMBOL}| { t: "${event}", d: ${event} }`).join("\n")};\n\n`;
    content += "export type Dispatch = { op: 0, s: number } & Events;\n";

    const lineLength = Math.max(18 + content.length.toString().length, 14 + events.length.toString().length);
    console.log(`${"=".repeat(lineLength)}\n\nFile size: ${content.length} bytes\nTotal events: ${events.length}\n\n${"=".repeat(lineLength)}`);

    Bun.write(__dirname + "/../types/types.d.ts", content);
  }

  private inspect(type: Type, depth: number = 1): string {
    const types = TYPES_BITFIELD.filter((_, i) => type.types & 2 ** (i + 1));
    if (type.arr !== null) {
      const length
        = +(type.arr.arr !== null)
        + +(type.arr.obj !== null)
        + +((type.arr.types & (1 << 1)) !== 0)
        + +((type.arr.types & (1 << 2)) !== 0)
        + +((type.arr.types & (1 << 3)) !== 0)
        + +((type.arr.types & (1 << 4)) !== 0);

      types.push(`${length > 1 ? "(" : ""}${this.inspect(type.arr, depth)}${length > 1 ? ")" : ""}[]`);
    }

    if (type.obj !== null) {
      const lines = [];
      for (const key of Object.keys(type.obj)) {
        lines.push(`${IDENT_SYMBOL.repeat(depth)}${key}${type.obj[key].types & 1 ? "?" : ""}: ${this.inspect(type.obj[key], depth + 1)};`);
      }
      
      types.push(lines.length ? `{\n${lines.join("\n")}\n${IDENT_SYMBOL.repeat(depth - 1)}}` : "{}");
    }

    return types.join(" | ");
  }
}

const compiler = new Compiler();
await compiler.compile();
