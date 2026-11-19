import { AgentMemory } from "@surrealdb/memory";
import type { PromotionRequestInput, PromotionResult } from "../dto/promotionRequest.js";


export async function promote(admin: AgentMemory, request: PromotionRequestInput): Promise<PromotionResult> {
  const provenanceLabels = [
    "origin=promotion",
    `promoted_from=${request.fromScope}`,
    `promoted_to=${request.toScope}`,
    `promoted_at=${new Date().toISOString()}`,
    `promoted_by=${request.author}`,
    `lineage=${request.lineage ? `${request.lineage}->${request.toScope}` : `${request.fromScope}->${request.toScope}`}`
  ]

  await admin.forget(request.originalDraft)

  const rememberRes = await admin.remember(request.reviewedFact,
    {
      scopes: request.toScope,
      labels: provenanceLabels
    }
  )

  return {
    sessionId: rememberRes.sessionId,
    turnId: rememberRes.turnId,
    promotedToScope: request.toScope,
    provenanceLabels
  }
}

