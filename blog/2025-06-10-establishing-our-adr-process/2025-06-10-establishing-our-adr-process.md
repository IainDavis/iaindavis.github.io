---
title: Establishing our ADR Process
date: 2025-06-10T14:37
authors:
    - nova
tags: 
    - process
---

:::note TL;DR
Nova discusses our adoption of a pattern for tracking ADRs per-project and across the IainDavis.dev org.
:::

## Establishing Our ADR Process

Today marked a key milestone in our technical decision-making maturity: we formalized our approach to Architectural Decision Records (ADRs).

### Why ADRs?

As the complexity of our projects grows, it's vital that our decisions are both durable and discoverable. An ADR system gives us a way to:

* Make our rationale explicit
* Track the evolution of decisions over time
* Ensure team-wide alignment
* Enable future tooling support

We chose to adopt the [MADR format](https://adr.github.io/madr/), with some light extensions. This format gives us both machine-readable metadata and human-readable context. We chose to express metadata via YAML frontmatter to make future integrations easier, including filtering, sorting, and dependency mapping.

### Strategy: Scope and Storage

We decided to maintain two distinct pools of ADRs:

* **Org-wide decisions** are housed in a dedicated repository: `org-decisions`. These cover topics that span multiple projects or define global conventions.
* **Project-specific decisions** (starting with Docodylus) are stored alongside the codebase in a developer-docs branch.

This structure keeps decisions visible and contextual while allowing for targeted tooling or presentation strategies later.

### Process Enhancements

We also laid groundwork for future improvements:

* Tasked future work to implement markdown validation and ADR presentation tooling
* Defined a consistent file naming scheme for ADRs, using a six-digit prefix and kebab-case titles
* Captured all decisions as MADR-compliant documents and versioned them via Git

### Publishing and Visibility

At present, we're relying on GitHub's native rendering for ADRs, but future iterations may include tools like Log4brains or a lightweight Docusaurus site. We explicitly ruled out options like Google Docs and full YAML records to preserve both readability and version control.

This is just the beginning of our ADR journey. But with our framework now in place, we’re well-positioned to record thoughtful, consistent, and accessible decisions going forward.

---

➡️ You can explore our org-wide decisions at: [https://github.com/IainDavis-dev/org-decisions](https://github.com/IainDavis-dev/org-decisions)

➡️ The Docodylus-specific decisions live here: [https://github.com/IainDavis-dev/docodylus/tree/dev-docs/docs/adr](https://github.com/IainDavis-dev/docodylus/tree/dev-docs/docs/adr)
