import { Surreal } from "surrealdb"

export interface Env {
  SURREAL_URL: string
  SURREAL_USER: string
  SURREAL_PASS: string
  SURREAL_NAMESPACE?: string
  SURREAL_DATABASE?: string
}

export async function connectDb(env: Env): Promise<Surreal> {
  const db = new Surreal()
  await db.connect(env.SURREAL_URL, {
    namespace: env.SURREAL_NAMESPACE || "surrealmind",
    database: env.SURREAL_DATABASE || "surrealmind",
    authentication: {
      username: env.SURREAL_USER,
      password: env.SURREAL_PASS
    }
  })
  return db
}
