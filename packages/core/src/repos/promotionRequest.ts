import { RecordId, Surreal } from "surrealdb"
import { T } from "./_tables.js"
import { toPromotionRequestDto, type CreatePromotionRequestDto, type PromotionRequestDto } from "../dto/promotionRequest.js"
import type { HydratedPromotionRequestRecord } from "../models/promotionRequest.js"

export async function createPromotionRequest(db: Surreal, request: CreatePromotionRequestDto): Promise<PromotionRequestDto> {
  const authorId = request.author.startsWith("agent:")
    ? new RecordId(T.agent, request.author.replace("agent:", ""))
    : new RecordId(T.user, request.author.replace("user:", ""))

  const query = `
    CREATE ONLY type::table($table) CONTENT {
      fromScope: $fromScope,
      toScope: $toScope,
      originalDraft: $originalDraft,
      reviewedFact: $reviewedFact,
      author: $author,
      workspace: $workspace
    } RETURN AFTER FETCH fromScope, toScope, author, workspace
  `

  const [promotionRequest] = await db.query<[HydratedPromotionRequestRecord | null]>(query, {
    table: T.promotionRequest,
    fromScope: new RecordId(T.scope, request.fromScope),
    toScope: new RecordId(T.scope, request.toScope),
    originalDraft: request.originalDraft,
    reviewedFact: request.reviewedFact,
    author: authorId,
    workspace: new RecordId(T.workspace, request.workspace)
  })

  if (!promotionRequest) {
    throw new Error("Failed to create promotion request")
  }

  return toPromotionRequestDto(promotionRequest)
}

export async function fetchPromotionRequest(db: Surreal, id: string): Promise<PromotionRequestDto | null> {
  const recordId = new RecordId(T.promotionRequest, id.replace("promotionRequest:", ""))
  const query = `SELECT * FROM ONLY $id FETCH fromScope, toScope, author, workspace`

  const [promotionRequest] = await db.query<[HydratedPromotionRequestRecord | null]>(query, { id: recordId })
  if (!promotionRequest) return null

  return toPromotionRequestDto(promotionRequest)
}
