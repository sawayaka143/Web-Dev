import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../../models/product';

@Component({
  selector: 'app-product-item',
  standalone: true,
  imports: [],
  templateUrl: './product-item.html',
  styleUrl: './product-item.css',
})
export class ProductItem {
  @Input({ required: true }) product!: Product;
  @Output() remove = new EventEmitter<number>();

  isLiked: boolean = false;
  like(): void {
    if (this.isLiked) {
      alert(`You already have liked: ${this.product.name}!`);
      return;
    }
    this.product.likes += 1;
    this.isLiked = true;
  }

  onDelete(): void {
    const confirmDelete = confirm(`Are you sure you want to delete ${this.product.name}?`);

    if (confirmDelete) {
      this.remove.emit(this.product.id);
    }
  }

  share(platform: 'whatsapp' | 'telegram'): void {
    const url = encodeURIComponent(this.product.link);
    const text = encodeURIComponent(`Wowie! A PRODUCT!? LOOKA HERE: ${this.product.name}`);

    if (platform === 'whatsapp') {
      window.open(`https://wa.me/?text=${text}%20${url}`, '_blank');
    } else if (platform === 'telegram') {
      window.open(`https://t.me/share/url?url=${url}&text=${text}`, '_blank');
    }
  }
}
