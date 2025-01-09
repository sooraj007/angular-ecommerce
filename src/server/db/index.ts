import { drizzle } from 'drizzle-orm/better-sqlite3';

import * as schema from './schema';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';
import { createRequire } from 'module';

const require = createRequire(import.meta.url);
const Database = require('better-sqlite3');
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const dbPath = join(__dirname, '../../../sqlite.db');
const sqlite = new Database(dbPath);
export const db = drizzle(sqlite, { schema });
