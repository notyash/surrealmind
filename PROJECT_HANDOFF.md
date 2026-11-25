# SurrealMind: Session Handoff & Architecture Context

**Date:** 2026-11-24  
**Active Branch:** `feat/core-domain-promotion` (Synced with remote origin: `5c65930`)  
**Current Phase:** Phase 1 & 2 Completed ✅ | Active: Phase 3 (Repository Primitives)  
**Job Application Milestone:** Submitted Forward Deployed Engineer application to SurrealDB with custom SurrealMind portfolio link; advanced to the one-way video interview!

---

## 1. Executive Summary & Product Vision
**SurrealMind** is an enterprise multi-agent memory hub and context governance system built on **SurrealDB v2** and **SurrealDB Agent Memory** (`@surrealdb/memory`). It operates like a "pull request and review" system for organizational AI memory:
* Autonomous agents and humans draft insights in private leaf scopes (`company/finance/yash/planA`).
* When knowledge needs to be shared with a department or the whole company, a `promotionRequest` is submitted.
* Authorized managers review the request in a TanStack Start web dashboard and approve/reject it.
* Approving executes a cross-scope memory transition (`forget` draft in private scope, `remember` reviewed fact in target department scope with cryptographically signed provenance metadata labels via a privileged admin memory client).
* Provenance and governance lineage is tracked via a native SurrealDB relation graph (`derivedFrom`).
* An architectural blueprint is documented in [ARCHITECTURE.md](file:///projects/surrealmind/ARCHITECTURE.md).

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
5. **Configurable Maker-Checker Governance:**
   * Moved to `TODO_HARDENING.md` for post-MVP. In the MVP, users with access to `toScope` can promote their own private drafts directly.
6. **Lineage DAG:**
   * Lineage is modeled as a native graph relation: `promotionRequest -> derivedFrom -> promotionRequest` with `createdAt READONLY` timestamps.
7. **Single-Roundtrip Hydration via SurrealQL `FETCH`:**
   * Repo queries use `CREATE ONLY ... RETURN AFTER FETCH fromScope, toScope, author, workspace` and `SELECT * FROM ONLY ... FETCH ...`.
   * DTOs receive fully hydrated objects directly (`ScopeDto`, `WorkspaceDto`, `UserDto | AgentDto`) without redundant roundtrips or defensive string parsing.

---

## 3. Current Code & File Status

### ✅ Completed Schema (`packages/core/src/db/` - Commit `e82b89e`):
* `access.surql`: Record authentication (Argon2).
* `user.surql`: Hardened with private email, hidden password hash, and colleague discovery.
* `workspace.surql`: Hardened multi-tenant root with owner controls.
* `scope.surql`: First-class graph entity with unique `[workspace, path]`.
* `agent.surql`: Dedicated autonomous bot entity with `owner` and `scope`.
* `promotionRequest.surql`: Bounded to workspace, typed record pointers, and composite index `promotion_scope_status_idx`.
* `relations/memberOf.surql`: Binds users to workspaces with `rootScope: record<scope>`.
* `relations/parentOf.surql`: Scope hierarchy relation `IN scope OUT scope`.
* `relations/derivedFrom.surql`: Promotion lineage DAG with `createdAt` audit timestamp.

### ✅ Completed Models & DTOs (`packages/core/src/` - Commit `5c65930` + Bare ID Refactor):
* `models/promotionRequest.ts`: `PromotionRequestRecord`, `PromotionStatus`, and `HydratedPromotionRequestRecord` (using `Omit`).
* `models/scope.ts`, `agent.ts`, `workspace.ts`, `user.ts`: Domain record interfaces.
* `dto/promotionRequest.ts`: `PromotionRequestDto` with bare IDs (`String(r.id.id)`), `CreatePromotionRequestDto` with `authorId` and `authorType: "user" | "agent"`, and `toPromotionRequestDto()` mapper with `isAgentRecord` guard.
* `dto/scope.ts`, `agent.ts`, `workspace.ts`, `user.ts`: DTO interfaces and mappers using bare IDs (`String(r.id.id)` and `String(r.foreignKey.id)`).
* `repos/_tables.ts`: Table name constants (`T.scope`, `T.agent`, `T.workspace`, etc.).
* `repos/promotionRequest.ts`:
  - `createPromotionRequest`: Single-roundtrip with typed `authorId`/`authorType` (no `.replace()`).
  - `fetchPromotionRequest` / `fetchPromotionRequestById`: Single-roundtrip `SELECT * FROM ONLY $id FETCH ...`.
  - `getPendingPromotionRequests`: Filtered by `workspace`, `status = "pending"`, and arbitrary-depth department recursion via `toScope IN $toScopeId.{..+collect+inclusive}->parentOf->scope` (or exact match when `includeChildren === false`).
* `services/promote.ts`: Streamlined to accept typed `authorType:authorId` provenance label.
* `TODO.md`: Immediate sprint roadmap.
* `TODO_HARDENING.md`: Post-MVP items (maker-checker flag, connection pooling, canary tests).
* `ARCHITECTURE.md`: Complete system architecture specification.

---

## 4. Coaching & Interaction Rules (`AGENT_RULES.md`)

1. **Plan first, from the user:** Ask the user to draft function signatures and architectures before critiquing.
2. **Predict before explaining:** When the user asks "why" or "how", ask for their best guess first.
3. **Hints before answers:** Never jump to full code or queries unprompted. Escalate hints gradually.
4. **Rule 8:** Never include semicolons (`;`) in JavaScript/TypeScript code snippets.
5. **Rule 9:** Never write SQL/SurrealQL queries, service logic, or finished code unprompted. Let the user do the thinking!
6. **Hands off frontend:** Do NOT touch `apps/web` until `packages/core` is 100% completed and tested.
7. **User executes commands:** Provide bash commands for the user to run; do not run background scripts without asking.

---

## 5. Immediate Next Steps: Phase 3 (Remaining Repository Primitives)

Location: `packages/core/src/repos/promotionRequest.ts`

Remaining functions to implement:
1. **`updatePromotionStatus(db: Surreal, id: string, status: PromotionStatus, reviewDetails: { reviewedBy?: string, reviewedAt?: Date, rejectionReason?: string }): Promise<PromotionRequestDto | null>`**
   - Update record status, `reviewedBy`, `reviewedAt`, and optional `rejectionReason`.
   - Use `FETCH fromScope, toScope, author, workspace` and return hydrated `PromotionRequestDto`.
2. **`createDerivedFromEdge(db: Surreal, childRequestId: string, parentRequestId: string): Promise<void>`**
   - Execute `RELATE $child->derivedFrom->$parent SET createdAt = time::now()`.

---

## 6. Git Status & Remote Sync
- **Branch:** `feat/core-domain-promotion`
- **To commit & push current progress before switching machines:**
  ```bash
  git add packages/core/src/ TODO.md PROJECT_HANDOFF.md
  git commit -m "feat(core): implement getPendingPromotionRequests with recursive scope traversal and bare id DTOs"
  git push origin feat/core-domain-promotion
  ```
- **To resume on your PC:**
  ```bash
  git pull origin feat/core-domain-promotion
  ```
