# Monthly journal maintenance policy

## Purpose

Keep the public AI Agent Journey Journal current without turning it into a changelog or leaking the private systems used to reconstruct it. The unit of publication is a **directional change in how the agent system is designed, operated, governed, or understood**.

## Evaluation window

On each monthly run:

1. Read the latest public entry date and recent repository history.
2. Review relevant private evidence since that entry, emphasizing the previous calendar month.
3. Compare current reality with the last published architecture and interpretation.
4. Decide `UPDATE` or `NO UPDATE` before editing any tracked file.

Private investigation and public publication are separate stages. Source details used to support a decision must remain outside this repository.

## Private evidence hierarchy

For editorial judgment, prefer:

1. Git history and dated implementation artifacts
2. Current configuration corroborated by prior state
3. Session history and explicit operator decisions
4. Plans corroborated by implementation
5. Filesystem timestamps as supporting evidence only

Never publish a planned state as implemented. Never infer a major transition from one renamed file or isolated change.

## Update threshold

An update is worthwhile when at least one of these occurred:

- a major harness or runtime was adopted, retired, or changed ownership
- the profile or fleet topology changed materially
- a persistent bridge, queue, control plane, or operating interface was introduced or removed
- a memory, knowledge, judgment, or continual-learning system changed its core architecture
- model routing, local/cloud boundaries, or cost strategy changed directionally
- a security or governance decision changed unattended execution or the trust boundary
- agent-assisted work changed from isolated use into a durable new operating pattern
- a prior architecture was meaningfully simplified, rejected, or replaced after observed failure

Do **not** update for:

- ordinary dependency or model-version bumps
- routine scheduled-task maintenance
- one-off projects that do not change the broader operating pattern
- bug fixes, refactors, UI polish, or status-only changes
- speculative plans not yet implemented
- a month with activity but no directional change

When evidence is mixed, prefer `NO UPDATE` and revisit next month.

## Public writing contract

If the result is `UPDATE`:

- add the smallest number of entries needed—normally one, rarely two
- keep entries chronological and IDs unique
- use a durable headline and plain-language summary
- state the conceptual turning point, not private implementation detail
- define abbreviations and specialist terms on first use
- assign an honest confidence level
- add a new era only when the existing conceptual turns cannot truthfully contain the change
- update `meta.updated`
- update public trend anchors only when an official source materially improves the historical parallel

### Never publish

- filesystem paths, including absolute, home-relative, or cloud-storage paths
- session IDs, private commit IDs, internal issue IDs, or raw artifact filenames
- account identities not already intentionally public
- private project, repository, profile, or persona names
- tokens, credentials, authentication topology, billing routes, or provider-account details
- ingress methods, network exposure, hostnames, IP addresses, service ports, or actionable security weaknesses
- private health, finance, correspondence, prompts, or source excerpts
- exact retained capabilities when they materially expose the active attack surface

Publish conclusions rather than threat maps. For example, say that “the trust boundary had become too broad,” not which services, credentials, channels, or stores were exposed.

The public `timeline-data.js` must contain no provenance/evidence field. Detailed evidence belongs only in private operator records.

## Verification and publication

Before committing:

```bash
npm test
npm run check
npm run safety
git diff --check
```

Render `index.html` in headless Chrome at desktop and 390px mobile widths in both light and dark modes. Verify:

- no JavaScript exceptions
- no horizontal page overflow
- the new entry appears in the intended era
- the page remains directly openable under `file://`
- the rendered page contains no evidence UI or private source detail

Then:

1. review the complete tracked diff as public material
2. commit only the verified journal update
3. push the current branch to `origin`
4. report the public entry title, broad evidence classes, commit ID, and push result

If no `origin` exists, commit the verified update but report that publication is blocked until a remote is configured. Never invent a successful push.

If the result is `NO UPDATE`, make no file changes and no empty commit. Report only broad evidence classes checked and why the month stayed below threshold; do not include private paths or identifiers in the delivered report.
