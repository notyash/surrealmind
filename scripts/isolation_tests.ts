import { AgentMemory, AgentMemoryError, ScopeError } from "@surrealdb/memory";
import { createMemoryClient, requireEnv, type RoleKeyEnv } from "../src/config.js";

type WhoAmIJson = {
    role: RoleKeyEnv,
    delegatedPrincipalId?: string | null;
    displayName: string;
    effectiveGrants: {
        [key: string]: string[];
    };
    grants: {
        [key: string]: string[];
    };
    kind: string;
    principalId: string;
    tokenGrants?: {
        [key: string]: string[];
    } | null;
}

type WhoAmI = {
    memory: AgentMemory,
    info: WhoAmIJson
}

export async function whoAmI(apiKey: RoleKeyEnv) : Promise<WhoAmI> {
    const memory = createMemoryClient(requireEnv(apiKey));
    const me = await memory.whoami()
    if (!me) {
        throw new Error
    }
    console.log(`Principal: ${me.displayName} | Role: ${apiKey} exists!`)
    return {
        memory, 
        info: {role: apiKey, ...me}
    }
}

// Verifies each user can successfully write a memory into their own assigned scope.
async function testAuthorizedWrites(who: WhoAmI) {
    const writeScopes = who.info.effectiveGrants['memory:write']
    if (!writeScopes) throw new Error(`No write scopes registered for ${who.info.role}.`);

    try {
        await who.memory.remember("Testing whether the agent can write into its allowed scopes.",
            { scopes: writeScopes[0] }
        )
        console.log(`Memory successfully written to scope: ${writeScopes}`)
    } catch (err) {
        throw new Error(`Write failed for ${who.info.role}: ${err}`)
    }
}   

function normalize(s: string): string {
    return s.replace(/\/+$/, "");
}

// Verifies that attempting to write outside an assigned scope is rejected by the server.
async function testUnauthorizedWrites(who: WhoAmI, allScopes: string[]) {
    const allowedWrites = (who.info.effectiveGrants['memory:write'] ?? []).map(s => normalize(s))
    if (allowedWrites.includes("/*")) {
        console.log(`[${who.info.role}] has root write access (/*). Skipping unauthorized write test.`)
        return
    }

    const targetScope = allScopes.find(s => s.length > 0 && !allowedWrites.includes(s));

    if (!targetScope) {
        console.log(`[${who.info.role}] has write access to all registered scopes. Skipping.`);
        return;
    }

    try {
        await who.memory.remember("Testing whether the agent can write outside its allowed scopes",
            { scopes: targetScope }
        );
        throw new Error(`Security failure: write succeeded for ${who.info.role} to scope '${targetScope}' when it should have been denied.`);

    } catch (e) {
        if (e instanceof AgentMemoryError){
            console.log(`Write correctly denied (403) for scope '${targetScope}': ${e.title ?? e.message}`);
        } else {
            throw e;
        }
    }
}

// Verifies cross-scope queries do not leak unauthorized data.
export async function testReadIsolation(who: WhoAmI, allScopes: string[]) {
    const allowedReadScopes = (who.info.effectiveGrants["memory:read"] ?? []).map(s => normalize(s));
    const forbiddenScopes = allScopes.filter(
        (s) => s.length > 0 && !allowedReadScopes.includes(s)
    )

    try {
        console.log("Forbidden scopes passed to lens:", forbiddenScopes);

  
        const recallRes = await who.memory.recall("What did Chiru propose?", {
            lens: forbiddenScopes,
            k: 3,
        });
        console.log("Hits returned for: " + who.info.role + JSON.stringify(recallRes.hits, null, 2))
        if (recallRes.hits.length > 0) {
            throw new Error(`Read isolation failed for ${who.info.role}.`)
        }

        console.log(`Read isolation succeeded for ${who.info.role}!`)

    } catch (err) {
        throw new Error(`${err}`)
    }
}

export default async function main() {
    const roles: RoleKeyEnv[] = ["YASH_KEY", "SAM_KEY", "CHIRU_KEY"];
    const admin = await whoAmI("ADMIN_KEY")
    const allScopes = (await admin.memory.scopes.listAll()).map(s => normalize(s.path));

    for (const role of roles) {
        const who = await whoAmI(role);
        await testAuthorizedWrites(who);
        await testUnauthorizedWrites(who, allScopes);
        await testReadIsolation(who, allScopes);
    }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
})