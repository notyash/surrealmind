import { RecordId, Surreal } from "surrealdb"
import { T } from "./_tables.js"
import { toPromotionRequestDto, type CreatePromotionRequestDto, type PromotionRequestDto } from "../dto/promotionRequest.js"
import type { HydratedPromotionRequestRecord, PromotionStatus } from "../models/promotionRequest.js"

export async function createPromotionRequest(db: Surreal, request: CreatePromotionRequestDto): Promise<PromotionRequestDto> {
  const authorId = request.authorType === "agent"
    ? new RecordId(T.agent, request.authorId)
    : new RecordId(T.user, request.authorId)

  const query = `
    CREATE ONLY type::table($table) CONTENT {
      fromScope: $fromScope,
      toScope: $toScope,
      originalDraft: $originalDraft,
      reviewedFact: $reviewedFact,
      author: $author,
      workspace: $workspace
    } RETURN AFTER
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
  const recordId = new RecordId(T.promotionRequest, id)
  const query = `SELECT * FROM ONLY $id FETCH fromScope, toScope, author, workspace`

  const [promotionRequest] = await db.query<[HydratedPromotionRequestRecord | null]>(query, { id: recordId })
  if (!promotionRequest) return null

  return toPromotionRequestDto(promotionRequest)
}

export const fetchPromotionRequestById = fetchPromotionRequest

export async function getPendingPromotionRequests(db: Surreal, workspaceId: string, toScopeId: string, includeChildren: boolean = false): Promise<PromotionRequestDto[]> {
  const scopeCondition = includeChildren
    ? "toScope IN $toScopeId.{..+collect+inclusive}->parentOf->scope"
    : "toScope = $toScopeId"

  const query = `
    SELECT * FROM type::table($table)
    WHERE workspace = $workspace
      AND status = "pending"
      AND ${scopeCondition}
    FETCH fromScope, toScope, author, workspace
  `

  const [promotionRequests] = await db.query<[HydratedPromotionRequestRecord[]]>(query, {
    table: T.promotionRequest,
    workspace: new RecordId(T.workspace, workspaceId),
    toScopeId: new RecordId(T.scope, toScopeId)
  })

  return (promotionRequests ?? []).map(toPromotionRequestDto)
}