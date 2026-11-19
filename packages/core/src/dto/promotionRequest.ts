import type { PromotionRequestRecord, PromotionStatus } from "../models/promotionRequest.js";

// Output
export interface PromotionRequestDto {
  id: string;
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

// Input
export interface CreatePromotionRequestDto {
  fromScope: string;
  toScope: string;
  originalDraft: string;
  reviewedFact: string;
  author: string;
}

export function toPromotionRequestDto(r: PromotionRequestRecord): PromotionRequestDto {
  return {
    ...r,
    id: String(r.id.id),
  }
}