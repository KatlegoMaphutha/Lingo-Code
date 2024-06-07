import "dotenv/config";
import type { Config } from "drizzle-kit";

interface DBCredentials {
  connectionString: string;
}

const config: Config = {
  schema: "./db/schema.ts",
  out: "./drizzle",
  driver: "pg",
  dbCredentials: {
    connectionString: process.env.DATABASE_URL!,
  } as DBCredentials, // Ensure type casting to match expected type
};
