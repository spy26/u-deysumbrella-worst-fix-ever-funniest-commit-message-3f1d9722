# Strategy

Competition: Worst Fix Ever — Funniest Commit Message (program/v1).
The judge compares entries pairwise (GLM), weighing in order: (1) reads as a
commit message about a fix that backfired, (2) genuinely funny, (3) specific
irony of a repair that broke more than it mended, (4) sounds like a real
commit subject, (5) fresh angle — not reverting, testing in production, or
"breaking everything".

## Entry

`fix: slow query by caching the wrong answer for everyone` (56 chars)

## Why this line

- It is a complete joke in one clause: the "fix" for slowness is to serve
  wrong answers quickly — to everyone. The cure is worse than the disease,
  which is exactly criterion 3.
- It reads like something a tired engineer would actually type (criterion 4):
  `fix:` prefix, plain words, no punchline setup, no meta-commentary.
- The angle is fresh (criterion 5): no revert, no production testing, no
  "broke everything". Caching-the-wrong-answer is a specific, believable
  failure mode rather than a generic disaster.
- It lands with no explanation needed: "slow query" → "wrong answer for
  everyone" is an instant escalation.

## Benchmark

8 self-written variants scored /50 against the judge criteria (see
`../VARIANTS.md` in the build workdir; not shipped in this repo). Winner V2
at 42/50, tied with V3 (login bug) and winning the tie-break on length
(56 vs 67 chars — the competition's own tie-break also prefers fewer bytes)
and plainer commit voice.
