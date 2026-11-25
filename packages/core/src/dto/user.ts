import type { UserRecord } from "../models/user.js"

export interface UserDto {
  id: string
  username: string
  email: string
  avatarUrl?: string | null
  createdAt: string
  updatedAt: string
}

export function toUserDto(r: UserRecord): UserDto {
  return {
    id: String(r.id.id),
    username: r.username,
    email: r.email,
    avatarUrl: r.avatarUrl ?? null,
    createdAt: r.createdAt instanceof Date ? r.createdAt.toISOString() : String(r.createdAt),
    updatedAt: r.updatedAt instanceof Date ? r.updatedAt.toISOString() : String(r.updatedAt)
  }
}
