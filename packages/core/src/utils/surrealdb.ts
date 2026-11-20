import { Surreal } from "surrealdb"
import { getDatabaseConfig } from "./config.js"

let dbInstance: Surreal | null = null

export async function getDb(): Promise<Surreal> {
  if (!dbInstance) {
    dbInstance = new Surreal()
    const { url, username, password } = getDatabaseConfig()

    await dbInstance.connect(url, {
      namespace: "surrealmind",
      database: "surrealmind",
      authentication: {
        username,
        password
      }
    })

    await dbInstance.ready
  }
  return dbInstance
}

export async function closeDb(): Promise<void> {
  if (dbInstance) {
    await dbInstance.close()
    dbInstance = null
  }
}
