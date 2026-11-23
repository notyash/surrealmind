import type { HydratedPromotionRequestRecord, PromotionStatus } from "../models/promotionRequest.js"
import { type ScopeDto, toScopeDto } from "./scope.js"
import { type WorkspaceDto, toWorkspaceDto } from "./workspace.js"
import { type UserDto, toUserDto } from "./user.js"
import { type AgentDto, toAgentDto } from "./agent.js"
import type { AgentRecord } from "../models/agent.js"

export interface PromotionRequestDto {
  id: string
  fromScope: ScopeDto
  toScope: ScopeDto
  author: UserDto | AgentDto
  workspace: WorkspaceDto
  originalDraft: string
  reviewedFact: string
  status: PromotionStatus
  requestedAt: string
  reviewedBy?: string | undefined
  reviewedAt?: string | undefined
  rejectionReason?: string | undefined
}

export interface CreatePromotionRequestDto {
  fromScope: string
  toScope: string
  originalDraft: string
  reviewedFact: string
  author: string
  workspace: string
}

export interface PromotionResult {
  sessionId: string
  turnId?: string | undefined
  promotedToScope: string
  provenanceLabels: string[]
}

function isAgentRecord(author: HydratedPromotionRequestRecord["author"]): author is AgentRecord {
  return "owner" in author || "model" in author
}

export function toPromotionRequestDto(r: HydratedPromotionRequestRecord): PromotionRequestDto {
  const authorDto = isAgentRecord(r.author) ? toAgentDto(r.author) : toUserDto(r.author)

  return {
    id: r.id.toString(),
    fromScope: toScopeDto(r.fromScope),
    toScope: toScopeDto(r.toScope),
    author: authorDto,
    workspace: toWorkspaceDto(r.workspace),
    originalDraft: r.originalDraft,
    reviewedFact: r.reviewedFact,
    status: r.status,
    requestedAt: r.requestedAt instanceof Date ? r.requestedAt.toISOString() : String(r.requestedAt),
    reviewedBy: r.reviewedBy ? r.reviewedBy.toString() : undefined,
    reviewedAt: r.reviewedAt instanceof Date ? r.reviewedAt.toISOString() : (r.reviewedAt ? String(r.reviewedAt) : undefined),
    rejectionReason: r.rejectionReason ?? undefined
  }
}
