import { AgentMemoryError } from "@surrealdb/memory";
import { testReadIsolation, whoAmI } from "./isolation_tests.js";

async function main(): Promise<void> {

  // 1. Verify identity and effective grants
  console.log("=== Whoami ===");
  const admin = await whoAmI("ADMIN_KEY")

  // // 2. Inspect registered scope tree
  // const scopes = await memory.scopes.listAll();
  // console.log("\n=== Registered Scopes ===");
  // for (const s of scopes) {
  //   const status = s.tombstonedAt ? `tombstoned=${s.tombstonedAt}` : "active";
  //   console.log(`- ${s.path} (${status})`);
  // }

  // // 3. Seed a baseline company-wide fact into "company"
  // console.log("\n=== Remember (company scope) ===");
  // const writeRes = await memory.remember(
  //   "SurrealDB HQ is in London. Co-founder and CEO is Tobie. Enterprise Agent Memory supports hierarchical scopes and attenuated API keys.",
  //   {
  //     scopes: "company",
  //     labels: ["tier=foundation", "origin=seed"],
  //   }
  // );
  // console.log("Write mode:", writeRes.mode);
  // console.log("Session ID:", writeRes.sessionId);
  // console.log("Turn ID:", writeRes.turnId ?? "(none)");
  // console.log("Chunk ID:", writeRes.chunkId ?? "(none)");

  // 4. Query via recall() using a read lens narrowed to "company"
  console.log("\n=== Recall ===");
  const recallRes = await admin.memory.recall("What did Chiru propose?", {
    lens: "company/finance/chiru",
    k: 3,
  });
  console.log(
    `Tier=${recallRes.tier}, Kind=${recallRes.classificationKind}, QueryMs=${recallRes.queryMs}ms`
  );
  for (const hit of recallRes.hits) {
    console.log(`- [${hit.score.toFixed(3)}] (${hit.source}) ${hit.text}`);
  }

//   // 5. Query via context() to see the LLM-ready prompt block
//   console.log("\n=== Context (lens: company) ===");
//   const ctxRes = await memory.context("What did Chiru propose?", {
//     lens: "company",
//     k: 3,
//   });
//   console.log(`Tier=${ctxRes.tier}, QueryMs=${ctxRes.queryMs}ms\n`);
//   console.log(ctxRes.context);

}

main().catch((err) => {
  if (err instanceof AgentMemoryError) {
    console.error(`AgentMemoryError [${err.status} ${err.title}]: ${err.message}`);
  } else {
    console.error(err);
  }
  process.exitCode = 1;
});
