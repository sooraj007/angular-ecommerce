import { Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private productsSignal = signal<any[]>([]);
  readonly products = this.productsSignal.asReadonly();

  constructor(private http: HttpClient) {}

  getProducts() {
    this.http.get<any[]>('/api/products').subscribe((products) => {
      this.productsSignal.set(products);
    });
  }

  filterProducts(filter: any) {
    console.log(filter);
    this.http
      .post<any[]>('/api/products/filter', filter)
      .subscribe((products) => {
        this.productsSignal.set(products);
      });
  }

  getCategories() {
    return this.http.get('/api/categories');
  }
}
