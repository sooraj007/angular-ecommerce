import {
  AngularNodeAppEngine,
  createNodeRequestHandler,
  isMainModule,
  writeResponseToNodeResponse,
} from '@angular/ssr/node';
import express from 'express';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { DatabaseService } from './server/services/database.service';

const serverDistFolder = dirname(fileURLToPath(import.meta.url));
const browserDistFolder = resolve(serverDistFolder, '../browser');

const dbService = new DatabaseService();
const app = express();

// Add middleware to parse JSON bodies - this must come before routes
app.use(express.json());

// Static files middleware
app.use(
  '/images',
  express.static('public/images', {
    etag: false,
    maxAge: 0,
    lastModified: true,
  })
);

// API Routes
app.get('/api/products', async (req, res) => {
  const products = await dbService.getProducts();
  res.json(products);
});

app.post('/api/products/filter', async (req, res) => {
  const products = await dbService.getProductsByFilter(req.body);
  res.json(products);
});

app.get('/api/categories', async (req, res) => {
  const categories = await dbService.getCategories();
  res.json(categories);
});

// Angular SSR setup
const angularApp = new AngularNodeAppEngine();

app.use(
  express.static(browserDistFolder, {
    maxAge: '1y',
    index: false,
    redirect: false,
  })
);

app.use('/**', (req, res, next) => {
  angularApp
    .handle(req)
    .then((response) =>
      response ? writeResponseToNodeResponse(response, res) : next()
    )
    .catch(next);
});

if (isMainModule(import.meta.url)) {
  const port = process.env['PORT'] || 4000;
  app.listen(port, () => {
    console.log(`Node Express server listening on http://localhost:${port}`);
  });
}

export const reqHandler = createNodeRequestHandler(app);
