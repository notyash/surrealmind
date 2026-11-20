import { createPromotionRequest } from "../packages/core/src/repos/promotionRequest.js"
import { getDb, closeDb } from "../packages/core/src/utils/surrealdb.js"

async function main() {
  const db = await getDb()

  const result = await createPromotionRequest(db, {
    fromScope: "company/finance/chiru",
    toScope: "company/finance",
    originalDraft: "Chiru proposed hybrid model Y.",
    reviewedFact: "SurrealDB adopts hybrid model Y for Q4.",
    author: "Chiru"
  })

  console.log("Created successfully:", result)
  await closeDb()
}

main().catch(console.error)
