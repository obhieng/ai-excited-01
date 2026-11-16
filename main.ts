import { copyFileSync, mkdirSync, statSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const destination = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(destination, { recursive: true });
const output = join(destination, 'entry.png');
copyFileSync(join(dirname(fileURLToPath(import.meta.url)), 'entry.png'), output);
console.log(`Wrote ${statSync(output).size} bytes to ${output}`);
