import { db } from '../db';
import { products, categories } from '../db/schema';
import { and, eq, gte, lte, SQL, sql, inArray } from 'drizzle-orm';

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

  async getProductsByFilter(filter?: {
    priceRange?: {
      min?: number;
      max?: number;
    };
    unit?: string;
    categories?: string[];
    rating?: string[];
  }) {
    let conditions: SQL[] = [];
    console.log(filter);
    if (
      filter?.priceRange?.min !== undefined &&
      filter?.priceRange?.max !== undefined
    ) {
      conditions.push(
        sql`${products.price} >= ${filter.priceRange.min} and ${products.price} <= ${filter.priceRange.max}`
      );
    }

    if (filter?.categories?.length) {
      const categoryIds = filter.categories.map(Number);
      conditions.push(inArray(products.categoryId, categoryIds));
    }

    if (filter?.rating?.length) {
      //conditions.push(inArray(products.rating, filter.rating));
    }

    return db
      .select()
      .from(products)
      .where(conditions.length > 0 ? and(...conditions) : sql`1=1`);
  }
}
