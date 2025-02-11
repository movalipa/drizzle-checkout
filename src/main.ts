import "dotenv/config";
import { drizzle } from "drizzle-orm/node-postgres";
import { usersTable } from "./db/schema.js";

const db = drizzle(process.env.DATABASE_URL!);

async function main() {
  const res = await db
    .insert(usersTable)
    .values({ name: "me", age: 20, email: "sa" })
    .catch((s) => s);
  console.log("new user", res);
}

main();
