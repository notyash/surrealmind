import type { RecordId } from "surrealdb"
import type { ScopeRecord } from "./scope.js"
import type { WorkspaceRecord } from "./workspace.js"
import type { UserRecord } from "./user.js"
import type { AgentRecord } from "./agent.js"

export type PromotionStatus = "pending" | "approved" | "rejected"

export interface PromotionRequestRecord {
  id: RecordId<"promotionRequest">
  fromScope: RecordId<"scope">
  toScope: RecordId<"scope">
  originalDraft: string
  reviewedFact: string
  author: RecordId<"user"> | RecordId<"agent">
  workspace: RecordId<"workspace">
  status: PromotionStatus
  requestedAt: Date
  reviewedBy?: RecordId<"user">
  reviewedAt?: Date
  rejectionReason?: string
}

export interface HydratedPromotionRequestRecord extends Omit<PromotionRequestRecord, "fromScope" | "toScope" | "author" | "workspace"> {
  fromScope: ScopeRecord
  toScope: ScopeRecord
  author: UserRecord | AgentRecord
  workspace: WorkspaceRecord
}
