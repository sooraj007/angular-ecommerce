import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from '../../services/data.service';
import { HlmButtonDirective } from '@spartan-ng/ui-button-helm';

@Component({
  selector: 'app-product-grid',
  standalone: true,
  imports: [CommonModule, HlmButtonDirective],
  templateUrl: './product-grid.component.html',
})
export class ProductGridComponent {
  private dataService = inject(DataService);
  products = this.dataService.products;

  ngOnInit() {
    this.dataService.getProducts();
  }
}
