import { Table } from "surrealdb";
import type { PromotionRequestRecord } from "../models/promotionRequest.js";

type Tables = {
  promotionRequest: Table<"promotionRequest", PromotionRequestRecord>;
}

export const T: Tables = {
  promotionRequest: new Table("promotionRequest"),
};