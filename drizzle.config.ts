import type { Config } from 'drizzle-kit';

export default {
  schema: './src/server/db/schema.ts',
  out: './drizzle',
  dialect: 'sqlite',
  driver: 'd1-http',
  dbCredentials: {
    accountId: 'dummy',
    databaseId: 'local',
    token: 'dummy',
  },
} satisfies Config;
