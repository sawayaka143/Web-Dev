import { Routes } from '@angular/router';
import { Home } from './home/home';
import { ProductList } from './components/product-list/product-list';
import { ProductDetail } from './components/product-details/product-details';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'products', component: ProductList },
  { path: 'products/:id', component: ProductDetail },
  { path: '**', redirectTo: '' }
];
