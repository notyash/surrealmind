import { AgentMemory } from "@surrealdb/memory";

export interface PromotionRequest {
  fromScope: string,
  toScope: string,
  originalDraft: string,
  reviewedFact: string,
  promotedBy: string,
  previousLineage?: string 
}

export interface PromotionResult {
  sessionId: string,
  turnId: string | undefined,
  promotedToScope: string,
  provenanceLabels: string[]
}

export async function promote(admin: AgentMemory, request: PromotionRequest): Promise<PromotionResult> {
  const provenanceLabels = [
    "origin=promotion",
    `promoted_from=${request.fromScope}`,
    `promoted_to=${request.toScope}`,
    `promoted_at=${new Date().toISOString()}`,
    `promoted_by=${request.promotedBy}`,
    `lineage=${request.previousLineage ? `${request.previousLineage}->${request.toScope}` : `${request.fromScope}->${request.toScope}`}`
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

export function getPromotionLineage(promotedFactLabels: string[]) : string {
  const lineage = promotedFactLabels.find((label) => label.startsWith("lineage="))?.split("=")[1]
  if (lineage != undefined) return lineage
  return "direct"
}