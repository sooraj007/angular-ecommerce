import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ShopComponent } from './pages/shop/shop.component';

export const routes: Routes = [
  /*   {
    path: '',
    component: HomeComponent,
    title: 'Home',
  }, */
  {
    path: '',
    redirectTo: 'shop',
    pathMatch: 'full',
  },
  {
    path: 'shop',
    component: ShopComponent,
    title: 'Shop',
  },
];
