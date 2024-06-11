import { Config } from 'drizzle-orm';

interface DBCredentials {
  wranglerConfigPath: string;
  dbName: string;
  // Include any additional properties if required by the type
}

const dbCredentials: DBCredentials = {
  wranglerConfigPath: process.env.WRANGLER_CONFIG_PATH!,
  dbName: process.env.DB_NAME!,
  // Additional properties here if needed
};

const config: Config = {
  driver: "d1",
  dbCredentials, // Correctly typed credentials object
  // Add connectionString here if it's part of the Config but not dbCredentials
  connectionString: process.env.DATABASE_URL!,
};

export default config;
