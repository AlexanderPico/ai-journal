# AI Agent Journey Journal

A living, evidence-backed journal about the evolution from conversational AI assistants to persistent local agent systems—and the recurring need to simplify, govern, and rethink them.

The journal begins in late 2025 but is designed to continue across changing models, harnesses, tools, and operating ideas.

## Read the journal

Open `index.html` directly, or visit the GitHub Pages deployment after this repository is published.

No build step, server, dependency, tracking script, or network request is required. The page remains compatible with `file://` as well as static hosting.

## What is documented

The journal follows several recurring themes:

- assistants becoming file-backed workspaces
- workspaces becoming persistent runtimes
- scheduled automation and role-separated agent fleets
- bridges between models and harnesses
- dashboards and operational observability
- memory, knowledge, judgment, and continual-learning systems
- model routing, cost, and credential ownership
- security reviews, pruning, and retirement

The first edition contains 22 dated milestones reconstructed from a private editorial record. Uncertain dates are labeled rather than presented as exact, while private provenance stays outside the public dataset.

## Monthly maintenance

An automated monthly editorial review evaluates the journal. It updates the timeline only when the agent architecture or operating philosophy has changed directionally and the result can be described safely for a public audience.

Examples that justify an entry:

- adopting or retiring a major harness or runtime
- materially changing the profile/fleet architecture
- introducing or replacing a bridge, control plane, memory system, or learning loop
- a major shift in model-routing strategy or runtime ownership
- a security or governance decision that changes the active trust boundary
- a project or practice that materially changes how agents are used over time

Routine updates, isolated bug fixes, minor version bumps, and ordinary maintenance do not justify entries. When no meaningful shift occurred, the monthly run leaves the repository untouched.

See [`docs/maintenance-policy.md`](docs/maintenance-policy.md) for the full update contract.

## Repository layout

- `index.html` — semantic GitHub Pages entrypoint
- `styles.css` — responsive light/dark visual system
- `app.js` — renderer, navigation, theme, and progress controls
- `timeline-data.js` — canonical public journal content
- `SOURCES.md` — public dating methodology and known evidence gaps
- `scripts/public-safety-check.js` — tracked-source privacy and secret backstop
- `docs/maintenance-policy.md` — monthly editorial and publication contract
- `tests/journal.test.js` — structural and publishing invariants
- `.github/workflows/ci.yml` — syntax and test checks
- `.github/workflows/pages.yml` — GitHub Pages deployment

## Verification

```bash
npm test
npm run check
```

The underlying commands require only Node.js:

```bash
node --check timeline-data.js
node --check app.js
node --test tests/journal.test.js
```

## GitHub Pages setup

1. Push this repository to GitHub.
2. In **Settings → Pages**, set **Source** to **GitHub Actions**.
3. Push to `main`, or manually run the **Deploy journal to GitHub Pages** workflow.

The workflow verifies the repository, runs the public-safety check, and publishes an explicit allowlist of the five static site assets.

## Editorial principles

- Prefer explicit dated content and Git commits over filesystem timestamps.
- Treat copied or migrated birth times cautiously.
- Keep the main narrative understandable after current product names fade.
- Keep detailed provenance private; publish only the durable narrative.
- Never ship filesystem paths, session IDs, private commit IDs, account details, or actionable security findings.
- Define specialized terms on first use.
- Use “continual learning” precisely: durable evidence, feedback, retrieval, policy improvement, and evaluation—not assumed autonomous model-weight training.
- Preserve failures, contractions, and retired systems; subtraction is part of the history.
