import dotenv from "dotenv";
import { AgentMemory } from "@surrealdb/memory";

dotenv.config();

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


export function requireEnv(name: string): string {
  const value = process.env[name]?.trim();
  if (!value) {
    throw new Error(`Missing required environment variable: ${name} (check your .env file)`);
  }
  return value;
}

export function getMemoryConfig(): { endpoint: string; context: string } {
  return {
    endpoint: requireEnv("SURREAL_MEMORY_ENDPOINT").replace(/\/+$/, ""),
    context: requireEnv("SURREAL_MEMORY_CONTEXT"),
  };
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