import type { AgentRecord } from "../models/agent.js"

export interface AgentDto {
  id: string
  name: string
  workspaceId: string
  ownerId: string
  scopeId: string
  model?: string | undefined
  createdAt: string
  isTombstoned: boolean
}

export interface CreateAgentDto {
  name: string
  workspaceId: string
  ownerId: string
  scopeId: string
  model?: string | undefined
}

export function toAgentDto(r: AgentRecord): AgentDto {
  return {
    id: String(r.id.id),
    name: r.name,
    workspaceId: String(r.workspace.id),
    ownerId: String(r.owner.id),
    scopeId: String(r.scope.id),
    model: r.model ?? undefined,
    createdAt: r.createdAt instanceof Date ? r.createdAt.toISOString() : String(r.createdAt),
    isTombstoned: Boolean(r.tombstonedAt)
  }
}
