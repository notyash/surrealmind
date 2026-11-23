import type { ScopeRecord } from "../models/scope.js"

export interface ScopeDto {
  id: string
  name: string
  path: string
  workspaceId: string
  createdAt: string
  isTombstoned: boolean
}

export interface CreateScopeDto {
  name: string
  path: string
  workspaceId: string
}

export function toScopeDto(r: ScopeRecord): ScopeDto {
  return {
    id: r.id.toString(),
    name: r.name,
    path: r.path,
    workspaceId: r.workspace.toString(),
    createdAt: r.createdAt instanceof Date ? r.createdAt.toISOString() : String(r.createdAt),
    isTombstoned: Boolean(r.tombstonedAt)
  }
}
