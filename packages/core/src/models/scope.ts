import type { RecordId } from "surrealdb"

export interface ScopeRecord {
  id: RecordId<"scope">
  name: string
  path: string
  workspace: RecordId<"workspace">
  createdAt: Date
  tombstonedAt?: Date | null
}
