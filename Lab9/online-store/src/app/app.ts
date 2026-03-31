import { Component, signal, inject } from '@angular/core';
import { ProductList } from './components/product-list/product-list';
import { Category } from './models/category-model';
import { ProductService } from './services/product-service';
import { Product } from './models/product-model';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ProductList, RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('Kaspi.kz');
  private productService = inject(ProductService);

  categories: Category[] = this.productService.categories;
  selectedCategoryId: number = 1;

  get filteredProducts(): Product[] {
    return this.productService.products.filter(
      (product) => product.categoryId === this.selectedCategoryId,
    );
  }

  onProductRemove(productId: number): void {
    this.productService.products = this.productService.products.filter(
      (product) => product.id !== productId,
    );
  }
  selectCategory(id: number): void {
    if (this.selectedCategoryId === id) {
      return;
    }
    this.selectedCategoryId = id;
  }
}
