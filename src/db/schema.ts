import { pgTable, integer, varchar, serial } from "drizzle-orm/pg-core";

export const usersTable = pgTable("users", {
  id: serial().primaryKey().unique(),
  name: varchar({ length: 255 }).notNull(),
  age: integer().notNull(),
  email: varchar({ length: 255 }).notNull().unique(),
});
