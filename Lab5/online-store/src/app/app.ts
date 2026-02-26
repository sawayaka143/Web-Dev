import { Component, signal, inject } from '@angular/core';
import { RouterOutlet, RouterLinkWithHref } from '@angular/router';
import { ProductList } from './components/product-list/product-list';
import { Category } from './models/category';
import { ProductService } from './services/product-service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ProductList, RouterLinkWithHref],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Kaspi.kz');

  private ProductService = inject(ProductService);
  categories: Category[] = this.ProductService.categories;
}
