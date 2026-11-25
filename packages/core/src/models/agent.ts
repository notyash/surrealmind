import type { RecordId } from "surrealdb"

export interface AgentRecord {
  id: RecordId<"agent">
  name: string
  workspace: RecordId<"workspace">
  owner: RecordId<"user">
  scope: RecordId<"scope">
  model?: string
  createdAt: Date
  tombstonedAt?: Date | null
}
