import type { RecordId } from "surrealdb"

export interface UserRecord {
  id: RecordId<"user">
  username: string
  email: string
  avatarUrl?: string | null
  createdAt: Date
  updatedAt: Date
}
