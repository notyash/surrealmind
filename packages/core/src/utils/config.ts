import dotenv from "dotenv";

dotenv.config();

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

export function getDatabaseConfig() : { url: string, username: string, password: string }  {
  return {
    url: requireEnv("SURREAL_DATABASE_URL").replace(/\/+$/, ""),
    username: requireEnv("SURREAL_DATABASE_USER"),
    password: requireEnv("SURREAL_DATABASE_PASS") 
  }
} 
