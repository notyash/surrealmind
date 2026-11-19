import { Surreal } from "surrealdb";
import { getDatabaseConfig } from "./config.js";

export const db = new Surreal()
const {url, username, password} = getDatabaseConfig()

await db.connect(url, {
    namespace: "surrealmind",
    database: "surrealmind",
    authentication: {
        username,
        password
    }
})

await db.ready
if (db.status == "connected") {
    console.log("connected")
}