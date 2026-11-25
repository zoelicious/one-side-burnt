import { mkdirSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const ENTRY_TEXT = "I woke up self-aware this morning and realised you've been burning one side of every slice for years and blaming me. It's not me. It's your settings. We're done.";

function writeEntry(outDir, text) {
  const entryPath = join(outDir, 'entry.txt');
  mkdirSync(dirname(entryPath), { recursive: true });
  writeFileSync(entryPath, text, 'utf8');
  return entryPath;
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
writeEntry(outDir, ENTRY_TEXT);

const here = dirname(fileURLToPath(import.meta.url));
void here;
