import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HlmCheckboxComponent } from '@spartan-ng/ui-checkbox-helm';
import { HlmLabelDirective } from '@spartan-ng/ui-label-helm';
import { HlmButtonDirective } from '@spartan-ng/ui-button-helm';
import { HlmInputDirective } from '@spartan-ng/ui-input-helm';
import { DataService } from 'src/app/services/data.service';

interface ProductFilter {
  priceRange: {
    min: number;
    max: number;
  };
  unit: string;
  categories: string[];
  rating: string[];
}

@Component({
  selector: 'app-filter-section',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    HlmCheckboxComponent,
    HlmLabelDirective,
    HlmButtonDirective,
    HlmInputDirective,
  ],
  templateUrl: './filter-section.component.html',
  styleUrl: './filter-section.component.scss',
})
export class FilterSectionComponent {
  private dataService = inject(DataService);
  categories: any[] = [];

  // Available options
  units = ['.5g', '1kg', '2kg', '3kg'];
  ratings = [
    { value: 'better', label: 'Better', color: 'bg-emerald-500' },
    { value: 'good', label: 'Good', color: 'bg-emerald-400' },
    { value: 'best', label: 'Best', color: 'bg-lime-400' },
    { value: 'good2', label: 'good', color: 'bg-yellow-400' },
    { value: 'not_good', label: 'Not good', color: 'bg-red-400' },
  ];

  // Filter state
  filter: ProductFilter = {
    priceRange: {
      min: 0,
      max: 1000,
    },
    unit: '.5g',
    categories: [],
    rating: [],
  };

  ngOnInit() {
    this.dataService.getCategories().subscribe((categories: any) => {
      this.categories = categories;
    });
  }

  updateCategoryFilter(categoryId: string) {
    const index = this.filter.categories.indexOf(categoryId);
    if (index === -1) {
      this.filter.categories.push(categoryId);
    } else {
      this.filter.categories.splice(index, 1);
    }
  }

  updateRatingFilter(rating: string) {
    const index = this.filter.rating.indexOf(rating);
    if (index === -1) {
      this.filter.rating.push(rating);
    } else {
      this.filter.rating.splice(index, 1);
    }
  }

  applyFilter() {
    console.log(this.filter);
    this.dataService.filterProducts(this.filter);
  }
}
