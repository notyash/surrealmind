import { Hono } from "hono"
import type { Surreal } from "surrealdb"
import { connectDb, type Env } from "../db.js"

export const healthRouter = new Hono<{ Bindings: Env }>()

healthRouter.get("/", async (c) => {
  const start = Date.now()
  let db: Surreal | null = null
  try {
    db = await connectDb(c.env)
    const [result] = await db.query<[string]>("RETURN time::now();")
    const latencyMs = Date.now() - start

    return c.json({
      status: "healthy",
      service: "surrealmind-edge-api",
      surrealdb: "connected",
      dbTimestamp: result,
      latencyMs
    }, 200)
  } catch (err: any) {
    return c.json({
      status: "unhealthy",
      service: "surrealmind-edge-api",
      surrealdb: "disconnected",
      error: err?.message || String(err),
      latencyMs: Date.now() - start
    }, 503)
  } finally {
    if (db) {
      await db.close().catch(() => {})
    }
  }
})
