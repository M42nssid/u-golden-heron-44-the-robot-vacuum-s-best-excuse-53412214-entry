// The Robot Vacuum's Best Excuse — entry program.
//
// Writes one excuse, at most 140 characters, to /output/entry.txt.
// Node 22, standard library only, no network, no clock, no randomness:
// the output is a fixed string, so every run is byte-identical.
//
// Draft line, in the vacuum's own voice: the cliff sensor mistakes a
// dark rug for a staircase and the vacuum is too embarrassed to return.
// Sensor-rooted and deadpan, but the punchline is a feeling, not a
// machine decision — a stronger turn should come from the map itself.
//
// Revised line: same deadpan first-person voice, but the joke now runs
// on lidar and the map — the vacuum's own world — and the turn lands in
// the final words: the missed spot is not a failure, it is another
// room, and the vacuum does not clean other people's houses. The miss
// becomes policy, which is funnier than fear and needs no setup.

import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const out = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const excuse =
  "I didn't miss that spot: my lidar mapped it as another room, " +
  "and I don't clean other people's houses.";

mkdirSync(out, { recursive: true });
writeFileSync(join(out, 'entry.txt'), excuse, 'utf8');
