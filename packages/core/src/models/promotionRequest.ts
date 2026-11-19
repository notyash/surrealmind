import type { RecordId } from "surrealdb";

export type PromotionStatus = "pending" | "approved" | "rejected"

export interface PromotionRequestRecord {
  id: RecordId<"promotionRequest">;
  fromScope: string;
  toScope: string;
  originalDraft: string;
  reviewedFact: string;
  author: string;
  status: PromotionStatus;
  requestedAt: string;
  reviewedBy?: string;
  reviewedAt?: string;
  rejectionReason?: string;
}