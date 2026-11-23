# SurrealMind - Backend & Schema Implementation Roadmap

## ✅ Phase 1: Database Schema Finalized (`packages/core/src/db/`)
- [x] **`user.surql`**: Hardened with Argon2, private email, hidden password hash, and colleague-only discovery (`$auth->memberOf.out<-memberOf.in`).
- [x] **`workspace.surql`**: Hardened multi-tenant root with owner and member access controls.
- [x] **`scope.surql`**: First-class graph entity (`name`, `path`, `workspace`, `createdAt`, `tombstonedAt`) with compound unique index `[workspace, path]`.
- [x] **`agent.surql`**: Dedicated autonomous bot entity (`name`, `workspace`, `owner: record<user>`, `scope: record<scope>`, `model`, `tombstonedAt`).
- [x] **`promotionRequest.surql`**:
  - Replaced `PERMISSIONS FULL` with strict workspace boundaries (`workspace IN $auth->memberOf.out`).
  - Added typed foreign keys: `fromScope: record<scope>`, `toScope: record<scope>`, `author: record<user | agent>`, `workspace: record<workspace>`.
  - Added composite index: `promotion_scope_status_idx` on `[workspace, toScope, status]`.
- [x] **`relations/memberOf.surql`**: Binds users to workspaces with `rootScope: record<scope>` and role.
- [x] **`relations/parentOf.surql`**: Models the scope hierarchy tree (`scope -> parentOf -> scope`) with workspace-bounded permissions.
- [x] **`relations/derivedFrom.surql`**: Models multi-hop PR lineage DAG with `createdAt READONLY` audit timestamps.
- [x] **`access.surql`**: SurrealDB v2 record authentication for `user`.

---

## ⏳ Phase 2: Update TypeScript Models & DTOs (`packages/core/src/`)
- [x] **`models/promotionRequest.ts`**:
  - Update `fromScope: RecordId<"scope">`, `toScope: RecordId<"scope">`.
  - Update `author: RecordId<"user"> | RecordId<"agent">`.
  - Add `workspace: RecordId<"workspace">`.
  - Update `reviewedBy?: RecordId<"user">`.
  - Add `HydratedPromotionRequestRecord` for queries with `FETCH`.
- [x] **`dto/promotionRequest.ts`**:
  - Update input/output DTOs with hydrated child DTOs (`ScopeDto`, `WorkspaceDto`, `UserDto | AgentDto`) and mapper `toPromotionRequestDto()`.
- [x] **Create Domain Models & DTOs**:
  - `models/scope.ts` & `dto/scope.ts`
  - `models/agent.ts` & `dto/agent.ts`
  - `models/workspace.ts` & `dto/workspace.ts`
  - `models/user.ts` & `dto/user.ts`
- [x] **`repos/_tables.ts`**:
  - Export `Table` constants for `scope`, `agent`, `workspace`, `memberOf`, `parentOf`, `derivedFrom`.

---

## ⏳ Phase 3: Repository Primitives (`packages/core/src/repos/`)
- [ ] **`fetchPromotionRequest(db, id)`**: Complete and verify with typed DTO.
- [ ] **`getPendingPromotionRequests(db, workspaceId, scopeId, includeChildren: boolean)`**:
  - Query using composite index for exact scope, or traverse `->parentOf->scope` when `includeChildren` is true.
- [ ] **`updatePromotionStatus(db, id, status, reviewDetails)`**:
  - Update status, `reviewedBy`, `reviewedAt`, and optional `rejectionReason`.
- [ ] **`createDerivedFromEdge(db, childId, parentId)`**:
  - Insert `RELATE` edge into `derivedFrom` relation table.

---

## ⏳ Phase 4: Service Orchestration (`packages/core/src/services/`)
- [ ] **`approvePromotionRequest(...)`**:
  - Verify pending state.
  - Verify reviewer's `rootScope` covers `request.toScope` via graph hierarchy check.
  - Execute cross-scope memory migration (`admin.forget()` in draft scope, `admin.remember()` in target scope with provenance labels).
  - Update DB status to `"approved"`.
  - Create `derivedFrom` edge if derived from parent proposal.
- [ ] **`rejectPromotionRequest(...)`**:
  - Verify scope authority.
  - Update DB status to `"rejected"` with reason.

---

## ⏳ Phase 5: Verification & Integration Testing
- [ ] Write integration test script `tests/test_promotion_flow.ts`.
- [ ] Verify full end-to-end lifecycle on Surreal Cloud.
