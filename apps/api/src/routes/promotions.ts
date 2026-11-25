import { Hono } from "hono"
import { RecordId, type Surreal } from "surrealdb"
import { T, type CreatePromotionRequestDto } from "@surrealmind/core"
import { connectDb, type Env } from "../db.js"

export const promotionsRouter = new Hono<{ Bindings: Env }>()

// GET /promotions/pending
promotionsRouter.get("/pending", async (c) => {
  const workspaceId = c.req.query("workspace") || "acme"
  let db: Surreal | null = null

  try {
    db = await connectDb(c.env)
    const query = `
      SELECT * FROM promotionRequest 
      WHERE workspace = $ws AND status = 'pending'
      FETCH fromScope, toScope, author, workspace
    `
    const [requests] = await db.query<[any[]]>(query, {
      ws: new RecordId(T.workspace, workspaceId)
    })

    return c.json({
      workspace: workspaceId,
      count: requests?.length || 0,
      requests: requests || []
    })
  } catch (err: any) {
    return c.json({ error: err?.message || String(err) }, 500)
  } finally {
    if (db) {
      await db.close().catch(() => {})
    }
  }
})

// POST /promotions (with Idempotency Gate)
promotionsRouter.post("/", async (c) => {
  const idempotencyKey = c.req.header("x-idempotency-key") || (await c.req.json().catch(() => ({}))).idempotencyKey
  const body = await c.req.json<CreatePromotionRequestDto & { idempotencyKey?: string }>().catch(() => null)

  if (!body || !body.fromScope || !body.toScope || !body.originalDraft || !body.reviewedFact) {
    return c.json({ error: "Missing required fields (fromScope, toScope, originalDraft, reviewedFact)" }, 400)
  }

  let db: Surreal | null = null
  try {
    db = await connectDb(c.env)

    // Idempotency Gate: If client provided a key, check if already recorded
    if (idempotencyKey) {
      const [existing] = await db.query<[any[]]>(
        `SELECT * FROM promotionRequest WHERE idempotencyKey = $key FETCH fromScope, toScope, author, workspace`,
        { key: idempotencyKey }
      )

      if (existing && existing.length > 0) {
        return c.json({
          status: "already_processed",
          message: "Idempotent request: returning existing promotion record",
          promotion: existing[0]
        }, 200)
      }
    }

    const isAgent = body.authorType === "agent" || body.authorId?.startsWith("agent:")
    const cleanAuthorId = (body.authorId || "system").replace(/^(agent|user):/, "")
    const authorRecord = isAgent
      ? new RecordId(T.agent, cleanAuthorId)
      : new RecordId(T.user, cleanAuthorId)

    const query = `
      CREATE ONLY type::table($table) CONTENT {
        fromScope: $fromScope,
        toScope: $toScope,
        originalDraft: $originalDraft,
        reviewedFact: $reviewedFact,
        author: $author,
        workspace: $workspace,
        idempotencyKey: $idempotencyKey
      } RETURN AFTER
    `

    const [created] = await db.query<[any]>(query, {
      table: T.promotionRequest,
      fromScope: new RecordId(T.scope, body.fromScope.replace("scope:", "")),
      toScope: new RecordId(T.scope, body.toScope.replace("scope:", "")),
      originalDraft: body.originalDraft,
      reviewedFact: body.reviewedFact,
      author: authorRecord,
      workspace: new RecordId(T.workspace, (body.workspace || "acme").replace("workspace:", "")),
      idempotencyKey: idempotencyKey || null
    })

    return c.json({
      status: "created",
      promotion: created
    }, 201)
  } catch (err: any) {
    return c.json({ error: err?.message || String(err) }, 500)
  } finally {
    if (db) {
      await db.close().catch(() => {})
    }
  }
})
