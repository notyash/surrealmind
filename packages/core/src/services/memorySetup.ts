import { AgentMemory } from "@surrealdb/memory";
import { getMemoryConfig, requireEnv } from "../utils/config.js";

export type RoleKeyEnv = "ADMIN_KEY" | "YASH_KEY" | "SAM_KEY" | "CHIRU_KEY";

export type WhoAmIJson = {
    apiKey: RoleKeyEnv,
    delegatedPrincipalId?: string | null;
    displayName: string;
    effectiveGrants: {
        [key: string]: string[];
    };
    grants: {
        [key: string]: string[];
    };
    kind: string;
    principalId: string;
    tokenGrants?: {
        [key: string]: string[];
    } | null;
}

export type WhoAmI = {
    memory: AgentMemory,
    info: WhoAmIJson
}

export function createMemoryClient(apiKey: string): AgentMemory {
  const { endpoint, context } = getMemoryConfig();
  return new AgentMemory({
    endpoint,
    context,
    apiKey,
  });
}

export async function whoAmI(apiKey: RoleKeyEnv) : Promise<WhoAmI> {
    const memory = createMemoryClient(requireEnv(apiKey));
    const me = await memory.whoami()
    if (!me) {
        throw new Error
    }
    console.log(`Principal: ${me.displayName} | Role: ${apiKey} exists!`)
    return {
        memory, 
        info: {apiKey: apiKey, ...me}
    }
}