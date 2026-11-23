# SurrealMind: Session Handoff & Architecture Context

**Date:** 2026-11-23  
**Active Branch:** `feat/core-domain-promotion`  
**Current Phase:** Phase 1 Completed ✅ | Moving to Phase 2 (Contracts & Repos)

---

## 1. Executive Summary & Product Vision
**SurrealMind** is an enterprise multi-agent memory hub and context governance system built on **SurrealDB v2** and **SurrealDB Agent Memory** (`@surrealdb/memory`). It operates like a "pull request and review" system for organizational AI memory:
* Autonomous agents and humans draft insights in private leaf scopes.
* When knowledge needs to be shared with a department or the whole company, a `promotionRequest` is submitted.
* Authorized managers review the request in a TanStack Start web dashboard and approve/reject it.
* Approving executes a cross-scope memory transition (`forget` draft in private scope, `remember` reviewed fact in target department scope with cryptographically signed provenance metadata labels via a privileged admin memory client).
* Provenance and governance lineage is tracked via a native SurrealDB relation graph (`derivedFrom`).

---

## 2. Core Architectural Decisions (Locked In)

1. **"Protected Branch" Model for Scopes:**
   * Shared department scopes (`company/marketing`, `company/finance`, `company`) have direct `memory:write` disabled for all keys.
   * Humans and bots only write daily notes to private leaf scopes (`company/marketing/chiru`).
   * The *only* path into shared memory is via approved promotions executed by the backend service.
2. **First-Class Graph Scopes:**
   * `scope` table (`name`, `path`, `workspace`, `createdAt`, `tombstonedAt`).
   * Scope hierarchy is modeled with `scope -> parentOf -> scope` relation edges.
   * `promotionRequest.fromScope` and `toScope` are typed `record<scope>`.
3. **Multi-Tenancy & Zero-Trust RLS:**
   * `workspace` $\leftarrow$ `memberOf` $\leftarrow$ `user`.
   * All database permissions enforce graph-traversed tenancy (`workspace IN $auth->memberOf.out`).
   * Co-worker discovery is restricted to shared workspaces (`id IN $auth->memberOf.out<-memberOf.in`).
4. **Autonomous Bots vs Humans:**
   * Dedicated `agent` table (`name`, `workspace`, `owner: record<user>`, `scope: record<scope>`, `model`).
   * `promotionRequest.author` is polymorphic: `record<user | agent>`.
5. **Maker-Checker Security:**
   * The approval service enforces `author != reviewer` so managers cannot approve their own drafts.
6. **Lineage DAG:**
   * Lineage stays `derivedFrom` between `promotionRequest → promotionRequest` as the governance audit trail with `createdAt READONLY` timestamps.

---

## 3. Current Code & File Status

### Completed Schema (`packages/core/src/db/`):
* `access.surql`: Record authentication (Argon2).
* `user.surql`: Hardened with private email, hidden password hash, and colleague discovery.
* `workspace.surql`: Hardened multi-tenant root with owner controls.
* `scope.surql`: First-class graph entity with unique `[workspace, path]`.
* `agent.surql`: Dedicated autonomous bot entity.
* `promotionRequest.surql`: Bounded to workspace, typed record pointers, and composite index `promotion_scope_status_idx`.
* `relations/memberOf.surql`: Binds users to workspaces with `rootScope: record<scope>`.
* `relations/parentOf.surql`: Scope hierarchy relation `IN scope OUT scope`.
* `relations/derivedFrom.surql`: Promotion lineage DAG with `createdAt` audit timestamp.

---

## 4. Coaching & Interaction Rules (`AGENT_RULES.md`)

1. **Plan first, from the user:** Ask the user to draft function signatures and architectures before critiquing.
2. **Predict before explaining:** When the user asks "why" or "how", ask for their best guess first.
3. **Hints before answers:** Never jump to full code or queries unprompted.
4. **Rule 8:** Never include semicolons (`;`) in JavaScript/TypeScript code snippets.
5. **Rule 9:** Never write SQL/SurrealQL queries, service logic, or finished code unprompted. Let the user do the thinking!
6. **Hands off frontend:** Do NOT touch `apps/web` until `packages/core` is 100% completed and tested.
7. **User executes commands:** Provide bash commands for the user to run; do not run background scripts without asking.

---

## 5. Immediate Next Steps (Phase 2 & 3)

1. **Phase 2: TypeScript Contracts:**
   - Update `models/promotionRequest.ts` and `dto/promotionRequest.ts`.
   - Create `models/scope.ts`, `models/agent.ts`, `models/workspace.ts`, `models/user.ts`.
   - Update `repos/_tables.ts`.
2. **Phase 3: Repository Functions:**
   - Finish `fetchPromotionRequest(db, id)`.
   - Implement `getPendingPromotionRequests(db, workspaceId, scopeId, includeChildren)`.
   - Implement `updatePromotionStatus(db, id, status, reviewDetails)`.
   - Implement `createDerivedFromEdge(db, childId, parentId)`.
3. **Phase 4: Service Layer:**
   - Implement `approvePromotionRequest` & `rejectPromotionRequest`.
