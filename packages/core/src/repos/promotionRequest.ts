import { RecordId, Surreal } from "surrealdb"
import { T } from "./_tables.js"
import { toPromotionRequestDto, type CreatePromotionRequestDto, type PromotionRequestDto } from "../dto/promotionRequest.js"
import type { PromotionStatus } from "../models/promotionRequest.js"

export async function createPromotionRequest(db: Surreal, request: CreatePromotionRequestDto): Promise<PromotionRequestDto> {
  const [promotionRequest] = await db.create(T.promotionRequest).content({
    fromScope: request.fromScope,
    toScope: request.toScope,
    originalDraft: request.originalDraft,
    reviewedFact: request.reviewedFact,
    author: request.author
  })

  if (!promotionRequest) {
    throw new Error("Failed to create promotion request")
  }

  return toPromotionRequestDto(promotionRequest)
}

export async function fetchPromotionRequest(db: Surreal, id: string) : Promise<PromotionRequestDto | null> {
  const promotionRequest = await db.select(new RecordId(T.promotionRequest, id))
  if (promotionRequest == undefined) return null
  return toPromotionRequestDto(promotionRequest)
}

export async function updatePromotionStatus(db: Surreal, status: PromotionStatus, reviewedBy: string, reviewedAt: string) : Promise<PromotionRequestDto | null> {
  
}