import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <div *ngIf="product" class="detail-container">
      <img [src]="product.image" class="detail-image">
      <div class="info">
        <h2>{{ product.name }}</h2>
        <p class="desc">{{ product.description }}</p>
        <div class="price-tag">{{ product.price }} ₸</div>
        <button (click)="goBack()">Back to List</button>
      </div>
    </div>
    <div *ngIf="!product">Product not found.</div>
  `,
  styles: [`
    .detail-container { padding: 20px; display: flex; gap: 40px; }
    .detail-image { max-width: 400px; border: 1px solid #eee; }
    .info { display: flex; flex-direction: column; gap: 15px; }
    .price-tag { font-size: 24px; font-weight: bold; color: #333; }
  `]
})
export class ProductDetail implements OnInit {
  product: any;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    
  }

  goBack() {
    window.history.back();
  }
}
