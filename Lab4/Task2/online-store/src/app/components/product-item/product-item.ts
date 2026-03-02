import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Product } from '../../models/product.model';
import { Category } from '../../models/category';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-item',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './product-item.html',
  styleUrl: './product-item.css',
})
export class ProductItem {
  searchTerm: string = '';

  filterByName(text: string) {
    this.searchTerm = text.toLowerCase();
  }

  getFilteredProducts() {
    return this.products.filter((p) => p.name.toLowerCase().includes(this.searchTerm));
  }

  // Share function
  share(link: string, platform: 'whatsapp' | 'telegram', productName?: string) {
    const encodedUrl = encodeURIComponent(link);
    if (platform === 'whatsapp') {
      const text = encodeURIComponent(`Check out this product: ${link}`);
      window.open(`https://wa.me/?text=${text}`, '_blank');
    } else {
      const text = encodeURIComponent(productName ?? '');
      window.open(`https://t.me/share/url?url=${encodedUrl}&text=${text}`, '_blank');
    }
  }
}
