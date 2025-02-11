import "dotenv/config";
import { drizzle } from "drizzle-orm/node-postgres";
import { usersTable } from "./db/schema.js";
import { eq, ne, sql } from "drizzle-orm";

const db = drizzle(process.env.DATABASE_URL!);

async function main() {
  //   const res = await db
  //     .insert(usersTable)
  //     .values({ name: "me", age: 20, email: "dsdss" });
  //   await db.update(usersTable).set({ age: 0 }).where(eq(usersTable.email, "sa"));
  //   await db.delete(usersTable).where(eq(usersTable.name, "me"));

  const res = await db.select().from(usersTable);
  console.log(res);
}

main();
