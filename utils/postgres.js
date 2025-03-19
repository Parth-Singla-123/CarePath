import {Pool} from "pg";

const db = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false, // Required for providers like Neon, Supabase, etc.
  },
});

export async function query(text, params) {
  const result = await db.query(text, params);
  return result;
}


export default db;