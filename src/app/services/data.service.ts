import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private http: HttpClient) {}

  getProducts() {
    return this.http.get('/api/products');
  }

  getProduct(id: number) {
    return this.http.get(`/api/products/${id}`);
  }

  getCategories() {
    return this.http.get('/api/categories');
  }

  getCategoryProducts(categoryId: number) {
    return this.http.get(`/api/categories/${categoryId}/products`);
  }
}
