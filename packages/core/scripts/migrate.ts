import fs from "node:fs"
import path from "node:path"
import { fileURLToPath } from "node:url"
import { Surreal } from "surrealdb"
import dotenv from "dotenv"

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

dotenv.config({ path: path.resolve(__dirname, "../../../.env") })

const DB_URL = process.env.SURREAL_DATABASE_URL
const DB_USER = process.env.SURREAL_DATABASE_USER
const DB_PASS = process.env.SURREAL_DATABASE_PASS
const NS = "surrealmind"
const DB = "surrealmind"

export const SCHEMA_FILES = [
  "access.surql",
  "workspace.surql",
  "scope.surql",
  "user.surql",
  "agent.surql",
  "promotionRequest.surql",
  "relations/memberOf.surql",
  "relations/parentOf.surql",
  "relations/derivedFrom.surql"
]

export async function connectAdminDb(): Promise<Surreal> {
  if (!DB_URL || !DB_USER || !DB_PASS) {
    throw new Error("Missing required environment variables (SURREAL_DATABASE_URL, SURREAL_DATABASE_USER, SURREAL_DATABASE_PASS)")
  }

  const db = new Surreal()
  await db.connect(DB_URL, {
    namespace: NS,
    database: DB,
    authentication: {
      username: DB_USER,
      password: DB_PASS
    }
  })
  return db
}

export async function runMigrations() {
  const db = await connectAdminDb()
  const dbDir = path.resolve(__dirname, "../src/db")

  for (const file of SCHEMA_FILES) {
    const fullPath = path.join(dbDir, file)
    if (!fs.existsSync(fullPath)) {
      console.warn(`File not found: ${file}`)
      continue
    }

    const content = fs.readFileSync(fullPath, "utf-8")
    await db.query(content)
    console.log(`Applied: ${file}`)
  }

  await db.close()
}

if (process.argv[1] && process.argv[1].endsWith("migrate.ts")) {
  runMigrations().catch((err) => {
    console.error("Migration failed:", err)
    process.exit(1)
  })
}
