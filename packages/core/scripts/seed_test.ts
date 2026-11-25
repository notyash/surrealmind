import { connectAdminDb } from "./migrate.js"

async function seed() {
  const db = await connectAdminDb()
  console.log("Seeding test user, workspace, scopes, and agent...")

  await db.query(`
    -- 1. Create test user first
    UPSERT user:yash SET 
      username = 'yash', 
      email = 'yash@acme.com', 
      passwordHash = crypto::argon2::generate('testpass123'),
      createdAt = time::now(), 
      updatedAt = time::now();

    -- 2. Create test workspace with owner
    UPSERT workspace:acme SET name = 'Acme Corp', owner = user:yash, createdAt = time::now();

    -- 3. Create test scopes
    UPSERT scope:finance_draft SET name = 'Finance Draft', path = 'finance/draft', workspace = workspace:acme, createdAt = time::now();
    UPSERT scope:finance SET name = 'Finance', path = 'finance', workspace = workspace:acme, createdAt = time::now();

    -- 4. Create test agent
    UPSERT agent:finance_bot SET name = 'Finance Bot', workspace = workspace:acme, owner = user:yash, scope = scope:finance_draft, createdAt = time::now();
  `)

  console.log("Seeding complete.")
  await db.close()
}

seed().catch((err) => {
  console.error("Seed failed:", err)
  process.exit(1)
})
