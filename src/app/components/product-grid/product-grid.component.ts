import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HlmButtonDirective } from '@spartan-ng/ui-button-helm';

import { HlmBadgeDirective } from '@spartan-ng/ui-badge-helm';

@Component({
  selector: 'app-product-grid',
  imports: [CommonModule, HlmButtonDirective, HlmBadgeDirective],
  templateUrl: './product-grid.component.html',
  styleUrl: './product-grid.component.scss',
})
export class ProductGridComponent {
  products = [
    {
      id: 1,
      name: 'Fresh Cauliflower',
      price: 16.0,
      originalPrice: 20.0,
      image: '/placeholder.svg',
      discount: '20%',
      sale: true,
      available: true,
    },
    {
      id: 2,
      name: 'Fresh Grapefruit',
      price: 16.0,
      originalPrice: 20.0,
      image: '/placeholder.svg',
      discount: '20%',
      sale: true,
      available: true,
    },
    {
      id: 3,
      name: 'Organic Carrots',
      price: 12.0,
      originalPrice: 15.0,
      image: '/placeholder.svg',
      discount: '20%',
      sale: true,
      available: true,
    },
    {
      id: 4,
      name: 'Red Bell Peppers',
      price: 14.0,
      originalPrice: 18.0,
      image: '/placeholder.svg',
      discount: '22%',
      sale: true,
      available: true,
    },
    {
      id: 5,
      name: 'Fresh Spinach',
      price: 10.0,
      originalPrice: 12.0,
      image: '/placeholder.svg',
      discount: '17%',
      sale: true,
      available: true,
    },
    {
      id: 6,
      name: 'Ripe Tomatoes',
      price: 13.0,
      originalPrice: 16.0,
      image: '/placeholder.svg',
      discount: '19%',
      sale: true,
      available: true,
    },
    {
      id: 7,
      name: 'Green Broccoli',
      price: 15.0,
      originalPrice: 19.0,
      image: '/placeholder.svg',
      discount: '21%',
      sale: true,
      available: true,
    },
    {
      id: 8,
      name: 'Fresh Cucumbers',
      price: 11.0,
      originalPrice: 14.0,
      image: '/placeholder.svg',
      discount: '21%',
      sale: true,
      available: true,
    },
    {
      id: 9,
      name: 'Red Onions',
      price: 9.0,
      originalPrice: 11.0,
      image: '/placeholder.svg',
      discount: '18%',
      sale: true,
      available: true,
    },
    {
      id: 10,
      name: 'Sweet Potatoes',
      price: 12.0,
      originalPrice: 15.0,
      image: '/placeholder.svg',
      discount: '20%',
      sale: true,
      available: true,
    },
  ];
}
