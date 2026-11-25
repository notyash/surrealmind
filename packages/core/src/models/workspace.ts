import type { RecordId } from "surrealdb"

export interface WorkspaceRecord {
  id: RecordId<"workspace">
  name: string
  logo?: string | null
  owner: RecordId<"user">
  createdAt: Date
}
