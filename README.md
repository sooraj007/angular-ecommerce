# Angular Shop

A modern e-commerce application built with Angular 19 and Express, featuring server-side rendering (SSR) and a robust SQLite database with Drizzle ORM.

## Tech Stack

### Frontend

- **Angular 19**: Latest version of Angular framework
- **TailwindCSS**: For utility-first CSS styling
- **Spartan NG**: UI component library for Angular
- **ng-icons**: Icon library including Lucide and Huge Icons sets
- **RxJS**: Reactive programming library

### Backend

- **Express.js**: Node.js web application framework
- **SQLite3**: Lightweight, file-based database
- **Drizzle ORM**: Modern TypeScript ORM
- **Angular SSR**: Server-side rendering implementation

## Architecture

### Frontend Architecture

- **Components-based structure** in `src/app/components/`
- **Services layer** for data management and API communication
- **Reactive state management** using RxJS
- **Modern UI/UX** with TailwindCSS and Spartan NG components
- **Type-safe** development with TypeScript

### Backend Architecture

- **Express server** with Angular SSR integration
- **RESTful API endpoints** for product and category management
- **Database service layer** abstracting data operations
- **Drizzle ORM** for type-safe database operations
- **Migration system** for database schema management

## Project Structure

```
angular-shop/
├── src/
│   ├── app/               # Angular application code
│   │   ├── components/    # UI components
│   │   ├── services/     # Angular services
│   │   └── routes.ts     # Application routing
│   ├── server/           # Backend server code
│   │   ├── db/          # Database configuration and migrations
│   │   └── services/    # Backend services
│   └── server.ts         # Express server setup
├── public/               # Static assets
├── drizzle/             # Drizzle ORM migrations
└── dist/                # Build output
```

## Setup and Installation

1. **Clone the repository**

```bash
git clone [repository-url]
cd angular-shop
```

2. **Install dependencies**

```bash
npm install
```

3. **Database Setup**

```bash
npm run db:generate  # Generate database migrations
npm run db:migrate  # Apply migrations
npm run db:seed     # Seed initial data
```

4. **Development Server**

```bash
npm start
```

5. **Build for Production**

```bash
npm run build
```

## Available Scripts

- `npm start`: Start development server
- `npm run build`: Build for production
- `npm run build:server`: Build server-side code
- `npm run serve:ssr`: Start SSR server
- `npm run db:generate`: Generate database migrations
- `npm run db:migrate`: Run database migrations
- `npm run db:seed`: Seed database with initial data

## Database Schema

The application uses SQLite with Drizzle ORM for data persistence. Key tables include:

- Products
- Categories
- Product-Category relationships

## API Endpoints

- `GET /api/products`: Fetch all products
- `POST /api/products/filter`: Get filtered products
- `GET /api/categories`: Fetch all categories

## Performance Optimizations

- Server-side rendering for improved initial load
- Static file caching
- Optimized image serving
- Tailwind CSS purging for production builds

## Development Guidelines

- Follow Angular style guide
- Use TypeScript strict mode
- Implement lazy loading for routes
- Write unit tests for components and services
- Follow REST API best practices

## Requirements

- Node.js 18+
- npm 9+
- Modern web browser
- SQLite3

## License

[Your License Here]
