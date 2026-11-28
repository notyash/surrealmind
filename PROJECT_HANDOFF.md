# SurrealMind: Session Handoff & Architecture Context

**Date:** 2026-11-28  
**Active Branch:** `feat/core-domain-promotion` (after merging `main` from `feat/infra-edge-api`)  
**Current Phase:** Phase 1 & 2 Completed ✅ | Edge API & CI/CD Deployed ✅ | Active: Phase 3 (finishing `updatePromotionStatus` & `createDerivedFromEdge`)  
**Live Edge API:** `https://surrealmind-api.yashdahapute7.workers.dev`

---

## 1. Executive Summary & Product Vision
**SurrealMind** is an enterprise multi-agent memory hub and context governance system built on **SurrealDB v2** and **SurrealDB Agent Memory** (`@surrealdb/memory`). It operates like a "pull request and review" system for organizational AI memory:
* **Pilot Wedge (Engineering ↔ Product):** Focuses first on one acute cross-functional handoff—capturing architectural decisions, exceptions, and spec tradeoffs automatically from coding agents/workflows without forcing manual wiki maintenance.
* **Preserving the *"Why"*:** Every `promotionRequest` retains `originalDraft` (raw rationale) alongside `reviewedFact` (distilled rule) and tracks lineage via `derivedFrom`.
* **Governed Promotion:** Authorized leads review pending requests in a TanStack Start web dashboard and approve/reject them, triggering cross-scope memory transitions via `@surrealdb/memory` with immutable provenance labels.
* Architectural blueprint: [ARCHITECTURE.md](file:///projects/surrealmind/ARCHITECTURE.md).

---

## 2. Core Architectural Decisions (Locked In)

1. **"Protected Branch" Model for Scopes:** Shared scopes (`company/product`, `company/engineering`, `company`) disable direct writes; agents/humans draft in private leaf scopes.
2. **First-Class Graph Scopes:** `scope` table (`name`, `path`, `workspace`) linked via `scope -> parentOf -> scope` edges. `getPendingPromotionRequests` uses recursive graph traversal (`$toScopeId.{..+collect+inclusive}->parentOf->scope`).
3. **Multi-Tenancy & Zero-Trust RLS:** `workspace <- memberOf <- user` with graph-traversed permissions (`workspace IN $auth->memberOf.out`).
4. **Autonomous Bots vs Humans:** Dedicated `agent` table; polymorphic `author: record<user | agent>`.
5. **Lineage DAG:** `promotionRequest -> derivedFrom -> promotionRequest` with `createdAt READONLY`.
6. **Edge API + Idempotency:** `apps/api` (Hono on Cloudflare Workers) connects statelessly per-request over HTTPS to Surreal Cloud, with `x-idempotency-key` deduplication so agent retries never create duplicate promotion requests.
7. **IaC & CI/CD:** `infra/main.tf` (Terraform) + `.github/workflows/deploy.yml` (typecheck gate on PRs, atomic Wrangler deploy + `/health` polling on `main`).

---

## 3. Current Code & File Status

### ✅ Completed:
* **Schema & Migrations (`packages/core/src/db/` & `scripts/`):** All 9 `.surql` files (including `idempotencyKey` index) + `npm run db:migrate` & `npm run db:reset`.
* **Models & DTOs (`packages/core/src/models/`, `dto/`):** Strictly typed records, `HydratedPromotionRequestRecord`, bare ID DTOs, and `toPromotionRequestDto()`.
* **Repo Primitives (`packages/core/src/repos/promotionRequest.ts`):** `createPromotionRequest`, `fetchPromotionRequest`, and `getPendingPromotionRequests` implemented (`2846328`). *(Note: `createPromotionRequest` uses `CREATE ONLY ... RETURN AFTER`; add `SELECT ... FETCH` if hydrated return is needed).*
* **Edge API & Infra (`apps/api/`, `infra/main.tf`, `.github/workflows/deploy.yml`):** Live on Cloudflare Workers, merged to `main` via PR #2 (`e09e6ac`).

---

## 4. Coaching & Interaction Rules (`AGENT_RULES.md`)

1. **Plan first, from the user:** Ask the user to draft function signatures and architectures before critiquing.
2. **Predict before explaining:** Ask for best guess on "why" or "how" first.
3. **Hints before answers:** Never jump to finished code or queries unprompted.
4. **Rule 8:** Never include semicolons (`;`) in JavaScript/TypeScript snippets.
5. **Rule 9:** Never write SQL/SurrealQL queries, service logic, or finished code unprompted.
6. **Hands off frontend:** Do NOT touch `apps/web` until `packages/core` is 100% completed and tested.

---

## 5. Immediate Next Steps: Finish Phase 3 & Phase 4

In `packages/core/src/repos/promotionRequest.ts`:
1. **`updatePromotionStatus(db, id, status, reviewDetails)`**: Update `status`, `reviewedBy`, `reviewedAt`, optional `rejectionReason`, and return hydrated `PromotionRequestDto`.
2. **`createDerivedFromEdge(db, childRequestId, parentRequestId)`**: Execute `RELATE $child->derivedFrom->$parent SET createdAt = time::now()`.

Then **Phase 4 (`packages/core/src/services/`)**: `approvePromotionRequest` & `rejectPromotionRequest`, followed by **Phase 5** end-to-end verification on Surreal Cloud, **Phase 6** (`apps/web` Engineering ↔ Product pilot UI), and **Phase 7** (`@surrealmind/mcp` automatic capture).
