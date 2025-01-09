import { db } from './index';
import { categories, products, users } from './schema';

async function seed() {
  console.log('Seeding database...');

  // Insert categories
  const categoryIds = await db
    .insert(categories)
    .values([
      { name: 'Vegetables', description: 'Fresh organic vegetables' },
      { name: 'Fruits', description: 'Fresh seasonal fruits' },
      { name: 'Dairy', description: 'Dairy products and alternatives' },
      { name: 'Bakery', description: 'Fresh baked goods' },
    ])
    .returning({ id: categories.id });

  // Insert products
  await db.insert(products).values([
    {
      name: 'Fresh Carrots',
      description: 'Organic carrots, locally sourced',
      price: 2.99,
      originalPrice: 3.99,
      image: '/images/carrots.jpg',
      discount: '25% OFF',
      sale: true,
      available: true,
      categoryId: categoryIds[0].id,
    },
    {
      name: 'Broccoli',
      description: 'Fresh green broccoli',
      price: 1.99,
      originalPrice: 2.49,
      image: '/images/broccoli.jpg',
      discount: '20% OFF',
      sale: true,
      available: true,
      categoryId: categoryIds[0].id,
    },
    {
      name: 'Organic Apples',
      description: 'Sweet and crispy apples',
      price: 4.99,
      originalPrice: 5.99,
      image: '/images/apples.jpg',
      discount: '15% OFF',
      sale: true,
      available: true,
      categoryId: categoryIds[1].id,
    },
    {
      name: 'Bananas',
      description: 'Ripe yellow bananas',
      price: 1.99,
      originalPrice: 2.49,
      image: '/images/bananas.jpg',
      discount: '20% OFF',
      sale: true,
      available: true,
      categoryId: categoryIds[1].id,
    },
    {
      name: 'Organic Milk',
      description: 'Fresh organic whole milk',
      price: 3.99,
      originalPrice: 4.99,
      image: '/images/milk.jpg',
      discount: '20% OFF',
      sale: true,
      available: true,
      categoryId: categoryIds[2].id,
    },
    {
      name: 'Greek Yogurt',
      description: 'Creamy Greek yogurt',
      price: 4.99,
      originalPrice: 5.99,
      image: '/images/yogurt.jpg',
      discount: '15% OFF',
      sale: true,
      available: true,
      categoryId: categoryIds[2].id,
    },
    {
      name: 'Sourdough Bread',
      description: 'Freshly baked sourdough',
      price: 5.99,
      originalPrice: 6.99,
      image: '/images/sourdough.jpg',
      discount: '15% OFF',
      sale: true,
      available: true,
      categoryId: categoryIds[3].id,
    },
    {
      name: 'Croissants',
      description: 'Buttery French croissants',
      price: 3.99,
      originalPrice: 4.99,
      image: '/images/croissants.jpg',
      discount: '20% OFF',
      sale: true,
      available: true,
      categoryId: categoryIds[3].id,
    },
    {
      name: 'Tomatoes',
      description: 'Vine-ripened tomatoes',
      price: 2.99,
      originalPrice: 3.99,
      image: '/images/tomatoes.jpg',
      discount: '25% OFF',
      sale: true,
      available: true,
      categoryId: categoryIds[0].id,
    },
    {
      name: 'Oranges',
      description: 'Sweet juicy oranges',
      price: 3.99,
      originalPrice: 4.99,
      image: '/images/oranges.jpg',
      discount: '20% OFF',
      sale: true,
      available: true,
      categoryId: categoryIds[1].id,
    },
    {
      name: 'Cheese',
      description: 'Aged cheddar cheese',
      price: 6.99,
      originalPrice: 8.99,
      image: '/images/cheese.jpg',
      discount: '22% OFF',
      sale: true,
      available: true,
      categoryId: categoryIds[2].id,
    },
    {
      name: 'Baguette',
      description: 'Traditional French baguette',
      price: 2.99,
      originalPrice: 3.99,
      image: '/images/baguette.jpg',
      discount: '25% OFF',
      sale: true,
      available: true,
      categoryId: categoryIds[3].id,
    },
  ]);

  // Insert a demo user
  await db.insert(users).values({
    email: 'demo@example.com',
    password: 'demo123', // In a real app, this should be hashed
    name: 'Demo User',
  });

  console.log('Seeding completed successfully!');
}

seed().catch((error) => {
  console.error('Error seeding database:', error);
  process.exit(1);
});
