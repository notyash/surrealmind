import type { WorkspaceRecord } from "../models/workspace.js"

export interface WorkspaceDto {
  id: string
  name: string
  logo?: string | null
  ownerId: string
  createdAt: string
}

export interface CreateWorkspaceDto {
  name: string
  logo?: string | null
  ownerId: string
}

export function toWorkspaceDto(r: WorkspaceRecord): WorkspaceDto {
  return {
    id: r.id.toString(),
    name: r.name,
    logo: r.logo ?? null,
    ownerId: r.owner.toString(),
    createdAt: r.createdAt instanceof Date ? r.createdAt.toISOString() : String(r.createdAt)
  }
}
