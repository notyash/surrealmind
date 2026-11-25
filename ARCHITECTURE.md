# SurrealMind - System Architecture & Product Blueprint

## 1. Executive Vision & Thesis
**SurrealMind** is an enterprise multi-agent memory hub and context promotion system built on **SurrealDB v2** and **SurrealDB Agent Memory (`@surrealdb/memory`)**.

### The Problem It Solves
- **Enterprise Context Fragmentation:** In modern organizations, AI agents and human workers operate in disconnected silos (ChatGPT, Claude, local scripts). Shared organizational intelligence does not exist.
- **The "Wild West" Memory Contamination Risk:** Allowing autonomous agents to write directly to shared company knowledge leads to hallucinations, conflicting facts, and security breaches.
- **The Compliance/Audit Gap:** Enterprise compliance (SOC2, ISO27001) demands rigorous lineage: every fact in shared corporate memory must trace back to an authorized session, source draft, and reviewing authority.

### The Solution: Git-Like Memory Governance
SurrealMind treats organizational memory like a Git repository:
- **Sandbox Workspaces (Branches):** Agents and team members interact in private scopes (`company/finance/yash/planA`).
- **Promotion Requests (Pull Requests):** When an agent or employee produces verified intelligence, they propose a `promotionRequest` to merge the fact up the hierarchy into a shared department or company scope (`company/finance` or `company/`).
- **Governance & Provenance (Merge & Commit DAG):** Department leads review the diff (`originalDraft` vs. `reviewedFact`) and approve. On approval, the memory is transitioned via `@surrealdb/memory` with immutable provenance metadata, and a graph edge (`derivedFrom`) links child promotions to parent proposals.

---

## 2. Multi-Tenant Graph Hierarchy & Scopes

```
                                  [ workspace:acme ]
                                          |
                                   (scope:company)
                                    /           \
                                   /             \
                      (scope:finance)           (scope:engineering)
                         /        \
                        /          \
            (scope:yash)            (scope:audit_bot)
               /
              /
     (scope:planA)
```

- **Scopes as Graph Entities (`packages/core/src/db/scope.surql`):**
  - Scopes are first-class records linked via graph relations (`scope -> parentOf -> scope`).
  - Graph traversal (`->parentOf->scope`) models inheritance without brittle string operations.
- **Agent Integration (`packages/core/src/db/agent.surql`):**
  - Agents are registered database entities with an assigned home scope (`agent.scope: record<scope>`), an owner (`owner: record<user>`), and model metadata (`model: string`).

---

## 3. End-to-End Promotion Workflow

```
[Agent or User in Sandbox Scope]
         |
         | (1) Autonomous tool call OR User UI click
         v
[CREATE promotionRequest] (status: "pending")
   - fromScope: scope:planA
   - toScope: scope:finance
   - originalDraft: "Q3 ARR projected at $4.2M based on pipeline analysis"
   - reviewedFact:  "Q3 ARR projected at $4.2M"
   - author: agent:analyzer OR user:yash
         |
         | (2) Department Lead reviews in SurrealMind UI
         v
[Approve / Reject]
   - Verify reviewer authority (reviewer.rootScope covers toScope)
   - If Approved:
       a. admin.forget(originalDraft) from source scope
       b. admin.remember(reviewedFact, { scopes: toScope, labels: provenanceLabels })
       c. Update promotionRequest status to "approved"
       d. RELATE promotionRequest->derivedFrom->parentRequest (Lineage DAG)
```

---

## 4. UI/UX Interaction Modes
1. **Interactive Memory Explorer (SurrealMind UI):**
   - Displays live memories collected by `@surrealdb/memory` per scope/session.
   - Users inspect active drafts, click "Promote to [Scope]", edit the refined fact, and submit.
   - `fromScope` is automatically derived from the selected memory session.
2. **Autonomous Agent Tool Call (`promote_memory` tool):**
   - Connected agents (via LangChain, LlamaIndex, or custom SDK) are given a tool to propose their own findings.
   - Agents automatically pass their own `agent.scope` as `fromScope` and target their parent scope or task objective as `toScope`.

---

## 5. Technology Stack & Verification
- **Database Engine:** SurrealDB v2 (Surreal Cloud).
- **Memory Engine:** `@surrealdb/memory` (Agent Memory with vector embeddings and HNSW indexing).
- **Backend & Core Domain:** Node.js (v24+), TypeScript (ES2022 / NodeNext, strictly typed without `any`).
- **Web Frontend:** TanStack Start (full-stack SSR, React, Vite).
