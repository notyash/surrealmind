import { whoAmI } from "../packages/core/src/services/memorySetup.js";


async function verifyPromotion() {
    const yash = await whoAmI("YASH_KEY")
    const sam = await whoAmI("SAM_KEY")
    const chiru = await whoAmI("CHIRU_KEY")
    const question = "Which internal hybrid pricing model is SurrealDB adopting for Q4 enterprise?"

    // 1. Yash Check: Cross-team boundary (Yash MUST NOT see the promoted finance fact)
    const yashRecall = await yash.memory.recall(question, { k: 3 })
    const yashLeaked = yashRecall.hits.some(h => h.text.toLowerCase().includes("pricing model y"))
    if (yashLeaked) {
        console.log("❌ Failed! Yash can read the finance-scoped promoted memory.")
    } else {
        console.log("✓ Success! Yash cannot see the finance-scoped promoted fact.")
    }

    // 2. Sam Check: Department access (Sam MUST see the promoted fact in company/finance/)
    const samRecall = await sam.memory.recall(question, { k: 3 })
    const samSeesFact = samRecall.hits.some(h => h.text.toLowerCase().includes("pricing model y"))
    if (samSeesFact) {
        console.log("✓ Success! Sam has access to the promoted fact in company/finance/.")
    } else {
        console.log("❌ Failed! Sam cannot see the promoted fact.")
    }

    // 3. Chiru Check: Draft retirement (The raw draft chunk in company/finance/chiru/ was retired)
    const chiruRecall = await chiru.memory.recall(question, { lens: "company/finance/chiru", k: 3 })
    const draftChunkRemains = chiruRecall.hits.some(
        h => h.source === "memory_chunk" && h.text.includes("evaluated external market rates")
    )
    if (draftChunkRemains) {
        console.log("❌ Failed! Chiru's raw draft chunk still exists in private scope.")
    } else {
        console.log("✓ Success! Chiru's raw draft chunk was retired.")
    }
}

async function main() {
    const admin = await whoAmI("ADMIN_KEY")
    // const promoted = await promote(admin.memory, request)
    await verifyPromotion()
}

main().catch((e) => {
    console.log(e)
    process.exit(1)
})