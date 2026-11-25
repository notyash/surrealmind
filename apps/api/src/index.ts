import { Hono } from "hono"
import { cors } from "hono/cors"
import type { Env } from "./db.js"
import { healthRouter } from "./routes/health.js"
import { promotionsRouter } from "./routes/promotions.js"

const app = new Hono<{ Bindings: Env }>()

// Global CORS Middleware
app.use("*", cors())

// Route Registration
app.route("/health", healthRouter)
app.route("/promotions", promotionsRouter)

export default app
