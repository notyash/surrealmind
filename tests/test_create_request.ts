import { createPromotionRequest } from "../packages/core/src/repos/promotionRequest.js"
import { db } from "../packages/core/src/utils/surrealdb.js"

async function main() {
  const result = await createPromotionRequest({
    fromScope: "company/finance/chiru",
    toScope: "company/finance",
    originalDraft: "Chiru proposed hybrid model Y.",
    reviewedFact: "SurrealDB adopts hybrid model Y for Q4.",
    author: "Chiru",
  })

  console.log("Created successfully:", result)
  await db.close()
}

main().catch(console.error)