import { connectAdminDb, runMigrations } from "./migrate.js"

const DB = "surrealmind"

async function reset() {
  const db = await connectAdminDb()
  console.log(`Resetting database: ${DB}`)
  try {
    await db.query(`REMOVE DATABASE ${DB};`)
  } catch (err: any) {
    console.log(`Remove notice: ${err?.message || err}`)
  }
  await db.close()

  console.log("Applying migrations...")
  await runMigrations()
  console.log("Reset complete.")
}

reset().catch((err) => {
  console.error("Reset failed:", err)
  process.exit(1)
})
