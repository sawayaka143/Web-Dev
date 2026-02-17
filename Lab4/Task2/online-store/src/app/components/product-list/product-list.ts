import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css',
})
export class ProductList {

    searchTerm: string = '';

    products: Product[] = [
      {
        id: 1,
        name: 'Apple iPhone 17 Pro 256Gb оранжевый',
        description: 'Apple iPhone 17 Pro 256Gb — это воплощение инноваций и стиля, сочетающее в себе непревзойденную производительность, потрясающую камеру и яркий OLED-дисплей.',
        rating: 5,
        price: 774648,
        image: 'https://resources.cdn-kaspi.kz/img/m/p/p18/p96/64168413.png?format=preview-large',
        images: ['https://resources.cdn-kaspi.kz/img/m/p/p29/p1e/64464409.jpg?format=gallery-medium',
          'https://resources.cdn-kaspi.kz/img/m/p/pfc/p95/64168414.png?format=gallery-medium',
          'https://resources.cdn-kaspi.kz/img/m/p/pfc/p95/64168414.png?format=gallery-medium'],
        link: 'https://kaspi.kz/shop/p/kotex-prokladki-ultra-night-duo-14-sht-100931591/?c=750000000'
      },
      {
        id: 2,
        name: 'Apple iPhone 15 128Gb черный',
        description: 'Apple iPhone 17 Pro 256Gb — это воплощение инноваций и стиля, сочетающее в себе непревзойденную производительность, потрясающую камеру и яркий OLED-дисплей.',
        rating: 5,
        price: 389663,
        image: 'https://resources.cdn-kaspi.kz/img/m/p/h1d/hfc/86303745998878.jpg?format=preview-large',
        images: ['https://resources.cdn-kaspi.kz/img/m/p/p29/p1e/64464409.jpg?format=gallery-medium',
          'https://resources.cdn-kaspi.kz/img/m/p/pfc/p95/64168414.png?format=gallery-medium',
          'https://resources.cdn-kaspi.kz/img/m/p/pfc/p95/64168414.png?format=gallery-medium'],
        link: 'https://kaspi.kz/shop/p/apple-iphone-15-128gb-chernyi-113137790/?c=750000000'
      },
      {
        id: 3,
        name: 'Apple iPhone 13 128Gb черный',
        description: 'Apple iPhone 17 Pro 256Gb — это воплощение инноваций и стиля, сочетающее в себе непревзойденную производительность, потрясающую камеру и яркий OLED-дисплей.',
        rating: 5,
        price: 306671,
        image: 'https://resources.cdn-kaspi.kz/img/m/p/h32/h70/84378448199710.jpg?format=preview-large',
        images: ['https://resources.cdn-kaspi.kz/img/m/p/p29/p1e/64464409.jpg?format=gallery-medium',
          'https://resources.cdn-kaspi.kz/img/m/p/pfc/p95/64168414.png?format=gallery-medium',
          'https://resources.cdn-kaspi.kz/img/m/p/pfc/p95/64168414.png?format=gallery-medium'],
        link: 'https://kaspi.kz/shop/p/kotex-prokladki-ultra-night-duo-14-sht-100931591/?c=750000000'
      },
      {
        id: 4,
        name: 'Apple iPhone 17 Pro 256Gb темно-синий',
        description: 'Apple iPhone 17 Pro 256Gb — это воплощение инноваций и стиля, сочетающее в себе непревзойденную производительность, потрясающую камеру и яркий OLED-дисплей.',
        rating: 5,
        price: 735470,
        image: 'https://resources.cdn-kaspi.kz/img/m/p/p85/p81/64167660.png?format=preview-large',
        images: ['https://resources.cdn-kaspi.kz/img/m/p/p29/p1e/64464409.jpg?format=gallery-medium',
          'https://resources.cdn-kaspi.kz/img/m/p/pfc/p95/64168414.png?format=gallery-medium',
          'https://resources.cdn-kaspi.kz/img/m/p/pfc/p95/64168414.png?format=gallery-medium'],
        link: 'https://kaspi.kz/shop/p/apple-iphone-17-pro-256gb-temno-sinii-145438959/?c=750000000'
      },
      {
        id: 5,
        name: 'Samsung Galaxy A07 6 ГБ/128 ГБ черный',
        description: 'Apple iPhone 17 Pro 256Gb — это воплощение инноваций и стиля, сочетающее в себе непревзойденную производительность, потрясающую камеру и яркий OLED-дисплей.',
        rating: 5,
        price: 73990,
        image: 'https://resources.cdn-kaspi.kz/img/m/p/p3d/pda/61291251.jpg?format=preview-large',
        images: ['https://resources.cdn-kaspi.kz/img/m/p/p29/p1e/64464409.jpg?format=gallery-medium',
          'https://resources.cdn-kaspi.kz/img/m/p/pfc/p95/64168414.png?format=gallery-medium',
          'https://resources.cdn-kaspi.kz/img/m/p/pfc/p95/64168414.png?format=gallery-medium'],
        link: 'https://kaspi.kz/shop/p/samsung-galaxy-a07-6-gb-128-gb-chernyi-144817763/?c=750000000'
      },
      {
        id: 6,
        name: 'Apple iPhone 16 128Gb черный',
        description: 'Apple iPhone 17 Pro 256Gb — это воплощение инноваций и стиля, сочетающее в себе непревзойденную производительность, потрясающую камеру и яркий OLED-дисплей.',
        rating: 5,
        price: 456941,
        image: 'https://resources.cdn-kaspi.kz/img/m/p/hf3/h65/87295470731294.png?format=preview-large',
        images: ['https://resources.cdn-kaspi.kz/img/m/p/p29/p1e/64464409.jpg?format=gallery-medium',
          'https://resources.cdn-kaspi.kz/img/m/p/pfc/p95/64168414.png?format=gallery-medium',
          'https://resources.cdn-kaspi.kz/img/m/p/pfc/p95/64168414.png?format=gallery-medium'],
        link: 'https://kaspi.kz/shop/p/apple-iphone-16-128gb-chernyi-123713453/?c=750000000'
      },
      {
        id: 7,
        name: 'Смартфон Apple iPhone 17 Pro 256Gb оранжевый',
        description: 'Apple iPhone 17 Pro 256Gb — это воплощение инноваций и стиля, сочетающее в себе непревзойденную производительность, потрясающую камеру и яркий OLED-дисплей.',
        rating: 5,
        price: 774648,
        image: 'https://resources.cdn-kaspi.kz/img/m/p/p18/p96/64168413.png?format=gallery-medium',
        images: ['https://resources.cdn-kaspi.kz/img/m/p/p29/p1e/64464409.jpg?format=gallery-medium',
          'https://resources.cdn-kaspi.kz/img/m/p/pfc/p95/64168414.png?format=gallery-medium',
          'https://resources.cdn-kaspi.kz/img/m/p/pfc/p95/64168414.png?format=gallery-medium'],
        link: 'https://kaspi.kz/shop/p/kotex-prokladki-ultra-night-duo-14-sht-100931591/?c=750000000'
      },
      {
        id: 8,
        name: 'Смартфон Apple iPhone 17 Pro 256Gb оранжевый',
        description: 'Apple iPhone 17 Pro 256Gb — это воплощение инноваций и стиля, сочетающее в себе непревзойденную производительность, потрясающую камеру и яркий OLED-дисплей.',
        rating: 5,
        price: 774648,
        image: 'https://resources.cdn-kaspi.kz/img/m/p/p18/p96/64168413.png?format=gallery-medium',
        images: ['https://resources.cdn-kaspi.kz/img/m/p/p29/p1e/64464409.jpg?format=gallery-medium',
          'https://resources.cdn-kaspi.kz/img/m/p/pfc/p95/64168414.png?format=gallery-medium',
          'https://resources.cdn-kaspi.kz/img/m/p/pfc/p95/64168414.png?format=gallery-medium'],
        link: 'https://kaspi.kz/shop/p/kotex-prokladki-ultra-night-duo-14-sht-100931591/?c=750000000'
      },
      {
        id: 9,
        name: 'Смартфон Apple iPhone 17 Pro 256Gb оранжевый',
        description: 'Apple iPhone 17 Pro 256Gb — это воплощение инноваций и стиля, сочетающее в себе непревзойденную производительность, потрясающую камеру и яркий OLED-дисплей.',
        rating: 5,
        price: 774648,
        image: 'https://resources.cdn-kaspi.kz/img/m/p/p18/p96/64168413.png?format=gallery-medium',
        images: ['https://resources.cdn-kaspi.kz/img/m/p/p29/p1e/64464409.jpg?format=gallery-medium',
          'https://resources.cdn-kaspi.kz/img/m/p/pfc/p95/64168414.png?format=gallery-medium',
          'https://resources.cdn-kaspi.kz/img/m/p/pfc/p95/64168414.png?format=gallery-medium'],
        link: 'https://kaspi.kz/shop/p/kotex-prokladki-ultra-night-duo-14-sht-100931591/?c=750000000'
      },
      {
        id: 10,
        name: 'Смартфон Apple iPhone 17 Pro 256Gb оранжевый',
        description: 'Apple iPhone 17 Pro 256Gb — это воплощение инноваций и стиля, сочетающее в себе непревзойденную производительность, потрясающую камеру и яркий OLED-дисплей.',
        rating: 5,
        price: 774648,
        image: 'https://resources.cdn-kaspi.kz/img/m/p/p18/p96/64168413.png?format=gallery-medium',
        images: ['https://resources.cdn-kaspi.kz/img/m/p/p29/p1e/64464409.jpg?format=gallery-medium',
          'https://resources.cdn-kaspi.kz/img/m/p/pfc/p95/64168414.png?format=gallery-medium',
          'https://resources.cdn-kaspi.kz/img/m/p/pfc/p95/64168414.png?format=gallery-medium'],
        link: 'https://kaspi.kz/shop/p/kotex-prokladki-ultra-night-duo-14-sht-100931591/?c=750000000'
      },
      ];

filterByName(text: string) {
    this.searchTerm = text.toLowerCase();
  }

  getFilteredProducts() {
    return this.products.filter(p =>
      p.name.toLowerCase().includes(this.searchTerm)
    );
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

