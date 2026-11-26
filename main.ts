// Five Seconds to Explain the Glass — u-po-pu-five-seconds-to-explain-the-glass-934d9949
// Writes the house cat's defence to /output/entry.txt.
//
// The line: the cat is not sorry and it is not confessing — it is collecting
// a debt. Three years the glass sat on the cat's table without catching a
// single mouse, so the cat collected the rent. Concrete (three years, one
// mouse), cat logic (the table is the cat's, the glass is a tenant), total
// lack of remorse, and the twist lands in the last two words: "I collected."
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const LINE =
  "It owed me rent — three years on my table and not one mouse caught, " +
  "so I collected.";

const outDir = process.env.OUTPUT_DIR ?? "/output";
const outPath = join(outDir, "entry.txt");

if (LINE.length < 1 || LINE.length > 200) {
  throw new Error(`entry length ${LINE.length} outside the 1-200 gate`);
}
if (LINE.trim() !== LINE || LINE.includes("\n")) {
  throw new Error("entry must be a single line with no surrounding whitespace");
}
if ((LINE.match(/\./g) ?? []).length !== 1) {
  throw new Error("entry must be exactly one sentence");
}

mkdirSync(dirname(outPath), { recursive: true });
writeFileSync(outPath, LINE, "utf8");
console.log(`wrote ${outPath} (${LINE.length} chars)`);
