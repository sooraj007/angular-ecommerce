import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  template: `
    <div class="container mx-auto p-4">
      <h1 class="text-2xl font-bold">Welcome to Angular Shop</h1>
      <p>This is your home page</p>
    </div>
  `,
})
export class HomeComponent {}
