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

const config = {
  driver: "d1",
  dbCredentials, // Correctly typed credentials object
  // Add connectionString here if it's part of the expected configuration
  // You may remove this if not required
  // connectionString: process.env.DATABASE_URL!,
};

export default config;
