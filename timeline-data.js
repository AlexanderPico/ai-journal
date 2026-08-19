globalThis.AGENT_JOURNEY = {
  meta: {
    title: "From Chat Window to Agent Fleet",
    updated: "2026-08-19",
    scope: "2025-12-30 through 2026-08-19"
  },

  eras: [
    {
      id: "assistant",
      title: "The assistant becomes a workspace",
      short: "From asking for answers to handing over files and projects.",
      description: "The first change was behavioral: the model stopped being only a conversation partner and became a place where work could continue across documents, code, and recurring tasks."
    },
    {
      id: "runtime",
      title: "The workspace becomes a runtime",
      short: "Installation, identity, schedules, and persistent roles.",
      description: "A custom OpenClaw setup turned experiments into a local operating environment: named agents, scheduled jobs, model routes, memory files, and a primary orchestrator."
    },
    {
      id: "fleet",
      title: "The runtime becomes a fleet",
      short: "Bridges, specialization, dashboards, and supervision.",
      description: "As jobs multiplied, one agent became several. New control surfaces appeared to coordinate them, inspect their work, and bridge runtimes that each did something useful."
    },
    {
      id: "knowledge",
      title: "The fleet seeks a memory",
      short: "Capture evolves into an agent-readable knowledge system.",
      description: "The center of gravity moved from execution to continuity: durable sources, summaries, articles, project briefs, research loops, outcomes, and explicit judgment."
    },
    {
      id: "learning",
      title: "Memory becomes a learning loop",
      short: "Evidence, feedback, and judgment replace passive accumulation.",
      description: "The goal was no longer to remember everything. It was to preserve the right evidence, observe outcomes, and make future behavior measurably better without pretending the system was retraining itself."
    },
    {
      id: "contraction",
      title: "Maturity looks like subtraction",
      short: "Security and usefulness determine what remains alive.",
      description: "The final turn was a reversal: inspect the attack surface, stop low-value automation, retire duplicate personas, preserve useful artifacts, and rebuild around a smaller operator-initiated core."
    }
  ],

  publicTrends: [
    {
      date: "DEC 2025",
      title: "Interoperability becomes infrastructure",
      summary: "MCP, AGENTS.md, and agent runtimes moved toward shared conventions for tools, context, and execution rather than isolated chat products.",
      url: "https://www.linuxfoundation.org/press/linux-foundation-announces-the-formation-of-the-agentic-ai-foundation"
    },
    {
      date: "JAN–FEB 2026",
      title: "The chat window becomes a workbench",
      summary: "Cowork and parallel coding-agent applications made supervision of longer-running, file-backed work a mainstream product direction.",
      url: "https://www.anthropic.com/news/cowork-research-preview"
    },
    {
      date: "Q1–Q2 2026",
      title: "Agents become operations",
      summary: "Schedulers, handoffs, guardrails, traces, local gateways, and approval boundaries became as important as the underlying model.",
      url: "https://openai.github.io/openai-agents-python/"
    },
    {
      date: "Q2–Q3 2026",
      title: "Memory becomes data governance",
      summary: "The hard questions shifted to provenance, freshness, namespaces, outcomes, deletion, and evaluation—not just vector retrieval.",
      url: "https://langchain-ai.github.io/langgraph/concepts/memory/"
    },
    {
      date: "2026",
      title: "Security catches up to agency",
      summary: "Tool access, prompt injection, identity, secrets, excessive autonomy, and stale automation became first-class operational risks.",
      url: "https://genai.owasp.org/resource/owasp-top-10-for-agentic-applications-for-2026/"
    }
  ],

  entries: [
    {
      id: "2025-12-assisted-coding",
      date: "2025-12-30",
      displayDate: "DEC 2025",
      era: "assistant",
      stage: "Assistant → collaborator",
      title: "The first durable trace is code, not a manifesto.",
      summary: "A repository begins at the end of December. It is thin evidence for the larger story, but it marks the practical starting point: using increasingly capable AI to help make software, before there was a formal fleet around the work.",
      turn: "The relationship starts to shift from asking what the model knows to asking what the model can help build.",
      tags: ["coding", "early experiments"],
      confidence: "medium"
    },
    {
      id: "2026-01-cowork",
      date: "2026-01-15",
      displayDate: "WINTER 2026",
      era: "assistant",
      stage: "Chat → workspace",
      title: "Claude Cowork makes continuity feel tangible.",
      summary: "The recalled early phase centered on giving Claude access to real working material, setting up basic scheduled tasks, and comparing agent harness options. The machine preserves the memory more clearly than the date: surviving Cowork artifacts begin in late March, so this opening interval remains deliberately approximate.",
      turn: "A useful assistant is no longer defined only by a good reply; it is defined by whether it can hold context and keep work moving.",
      tags: ["Claude Cowork", "crons", "harnesses"],
      confidence: "low"
    },
    {
      id: "2026-03-install-guide",
      date: "2026-03-22",
      displayDate: "MAR 22, 2026",
      era: "runtime",
      stage: "Intent → deployment",
      title: "The agent writes the guide for its own next environment.",
      summary: "Before OpenClaw was live, a custom deployment package was assembled: an installation guide, workspace identity and memory files, scripts, skills, backup material, and operating notes. It translated an abstract interest in agent harnesses into a machine-specific path to installation.",
      turn: "The assistant begins designing the environment in which a more persistent assistant will operate.",
      tags: ["OpenClaw", "installation", "self-scaffolding"],
      confidence: "high"
    },
    {
      id: "2026-03-openclaw-aimee",
      date: "2026-03-24",
      displayDate: "MAR 24–26",
      era: "runtime",
      stage: "Workspace → runtime",
      title: "OpenClaw is installed. Aimee gets a home.",
      summary: "OpenClaw appeared on the Mac and the main workspace followed. Identity, memory, heartbeat, tool, and policy files made Aimee more than a prompt persona: she became the primary local orchestrator with a persistent operating context.",
      turn: "Identity becomes configuration, and configuration becomes a continuously available runtime.",
      tags: ["Aimee", "OpenClaw", "local-first"],
      confidence: "high"
    },
    {
      id: "2026-03-crons-profiles-models",
      date: "2026-03-25",
      displayDate: "MAR 25–31",
      era: "runtime",
      stage: "Agent → service",
      title: "Schedules, specialist profiles, and model routes arrive almost at once.",
      summary: "A nightly backup quickly expanded into daily fleet reviews, midday checks, audits, roadmap drivers, and memory tracking. A six-agent structure emerged, while cloud APIs and local Qwen models were routed toward different workloads. The operational complexity arrived earlier than the confidence that it was all necessary.",
      turn: "The agent stops waiting for a new chat and begins initiating work on a clock, inside a role, with a chosen model.",
      tags: ["cron", "profiles", "model routing", "local models"],
      confidence: "high"
    },
    {
      id: "2026-04-cowork-bridge",
      date: "2026-04-01",
      displayDate: "APR 1",
      era: "fleet",
      stage: "Advice → command",
      title: "Cowork and Aimee gain a real bridge.",
      summary: "Passive handoff files were replaced by a durable command-and-result queue with delegation, state snapshots, scheduled pulses, and auditable reports. A second assistant could now supervise or redirect longer-running work instead of merely leaving recommendations behind.",
      turn: "Two assistants become a system when they can exchange commands, state, results, and review across time.",
      tags: ["Cowork bridge", "Aimee", "queues", "supervision"],
      confidence: "high"
    },
    {
      id: "2026-04-first-dashboard",
      date: "2026-04-02",
      displayDate: "APR 1–4",
      era: "fleet",
      stage: "Transcript → observability",
      title: "The chat log gives way to a dashboard.",
      summary: "The first Mission Control suite grew at sprint speed across command, team, tasks, logs, memory, research, scheduling, communication, and cost. The UI was trying to answer the question the chat window could not: what is the whole system doing now?",
      turn: "Once agents run in parallel and without constant prompting, status and outcomes become a product of their own.",
      tags: ["dashboard", "mission control", "observability"],
      confidence: "high"
    },
    {
      id: "2026-04-agentvault-memory",
      date: "2026-04-05",
      displayDate: "APR 5–12",
      era: "knowledge",
      stage: "Memory → substrate",
      title: "AgentVault becomes the shared external brain.",
      summary: "An Obsidian vault, source manifest, processing rules, and agent context pages appeared alongside Qdrant and Mem0. Within a week, the vault was redesigned as a structured wiki and executable lifecycle system rather than a folder of captured notes.",
      turn: "Memory changes from something inside each agent to a governed substrate that agents can jointly read, transform, and extend.",
      tags: ["AgentVault", "Obsidian", "Qdrant", "Mem0"],
      confidence: "high"
    },
    {
      id: "2026-04-agentvault-iteration",
      date: "2026-04-12",
      displayDate: "APR 12–13",
      era: "knowledge",
      stage: "Prototype → iterative program",
      title: "The knowledge system starts iterating on itself.",
      summary: "Cowork supervised dozens of auditable AgentVault rounds spanning architecture, implementation, replay, enrichment, quality, and repository-attached project loops. This was an early version of a pattern that would recur: agents reviewing agents over work too long for a single context window.",
      turn: "Long-horizon work becomes a sequence of materialized rounds, not one heroic prompt.",
      tags: ["multi-agent", "iteration", "quality loops"],
      confidence: "high"
    },
    {
      id: "2026-04-hermes",
      date: "2026-04-13",
      displayDate: "APR 13",
      era: "fleet",
      stage: "One harness → two runtimes",
      title: "Hermes joins the fleet beside OpenClaw.",
      summary: "Hermes was installed as a persistent collaborator with explicit adapters, policies, and runtime boundaries. The system now had a second agent harness—and another bridge to understand and maintain.",
      turn: "Harness choice becomes compositional: keep multiple runtimes when each has a distinct strength, then make their boundaries explicit.",
      tags: ["Hermes", "MCP", "interop", "bridge"],
      confidence: "high"
    },
    {
      id: "2026-04-knowledge-layers",
      date: "2026-04-21",
      displayDate: "APR 21–24",
      era: "knowledge",
      stage: "Capture → synthesis",
      title: "Notes split into digests, articles, projects, and opportunities.",
      summary: "AgentVault stopped treating every capture as the same kind of object. Source-backed digests, higher-order articles, project seeds, people and agent profiles, and machine-actionable system opportunities gained separate routes. Voice intake joined through local Whisper transcription.",
      turn: "A knowledge system becomes useful when it can decide what a thing is for, not merely where to store it.",
      tags: ["wiki", "project briefs", "voice", "routing"],
      confidence: "high"
    },
    {
      id: "2026-04-profile-migration",
      date: "2026-04-23",
      displayDate: "APR 23–26",
      era: "fleet",
      stage: "OpenClaw → Hermes profiles",
      title: "Specialist roles migrate into Hermes.",
      summary: "Several specialist roles moved from OpenClaw into Hermes profiles. Research, memory, coding, and other specialist responsibilities retained distinct contexts but changed runtimes. Old workspaces remained as migration records rather than immediately disappearing.",
      turn: "A persona proves portable when its useful context and procedures can survive a change of harness.",
      tags: ["profiles", "migration", "runtime portability"],
      confidence: "high"
    },
    {
      id: "2026-04-fleet-mission-control",
      date: "2026-04-27",
      displayDate: "APR 27–30",
      era: "fleet",
      stage: "Dashboard → control plane",
      title: "Mission Control is rebuilt around outcomes.",
      summary: "A fresh Fleet Mission Control repository replaced the first dashboard sprint with a broader modular suite. Runtime status sat beside research routing, memory review, coding, scheduling, and knowledge-system monitoring. Visibility expanded from jobs and logs toward throughput, review, approval, and outcomes.",
      turn: "Observability matures when it shows whether the system changed anything useful, not only whether processes are alive.",
      tags: ["Fleet Mission Control", "outcomes", "dashboards"],
      confidence: "high"
    },
    {
      id: "2026-05-flywheel",
      date: "2026-05-07",
      displayDate: "MAY 7",
      era: "knowledge",
      stage: "Pipeline → flywheel",
      title: "The vault is asked to generate its own next questions.",
      summary: "A capture-dependent research pipeline was judged repetitive and insufficiently autonomous. The proposed replacement used a custom card and board system as the state machine: every substantial output should be able to become a new input, so the system could keep researching without waiting for a fresh capture.",
      turn: "The ambition moves from processing a queue to sustaining a loop that creates worthwhile future work.",
      tags: ["research flywheel", "kanban", "autonomy"],
      confidence: "high"
    },
    {
      id: "2026-05-reset",
      date: "2026-05-12",
      displayDate: "MAY 12–23",
      era: "knowledge",
      stage: "Complexity → bounded loop",
      title: "The flywheel is rebuilt, cut down, then simplified again.",
      summary: "Machine-generated clutter overwhelmed the board. A ruthless reset narrowed the live system to direct captures and explicit research tasks. Eleven days later, the target architecture was simplified again: one enrichment pass, parallel durable writes, weak-card cancellation, and a sharply bounded blocked lane.",
      turn: "Autonomy without editorial pressure creates motion faster than meaning; the fix is a smaller loop with cancellation built in.",
      tags: ["reset", "simplification", "bounded queues"],
      confidence: "high"
    },
    {
      id: "2026-05-books-outcomes",
      date: "2026-05-13",
      displayDate: "MAY–JUN",
      era: "knowledge",
      stage: "Wiki → durable corpus",
      title: "Books, outcomes, and reviewed memory deepen the corpus.",
      summary: "AgentVault expanded from links and research captures into book digests and source-backed reading notes. A specialist memory lane added review queues, structured promotion, promotion logs, and outcome memory, connecting research review to durable writeback rather than automatic accumulation.",
      turn: "Knowledge earns durability through review and observed consequences, not simply because an agent produced it.",
      tags: ["book digests", "outcome memory", "review"],
      confidence: "high"
    },
    {
      id: "2026-06-model-operations",
      date: "2026-06-01",
      displayDate: "MAY 28–JUN 1",
      era: "fleet",
      stage: "Model diversity → model operations",
      title: "Routing becomes a question of cost, identity, and ownership.",
      summary: "Several specialist profiles had drifted into expensive, inflexible model routes. Reworking those routes exposed a larger lesson: authentication scope, billing paths, fallbacks, and runtime ownership had become an operational system rather than a preference toggle.",
      turn: "A multi-model fleet needs explicit billing paths, credentials, fallbacks, and process ownership—or diversity becomes accidental spend and drift.",
      tags: ["model routing", "OAuth", "cost", "local/cloud"],
      confidence: "high"
    },
    {
      id: "2026-06-judgment",
      date: "2026-06-11",
      displayDate: "JUN 11–15",
      era: "learning",
      stage: "Retrieval → judgment",
      title: "The system begins preserving decisions, not just documents.",
      summary: "The Structured Judgment Corpus (SJC) project and AgentVault judgment layer introduced schemas for holdouts, annotations, verdicts, positions, and preference pairs. This was a conceptual break from memory-as-search: the corpus should preserve how evidence changed a decision and what the operator preferred.",
      turn: "The highest-value learning signal is often a correction, verdict, or trade-off—not another summary of the source material.",
      tags: ["SJC", "judgment", "preferences", "evaluation"],
      confidence: "high"
    },
    {
      id: "2026-06-project-fleet",
      date: "2026-06-13",
      displayDate: "JUN–JUL",
      era: "learning",
      stage: "Assistant → project system",
      title: "The fleet becomes a factory for experiments and maintenance.",
      summary: "Across June and July, the agents built and maintained a growing set of repositories: birding tools, market systems, spatial-agent workbenches, discovery tools, and domain dashboards. The meaningful shift was not any one project; it was that the agent environment had become reusable project infrastructure.",
      turn: "The harness starts paying compound returns when new projects inherit the same delegation, review, testing, and continuity patterns.",
      tags: ["coding", "projects", "maintenance", "reuse"],
      confidence: "high"
    },
    {
      id: "2026-08-continual-learning",
      date: "2026-08-07",
      displayDate: "AUG 7–14",
      era: "learning",
      stage: "Flywheel → continual learning",
      title: "Years of signal become the design target.",
      summary: "The continual-learning project consolidated lessons from knowledge systems, judgment records, historical work, books, project outcomes, and operator corrections. Its architecture favored durable evidence, corpus-first evaluation, inspectable projections, quarantine, recovery, and pause/resume/stop controls over another elaborate board.",
      turn: "Continual learning is reframed as durable evidence plus feedback and evaluation—not magical self-improvement or immediate model fine-tuning.",
      tags: ["continual learning", "corpus", "evaluation", "recovery"],
      confidence: "high"
    },
    {
      id: "2026-08-security-contraction",
      date: "2026-08-18",
      displayDate: "AUG 18–19",
      era: "contraction",
      stage: "Expansion → governance",
      title: "The fleet is audited against the value it actually delivers.",
      summary: "A security and usefulness review found that the system's trust boundary and operational surface had grown broader than the value they delivered. The preferred end state changed from an intricately permissioned fleet to a much smaller, more legible core.",
      turn: "The mature question is not what the agents could do, but which capabilities earn the risk of remaining continuously available.",
      tags: ["security", "least privilege", "audit", "pruning"],
      confidence: "high"
    },
    {
      id: "2026-08-hermes-core",
      date: "2026-08-19",
      displayDate: "AUG 19",
      era: "contraction",
      stage: "Fleet → smaller core",
      title: "OpenClaw moves to archive; useful functions survive as bounded capabilities.",
      summary: "The architecture moved toward a small Hermes-centered set of profiles while OpenClaw became a read-only archive. Legacy specialist personas became bounded jobs. Knowledge systems, coding, voice, remote continuity, and modular dashboards could survive—but only when individually justified and stoppable.",
      turn: "The journey ends its first arc by separating durable value from the machinery that happened to produce it.",
      tags: ["Hermes", "OpenClaw retirement", "bounded jobs", "security"],
      confidence: "high"
    }
  ],

  lessons: [
    {
      title: "Persistence changes the risk class.",
      body: "A model that can act later, read local files, hold credentials, and accept remote commands is infrastructure. Treat it like a service, not a clever chat tab."
    },
    {
      title: "Roles help until they duplicate authority.",
      body: "Specialization can protect context and permissions. Permanent personas become liabilities when their useful work could be a bounded, observable job."
    },
    {
      title: "Memory needs an editorial constitution.",
      body: "Capture and embeddings are easy. Provenance, promotion, correction, expiry, privacy, and deletion determine whether memory remains trustworthy."
    },
    {
      title: "Autonomy creates entropy by default.",
      body: "A loop that can always create another card will. Cancellation, budgets, stop conditions, and outcome tests matter more than perpetual motion."
    },
    {
      title: "Dashboards should show consequences.",
      body: "Process health matters, but the durable interface is about what changed, what failed, what needs judgment, and whether the work was useful."
    },
    {
      title: "Subtraction is a form of learning.",
      body: "Retiring a runtime, revoking a credential, pruning a skill, or narrowing a model route can encode more hard-won judgment than adding another feature."
    }
  ]
};
