# SurrealMind: Session Handoff & Architecture Context

**Date:** 2026-11-22  
**Active Branch:** `feat/core-domain-promotion`  
**Current Phase:** Phase 1 (Schema Tightening) & Phase 2 (Contracts & Repos)

---

## 1. Executive Summary & Product Vision
**SurrealMind** is an enterprise multi-agent memory hub and context promotion system built on **SurrealDB v2** and **SurrealDB Agent Memory** (`@surrealdb/memory`). It operates like a "pull request and review" system for organizational AI memory:
* Autonomous agents and humans draft insights in private leaf scopes.
* When knowledge needs to be shared with a department or the whole company, a `promotionRequest` is submitted.
* Authorized managers review the request in a TanStack Start web dashboard and approve/reject it.
* Approving executes a cross-scope memory transition (`forget` draft in private scope, `remember` reviewed fact in target department scope with cryptographically signed provenance metadata labels via a privileged admin memory client).
* Provenance and governance lineage is tracked via a native SurrealDB relation graph (`derivedFrom`).

---

## 2. Core Architectural Decisions (Locked In)

1. **"Protected Branch" Model for Scopes:**
   * Shared department scopes (e.g. `company/marketing`, `company/finance`, `company`) have direct `memory:write` disabled for all agent/user API keys.
   * Humans and bots only write daily scratchpad notes directly to private leaf scopes (e.g. `company/marketing/chiru`).
   * The *only* path into shared memory is via approved promotions executed by the backend service.
2. **Multi-Tenancy Structure:**
   * `workspace` $\leftarrow$ `memberOf` $\leftarrow$ `user`.
   * `rootScope` (e.g. `"company/marketing"`) and `role` live on the `memberOf` relation table, allowing a user to have different permissions across workspaces.
3. **Autonomous Bots vs Humans:**
   * Dedicated `agent` table (`name`, `workspace`, `owner: record<user>`, `scope`, `model`).
   * `promotionRequest.author` is typed as `record<user | agent>` so bots aren't forced into the human `user` table.
4. **Jurisdiction Queries:**
   * `promotionRequest` contains an indexed `targetDepartment: string` field for fast $O(\log N)$ dashboard queries instead of slow string prefix scans on `toScope`.
5. **Maker-Checker Security:**
   * The approval service enforces `author != reviewer` so managers cannot approve their own drafts.
6. **Lineage Modeling:**
   * Lineage stays `derivedFrom` between `promotionRequest → promotionRequest` as the governance audit trail. Vector embeddings live inside `@surrealdb/memory`.
7. **Clean Architecture / Monorepo Layout:**
   * `packages/core` (`@surrealmind/core`): Pure backend domain logic, repositories with dependency-injected `db: Surreal`, DTOs, and memory services.
   * `apps/web` (`@surrealmind/web`): TanStack Start full-stack app. Server functions (`createServerFn`) act as thin RPC controllers calling `@surrealmind/core`. **`apps/web` is untouched until backend is 100% complete.**

---

## 3. Current Code & File Status

### Uncommitted Working Tree (`packages/core/`):
* `packages/core/src/db/`:
  * `workspace.surql`: Defined with `$auth` row permissions.
  * `user.surql`: Defined with Argon2 password hashing and `$auth` permissions.
  * `memberOf.surql`: Relation table connecting `user` and `workspace`. **Needs fix:** lines 8–9 currently say `ON user`, must be `ON memberOf`.
  * `promotionRequest.surql`: **Needs fix:** remove `READONLY` from `reviewedAt`, add `targetDepartment: string` + index, and set `author: record<user | agent>`.
  * `relations/derivedFrom.surql`: Graph relation `IN promotionRequest OUT promotionRequest`.
  * `access.surql`: SurrealDB v2 record authentication for `user`.
* `packages/core/src/repos/promotionRequest.ts`:
  * `createPromotionRequest(db, request)`: Implemented and verified via test script.
  * `fetchPromotionRequest(db, id)`: Implemented with `Promise<PromotionRequestDto | null>`.
  * `updatePromotionStatus`: Stubbed, needs implementation.
  * *Note:* Remove accidental stray import `d` in line 1.
* `packages/core/src/utils/`:
  * `surrealdb.ts`: Lazy singleton (`getDb()`, `closeDb()`) avoiding top-level import side-effects.
  * `config.ts`: Loads database and memory connection parameters.

---

## 4. Coaching & Interaction Rules (`AGENT_RULES.md`)

When resuming with the agent on the laptop, ensure it adheres to:
1. **Plan first, from the user:** Ask the user to draft function signatures and architectures before critiquing.
2. **Predict before explaining:** When the user asks "why" or "how", ask for their best guess first.
3. **Hints before answers:** Never jump to full code or queries unprompted.
4. **Rule 8:** Never include semicolons (`;`) in JavaScript/TypeScript code snippets.
5. **Rule 9:** Never write SQL/SurrealQL queries, service logic, or finished code unprompted. Let the user do the thinking!
6. **Hands off frontend:** Do NOT touch `apps/web` until `packages/core` is 100% completed and tested.
7. **User executes commands:** Provide bash commands for the user to run; do not run background scripts without asking.

---

## 5. Immediate Next Steps (Phase 1 & Phase 2)

1. **Phase 1: Finalize Schema:**
   - Fix `memberOf.surql` (`ON memberOf`).
   - Fix `promotionRequest.surql` (remove `READONLY` on `reviewedAt`, add `targetDepartment`, `author: record<user | agent>`).
   - Create `agent.surql`.
2. **Phase 2: TypeScript Contracts:**
   - Update `models/promotionRequest.ts` and `dto/promotionRequest.ts` with `workspace`, `targetDepartment`, and `author: RecordId<"user" | "agent">`.
   - Update `repos/_tables.ts` with `agent`, `workspace`, `memberOf`.
3. **Phase 3: Repository Functions:**
   - Implement `getPendingPromotionRequests(db, workspaceId, department)`.
   - Implement `updatePromotionStatus(db, id, status, reviewDetails)`.
   - Implement `createDerivedFromEdge(db, childId, parentId)`.
4. **Phase 4: Service Layer:**
   - Implement `approvePromotionRequest` & `rejectPromotionRequest`.
