import "dotenv/config";
import type { Config } from "drizzle-kit";

// Define the DBCredentials interface with all required properties
interface DBCredentials {
  connectionString: string;
  // Add any other properties if required by the drizzle-kit library
  // e.g., host?: string; port?: number; username?: string; password?: string;
}

const config: Config = {
  schema: "./db/schema.ts",
  out: "./drizzle",
  driver: "d1",
  dbCredentials: {
    connectionString: process.env.DATABASE_URL!,
    // Include any additional properties if necessary
  } satisfies DBCredentials, // Ensure type casting to match expected type
};

export default config;
