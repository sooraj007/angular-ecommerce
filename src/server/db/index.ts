import { drizzle } from 'drizzle-orm/better-sqlite3';
import Database from 'better-sqlite3';
import * as schema from './schema';
import path from 'path';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const dbPath = path.join(__dirname, '../../../sqlite.db');

const sqlite = new Database(dbPath);
export const db = drizzle(sqlite, { schema });
