import { relations } from "drizzle-orm";
import { pgTable, integer, varchar, serial, text } from "drizzle-orm/pg-core";

export const usersTable = pgTable("users", {
  id: serial().primaryKey(),
  name: varchar({ length: 255 }).notNull(),
  age: integer().notNull(),
  email: varchar({ length: 255 }).notNull().unique(),
});

export const postsTable = pgTable("posts", {
  id: serial().primaryKey(),
  userId: integer()
    .notNull()
    .references(() => usersTable.id, { onDelete: "cascade" }),
  title: varchar({ length: 255 }).notNull(),
  content: text().notNull(),
});

export const usersTableRelation = relations(usersTable, ({ many }) => ({
  posts: many(postsTable),
}));
export const postsTableRelation = relations(postsTable, ({ one }) => ({
  user: one(usersTable, {
    fields: [postsTable.userId],
    references: [usersTable.id],
  }),
}));
