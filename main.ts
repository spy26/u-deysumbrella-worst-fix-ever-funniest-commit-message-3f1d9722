// main.ts — Worst Fix Ever: Funniest Commit Message
// Writes one commit message to /output/entry.txt (program/v1 harness).
// Final entry chosen by benchmark — see VARIANTS.md (V2 wins, 42/50).
//
// The grader runs this with Node 22 (type stripping). No dependencies, no
// network, no environment secrets: the entry text is a literal in this file.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// FINAL entry — benchmark winner (V2, 42/50, 56 chars). Tie-break over V3:
// shorter, plainer commit voice, and a fresher angle (caching the wrong
// answer is not a revert / test-in-prod / broke-everything trope).
const ENTRY =
  "fix: slow query by caching the wrong answer for everyone";

// The grader sets /output; outside the grader MAKEFUN_OUTPUT_DIR stands in.
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

mkdirSync(outDir, { recursive: true });
// No trailing newline: the gate counts characters 1..100, and the entry is
// exactly one line.
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
