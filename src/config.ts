import dotenv from "dotenv";
import { AgentMemory } from "@surrealdb/memory";

dotenv.config();

export type RoleKeyEnv = "ADMIN_KEY" | "YASH_KEY" | "SAM_KEY" | "CHIRU_KEY";

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
