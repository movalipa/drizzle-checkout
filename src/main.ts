import "dotenv/config";
import { drizzle } from "drizzle-orm/node-postgres";
import * as schema from "./db/schema.ts";
import { eq, ne, sql } from "drizzle-orm";

const db = drizzle(process.env.DATABASE_URL!, { schema });

async function main() {
  //   const res = await db
  //     .insert(usersTable)
  //     .values({ name: "me", age: 20, email: "dsdss" });
  //   const res = await db.insert(postsTable).values({
  //     title: "how to do this!",
  //     userId: 13,
  //     content: "this is content",
  //   });
  //   await db.update(usersTable).set({ age: 0 }).where(eq(usersTable.email, "sa"));
  //   await db.delete(usersTable).where(eq(usersTable.name, "me"));

  //   const sel = await db.select().from(usersTable);
  //   const sel = await db
  //     .select({ id: usersTable.id, posts: sql`array_agg(${postsTable.id})` })
  //     .from(usersTable)
  //     .leftJoin(postsTable, eq(usersTable.id, postsTable.userId))
  //     .groupBy(usersTable.id)
  //     .orderBy(usersTable.id);
  const query = await db.query.usersTable.findMany({ with: { posts: true } });
  console.log(query);
}

main();
