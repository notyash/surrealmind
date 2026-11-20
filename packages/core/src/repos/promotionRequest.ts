import { Surreal } from "surrealdb"
import { T } from "./_tables.js"
import { toPromotionRequestDto, type CreatePromotionRequestDto, type PromotionRequestDto } from "../dto/promotionRequest.js"

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
