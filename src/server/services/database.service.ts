import { db } from '../db';
import { products, categories } from '../db/schema';
import { eq } from 'drizzle-orm';

export class DatabaseService {
  async getProducts() {
    return db.select().from(products);
  }

  async getProductById(id: number) {
    return db.select().from(products).where(eq(products.id, id)).get();
  }

  async getProductsByCategory(categoryId: number) {
    return db
      .select()
      .from(products)
      .where(eq(products.categoryId, categoryId));
  }

  async getCategories() {
    return db.select().from(categories);
  }
}
