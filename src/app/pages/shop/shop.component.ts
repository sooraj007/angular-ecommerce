import { Component } from '@angular/core';
import { SortSelectComponent } from '../../components/sort-select/sort-select.component';
import { FilterSectionComponent } from '../../components/filter-section/filter-section.component';
import { ProductGridComponent } from '../../components/product-grid/product-grid.component';

@Component({
  selector: 'app-shop',
  standalone: true,
  imports: [SortSelectComponent, FilterSectionComponent, ProductGridComponent],
  templateUrl: './shop.component.html',
})
export class ShopComponent {}
