import { Table } from "surrealdb"
import type { PromotionRequestRecord } from "../models/promotionRequest.js"
import type { ScopeRecord } from "../models/scope.js"
import type { AgentRecord } from "../models/agent.js"
import type { WorkspaceRecord } from "../models/workspace.js"
import type { UserRecord } from "../models/user.js"

export const T = {
  promotionRequest: new Table<"promotionRequest", PromotionRequestRecord>("promotionRequest"),
  scope: new Table<"scope", ScopeRecord>("scope"),
  agent: new Table<"agent", AgentRecord>("agent"),
  workspace: new Table<"workspace", WorkspaceRecord>("workspace"),
  user: new Table<"user", UserRecord>("user"),
  memberOf: new Table("memberOf"),
  parentOf: new Table("parentOf"),
  derivedFrom: new Table("derivedFrom")
}
