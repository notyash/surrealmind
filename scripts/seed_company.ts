import { AgentMemoryError } from "@surrealdb/memory";
import { whoAmI } from "../src/config.js";

async function main(): Promise<void> {
  const admin = await whoAmI("ADMIN_KEY");

  console.log("\n=== 1. Ensuring Scope Hierarchy Exists ===");
  const targetScopes = [
    "company",
    "company/finance",
    "company/finance/chiru",
    "company/marketing",
    "company/marketing/yash",
  ];

  for (const path of targetScopes) {
    await admin.memory.scopes.register({ path });
    console.log(`✓ Scope active: ${path}`);
  }

  console.log("\n=== 2. Seeding Foundation Truth (company/) ===");
  await admin.memory.remember(
    "SurrealDB HQ is in London. Co-founder and CEO is Tobie. Chiru is the Head of Finance at SurrealDB. Enterprise Agent Memory supports hierarchical scopes and attenuated API keys.",
    {
      scopes: "company",
      labels: ["tier=foundation", "origin=seed"],
    }
  );
  console.log("✓ Foundation company facts seeded.");

  console.log("\n=== 3. Seeding Finance Department Context (company/finance/) ===");
  await admin.memory.remember(
    "Finance department target gross margin for Q4 is 78 percent.",
    {
      scopes: "company/finance",
      labels: ["tier=department", "department=finance"],
    }
  );
  console.log("✓ Finance department facts seeded.");

  console.log("\n=== 4. Seeding Chiru's Clean Private Draft (company/finance/chiru/) ===");
  // Grounding Chiru strictly at SurrealDB eliminates any spurious entity links:
  await admin.memory.remember(
    "In a private financial draft for SurrealDB, Chiru evaluated external market rates and proposed that SurrealDB adopt an internal hybrid pricing model Y.",
    {
      scopes: "company/finance/chiru",
      labels: ["tier=scratch", "author=chiru", "status=draft"],
    }
  );
  console.log("✓ Chiru private draft seeded.");

  console.log("\n=== 5. Seeding Yash's Marketing Notes (company/marketing/yash/) ===");
  await admin.memory.remember(
    "Competitor Beta announced they are dropping free tier limits next month. Marketing team is preparing alternative positioning campaigns.",
    {
      scopes: "company/marketing/yash",
      labels: ["tier=scratch", "author=yash", "status=draft"],
    }
  );
  console.log("✓ Yash marketing draft seeded.");

  console.log("\n=== Pristine Seeding Complete ===");
}

main().catch((err) => {
  if (err instanceof AgentMemoryError) {
    console.error(`AgentMemoryError [${err.status} ${err.title}]: ${err.message}`);
  } else {
    console.error(err);
  }
  process.exitCode = 1;
});
