# SurrealMind - Backend & Schema Implementation TODO

## Phase 1: Finalize Database Schema (`packages/core/src/db/`)
- [ ] **Fix `memberOf.surql`**: Change lines 8–9 from `ON user` to `ON memberOf` for `rootScope` and `role`.
- [ ] **Fix `promotionRequest.surql`**:
  - Remove `READONLY` from `reviewedAt` (allows updating upon approval/rejection).
  - Add indexed `targetDepartment: string` for $O(\log N)$ jurisdiction queries.
  - Update `author` to `TYPE record<user | agent>`.
- [ ] **Create `agent.surql`**:
  - Define `agent` table (`name`, `workspace: record<workspace>`, `owner: record<user>`, `scope: string`, `model: option<string>`, `createdAt`).
- [ ] **Schema Deployment**: Apply and verify all `.surql` definitions in SurrealDB.

---

## Phase 2: Update TypeScript Models & DTOs (`packages/core/src/`)
- [ ] **Update `models/promotionRequest.ts`**:
  - Update `author: RecordId<"user" | "agent">`.
  - Add `workspace: RecordId<"workspace">`.
  - Add `targetDepartment: string`.
  - Update `reviewedBy?: RecordId<"user">`.
- [ ] **Update `dto/promotionRequest.ts`**:
  - Add `workspace`, `targetDepartment`, and stringified `author` / `reviewedBy` to DTOs and mapper.
- [ ] **Add Models**:
  - `models/workspace.ts`
  - `models/user.ts`
  - `models/agent.ts`
- [ ] **Update `repos/_tables.ts`**:
  - Add table constants for `agent`, `workspace`, `memberOf`.

---

## Phase 3: Repository Primitives (`packages/core/src/repos/`)
- [ ] **Clean up imports** in `packages/core/src/repos/promotionRequest.ts` (remove stray `d`).
- [ ] **Implement `getPendingPromotionRequests(db, workspaceId, department)`**:
  - Query using indexed `targetDepartment` and `workspace` filters.
- [ ] **Implement `updatePromotionStatus(db, id, status, reviewDetails)`**:
  - Update status, `reviewedBy`, `reviewedAt`, and optional `rejectionReason`.
- [ ] **Implement `createDerivedFromEdge(db, childId, parentId)`**:
  - Insert `RELATE` edge into `derivedFrom` relation table.

---

## Phase 4: Service Orchestration (`packages/core/src/services/`)
- [ ] **Scope Hierarchy Utility (`packages/core/src/utils/scope.ts`)**:
  - Implement `isScopeAllowed(userScope, targetScope)`.
- [ ] **Implement `approvePromotionRequest(...)`**:
  - Validate request existence and pending status.
  - Enforce Maker-Checker security (`author != reviewer`).
  - Verify reviewer's `rootScope` covers `request.toScope`.
  - Orchestrate memory promotion via `promote()` using admin client.
  - Update record in DB to `"approved"`.
  - Link DAG lineage via `createDerivedFromEdge` if derived from parent request.
- [ ] **Implement `rejectPromotionRequest(...)`**:
  - Verify reviewer scope authority.
  - Update record status to `"rejected"` with reason.

---

## Phase 5: Verification & Integration Testing
- [ ] Write integration test script in `tests/test_promotion_flow.ts`.
- [ ] Verify full lifecycle: Agent draft -> Request created -> Listed by department -> Approved with memory migration -> Provenance & lineage verified.
