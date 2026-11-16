import { whoAmI } from "../src/config.js";

async function main(): Promise<void> {
  const admin = await whoAmI("ADMIN_KEY");
  console.log("Wiping entire memory context...");
  const res = await admin.memory.scopes.forget({ path: "/" });
  console.log(`✓ Wiped ${res.forgotten ?? 0} rows across all scopes.`);
}

main().catch((err) => {
  console.error("Wipe failed:", err);
  process.exit(1);
});
