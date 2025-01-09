import { drizzle } from 'drizzle-orm/better-sqlite3';
import { migrate } from 'drizzle-orm/better-sqlite3/migrator';
import Database from 'better-sqlite3';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const currentDir = dirname(fileURLToPath(import.meta.url));
const sqlite = new Database('sqlite.db');
const db = drizzle(sqlite);

// Use path.join to create correct path to migrations folder
const migrationsFolder = join(currentDir, '../../../drizzle');

console.log('Running migrations...');
console.log('Migrations folder:', migrationsFolder);

try {
  migrate(db, { migrationsFolder });
  console.log('Migrations completed successfully!');
} catch (error) {
  console.error('Migration failed:', error);
  process.exit(1);
}
