import { Injectable } from '@angular/core';
import { Product } from '../models/product';
import { Category } from '../models/category';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  categories: Category[] = [
    {
      id: 1,
      name: 'Смартфоны',
    },
    {
      id: 2,
      name: 'Ноутбуки',
    },
    {
      id: 3,
      name: 'Планшеты',
    },
    {
      id: 4,
      name: 'Наушники',
    },
  ];

  products: Product[] = [
    {
      id: 1,
      name: 'Apple iPhone 17 Pro 256Gb оранжевый',
      description:
        'Apple iPhone 17 Pro 256Gb — это воплощение инноваций и стиля, сочетающее в себе непревзойденную производительность, потрясающую камеру и яркий OLED-дисплей.',
      rating: 2,
      price: 774648,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p18/p96/64168413.png?format=preview-large',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/p29/p1e/64464409.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/pfc/p95/64168414.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/pfc/p95/64168414.png?format=gallery-medium',
      ],
      link: 'https://kaspi.kz/shop/p/apple-iphone-17-pro-256gb-oranzhevyi-145467625/?c=750000000',
      likes: 10,
      categoryId: 1,
    },
    {
      id: 2,
      name: 'Apple iPhone 15 128Gb черный',
      description:
        'Apple iPhone 17 Pro 256Gb — это воплощение инноваций и стиля, сочетающее в себе непревзойденную производительность, потрясающую камеру и яркий OLED-дисплей.',
      rating: 5,
      price: 389663,
      image:
        'https://resources.cdn-kaspi.kz/img/m/p/h1d/hfc/86303745998878.jpg?format=preview-large',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/p29/p1e/64464409.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/pfc/p95/64168414.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/pfc/p95/64168414.png?format=gallery-medium',
      ],
      link: 'https://kaspi.kz/shop/p/apple-iphone-15-128gb-chernyi-113137790/?c=750000000',
      likes: 10,
      categoryId: 1,
    },
    {
      id: 3,
      name: 'Apple iPhone 13 128Gb черный',
      description:
        'Apple iPhone 17 Pro 256Gb — это воплощение инноваций и стиля, сочетающее в себе непревзойденную производительность, потрясающую камеру и яркий OLED-дисплей.',
      rating: 5,
      price: 306671,
      image:
        'https://resources.cdn-kaspi.kz/img/m/p/h32/h70/84378448199710.jpg?format=preview-large',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/p29/p1e/64464409.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/pfc/p95/64168414.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/pfc/p95/64168414.png?format=gallery-medium',
      ],
      link: 'https://kaspi.kz/shop/p/kotex-prokladki-ultra-night-duo-14-sht-100931591/?c=750000000',
      likes: 10,
      categoryId: 1,
    },
    {
      id: 4,
      name: 'Apple iPhone 17 Pro 256Gb темно-синий',
      description:
        'Apple iPhone 17 Pro 256Gb — это воплощение инноваций и стиля, сочетающее в себе непревзойденную производительность, потрясающую камеру и яркий OLED-дисплей.',
      rating: 5,
      price: 735470,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p85/p81/64167660.png?format=preview-large',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/p29/p1e/64464409.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/pfc/p95/64168414.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/pfc/p95/64168414.png?format=gallery-medium',
      ],
      link: 'https://kaspi.kz/shop/p/apple-iphone-17-pro-256gb-temno-sinii-145438959/?c=750000000',
      likes: 10,
      categoryId: 1,
    },
    {
      id: 5,
      name: 'Samsung Galaxy A07 6 ГБ/128 ГБ черный',
      description:
        'Apple iPhone 17 Pro 256Gb — это воплощение инноваций и стиля, сочетающее в себе непревзойденную производительность, потрясающую камеру и яркий OLED-дисплей.',
      rating: 5,
      price: 73990,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p3d/pda/61291251.jpg?format=preview-large',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/p29/p1e/64464409.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/pfc/p95/64168414.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/pfc/p95/64168414.png?format=gallery-medium',
      ],
      link: 'https://kaspi.kz/shop/p/samsung-galaxy-a07-6-gb-128-gb-chernyi-144817763/?c=750000000',
      likes: 10,
      categoryId: 1,
    },
    {
      id: 6,
      name: 'Ноутбук Apple MacBook Air 13 2020 13.3" / 8 Гб / SSD 256 Гб / macOS / MGN63RU/A',
      description:
        'Маленький чип. Грандиозный прорыв. Первый чип, разработанный специально для Mac. Поразительно, но система на чипе Apple M1 вмещает 16 миллиардов транзис­торов и объединяет центральный и графи­ческий процессоры, систему Neural Engine, контроллеры ввода-вывода и множество других компонентов. Чип Apple M1 позволяет использовать на Mac уникальные технологии и обеспечивает невероятную производи­тельность в сочетании с лучшей в отрасли энергоэффективностью. Это не просто ещё один шаг для Mac — это принципиально новый уровень возможностей.',
      rating: 5,

      price: 467091,
      image:
        'https://resources.cdn-kaspi.kz/img/m/p/h06/h08/64213171568670.jpg?format=preview-large',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h2d/h82/83648592183326.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h0a/h85/64213178351646.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h3a/h0d/64213216755742.jpg?format=gallery-medium',
      ],
      link: 'https://kaspi.kz/shop/p/apple-macbook-air-13-2020-13-3-8-gb-ssd-256-gb-macos-mgn63ru-a-101182724/?c=750000000',
      likes: 592,
      categoryId: 2,
    },
    {
      id: 7,
      name: 'Ноутбук Apple MacBook Air 13 2025 / 16 Гб / SSD 256 Гб / macOS / MW123',
      description:
        'Представляем Apple MacBook Air 13 2025 — ультрабук, который сочетает в себе высокую производительность, изящный дизайн и долговечность. Этот ноутбук станет идеальным спутником для работы и развлечений.',
      rating: 5,
      price: 531494,
      image:
        'https://resources.cdn-kaspi.kz/img/m/p/pab/pc3/35723922.jpg?format=preview-large',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/pab/pc3/35723922.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p72/pc3/35723924.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p3a/pc3/35723926.jpg?format=gallery-medium',
      ],
      link: 'https://kaspi.kz/shop/p/apple-macbook-air-13-2025-16-gb-ssd-256-gb-macos-mw123-137582956/?c=750000000',
      likes: 123,
      categoryId: 2,
    },
    {
      id: 8,
      name: 'Ноутбук Apple MacBook Pro 14 2024 14.2" / 24 Гб / SSD 512 Гб / macOS / MX2H3',
      description:
        'New 2024 14 inch MacBook Pro 14-inch Li uid Retina XDRuid Retina XDR display2Standard displayApple M4 Pro chip with 12 core CPU, 16 core GPU, 16 core GPU, 16 core GPU, 16 core Neural Engine24GB unified memory512GB SSD storage70 USB-C Power AdaptThree Thunderbolt 5 ports, HDMI port 3 portBacklit Magic Keyboard with Touch Touch ID - US English',
      rating: 5,
      price: 1131902,
      image:
        'https://resources.cdn-kaspi.kz/img/m/p/pb6/p44/15673150.png?format=preview-large',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/pb6/p44/15673150.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p7e/p44/15673152.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p9a/p44/15673151.png?format=gallery-medium',
      ],
      link: 'https://kaspi.kz/shop/p/apple-macbook-pro-14-2024-14-2-24-gb-ssd-512-gb-macos-mx2h3-137220149/?c=750000000',
      likes: 123,
      categoryId: 2,
    },
    {
      id: 9,
      name: 'Ноутбук Apple MacBook Air 13 2025 / 16 Гб / SSD 256 Гб / macOS / MW123RU/A',
      description:
        'Маленький чип. Грандиозный прорыв. Первый чип, разработанный специально для Mac. Поразительно, но система на чипе Apple M1 вмещает 16 миллиардов транзис­торов и объединяет центральный и графи­ческий процессоры, систему Neural Engine, контроллеры ввода-вывода и множество других компонентов. Чип Apple M1 позволяет использовать на Mac уникальные технологии и обеспечивает невероятную производи­тельность в сочетании с лучшей в отрасли энергоэффективностью. Это не просто ещё один шаг для Mac — это принципиально новый уровень возможностей.',
      rating: 5,

      price: 603000,
      image:
        'https://resources.cdn-kaspi.kz/img/m/p/p52/p42/36846116.png?format=preview-large',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/p52/p42/36846116.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p91/p3f/36846120.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p04/p3f/36846125.png?format=gallery-medium',
      ],
      link: 'https://kaspi.kz/shop/p/apple-macbook-air-13-2025-16-gb-ssd-256-gb-macos-mw123ru-a-138153472/?c=750000000',
      likes: 77,
      categoryId: 2,
    },
    {
      id: 10,
      name: 'Ноутбук Apple MacBook Pro 14 2024 14.2" / 24 Гб / SSD 512 Гб / macOS / MX2E3',
      description: 'New 2024 14-inch MacBook Pro - Silver14-inch Li uid Retina XDR display2Standard displayApple M4 Pro chip with 12 core CPU, 16 core GPU, 16 core Neural Engine24GB unified memory512GB SSD storage70 USB-C Power AdaptThree Thunderbolt 5 port MagSafe 3 portBacklit Magic Keyboard with Touch Touch ID - US English',
      rating: 5,
      price: 1163688,
      image:
        'https://resources.cdn-kaspi.kz/img/m/p/h06/h08/64213171568670.jpg?format=preview-large',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/p80/pc6/29100257.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/pef/pa4/15675603.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/pd3/pa4/15675604.png?format=gallery-medium',
      ],
      link: 'https://kaspi.kz/shop/p/apple-macbook-pro-14-2024-14-2-24-gb-ssd-512-gb-macos-mx2e3-137220943/?c=750000000',
      likes: 37,
      categoryId: 2,
    },
    {
      id: 11,
      name: 'Apple iPad A16 11 2025 Wi-Fi 11 дюйм 6 Гб/128 Гб серебристый',
      description:
        'Представляем iPad A16 2025 — ваш идеальный спутник для работы и развлечений! Этот мощный планшет с 11-дюймовым экраном и высоким разрешением обеспечит вам яркие и чёткие изображения, а производительный процессор Apple A16 гарантирует быструю работу приложений.',
      rating: 5,
      price: 207361,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/pef/pe8/37011887.png?format=preview-large',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/pef/pe8/37011887.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p85/pe5/37011897.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p69/pe5/37011898.png?format=gallery-medium',
      ],
      link: 'https://kaspi.kz/shop/p/apple-ipad-a16-11-2025-wi-fi-11-djuim-6-gb-128-gb-serebristyi-138199634/?c=750000000',
      likes: 839,
      categoryId: 3,
    },
    {
      id: 12,
      name: 'Apple iPad A16 11 2025 Wi-Fi 11 дюйм 6 Гб/128 Гб серебристый',
      description:
        'Представляем iPad A16 2025 — ваш идеальный спутник для работы и развлечений! Этот мощный планшет с 11-дюймовым экраном и высоким разрешением обеспечит вам яркие и чёткие изображения, а производительный процессор Apple A16 гарантирует быструю работу приложений.',
      rating: 5,
      price: 207361,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/pef/pe8/37011887.png?format=preview-large',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/pef/pe8/37011887.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p85/pe5/37011897.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p69/pe5/37011898.png?format=gallery-medium',
      ],
      link: 'https://kaspi.kz/shop/p/apple-ipad-a16-11-2025-wi-fi-11-djuim-6-gb-128-gb-serebristyi-138199634/?c=750000000',
      likes: 839,
      categoryId: 3,
    },
    {
      id: 13,
      name: 'Apple iPad A16 11 2025 Wi-Fi 11 дюйм 6 Гб/128 Гб серебристый',
      description:
        'Представляем iPad A16 2025 — ваш идеальный спутник для работы и развлечений! Этот мощный планшет с 11-дюймовым экраном и высоким разрешением обеспечит вам яркие и чёткие изображения, а производительный процессор Apple A16 гарантирует быструю работу приложений.',
      rating: 5,
      price: 207361,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/pef/pe8/37011887.png?format=preview-large',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/pef/pe8/37011887.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p85/pe5/37011897.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p69/pe5/37011898.png?format=gallery-medium',
      ],
      link: 'https://kaspi.kz/shop/p/apple-ipad-a16-11-2025-wi-fi-11-djuim-6-gb-128-gb-serebristyi-138199634/?c=750000000',
      likes: 839,
      categoryId: 3,
    },
    {
      id: 14,
      name: 'Apple iPad A16 11 2025 Wi-Fi 11 дюйм 6 Гб/128 Гб серебристый',
      description:
        'Представляем iPad A16 2025 — ваш идеальный спутник для работы и развлечений! Этот мощный планшет с 11-дюймовым экраном и высоким разрешением обеспечит вам яркие и чёткие изображения, а производительный процессор Apple A16 гарантирует быструю работу приложений.',
      rating: 5,
      price: 207361,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/pef/pe8/37011887.png?format=preview-large',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/pef/pe8/37011887.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p85/pe5/37011897.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p69/pe5/37011898.png?format=gallery-medium',
      ],
      link: 'https://kaspi.kz/shop/p/apple-ipad-a16-11-2025-wi-fi-11-djuim-6-gb-128-gb-serebristyi-138199634/?c=750000000',
      likes: 839,
      categoryId: 3,
    },
    {
      id: 15,
      name: 'Apple iPad A16 11 2025 Wi-Fi 11 дюйм 6 Гб/128 Гб серебристый',
      description:
        'Представляем iPad A16 2025 — ваш идеальный спутник для работы и развлечений! Этот мощный планшет с 11-дюймовым экраном и высоким разрешением обеспечит вам яркие и чёткие изображения, а производительный процессор Apple A16 гарантирует быструю работу приложений.',
      rating: 5,
      price: 207361,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/pef/pe8/37011887.png?format=preview-large',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/pef/pe8/37011887.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p85/pe5/37011897.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p69/pe5/37011898.png?format=gallery-medium',
      ],
      link: 'https://kaspi.kz/shop/p/apple-ipad-a16-11-2025-wi-fi-11-djuim-6-gb-128-gb-serebristyi-138199634/?c=750000000',
      likes: 839,
      categoryId: 3,
    },
    {
      id: 16,
      name: 'Наушники Sony WH-1000XM6 черный',
      description:
        'Наушники Sony WH-1000XM6 — эталонный звук и непревзойденный комфорт в стильном черном исполнении.',
      rating: 5,
      price: 190411,
      image: '',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/p42/pc0/43642118.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p26/pc0/43642119.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p9d/pbd/43642121.jpg?format=gallery-medium',
      ],
      link: 'https://kaspi.kz/shop/p/naushniki-sony-wh-1000xm6-chernyi-140045244/?c=750000000',
      likes: 76,
      categoryId: 4,
    },
    {
      id: 17,
      name: 'Наушники Sony WH-1000XM6 черный',
      description:
        'Наушники Sony WH-1000XM6 — эталонный звук и непревзойденный комфорт в стильном черном исполнении.',
      rating: 5,
      price: 190411,
      image: '',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/p42/pc0/43642118.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p26/pc0/43642119.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p9d/pbd/43642121.jpg?format=gallery-medium',
      ],
      link: 'https://kaspi.kz/shop/p/naushniki-sony-wh-1000xm6-chernyi-140045244/?c=750000000',
      likes: 76,
      categoryId: 4,
    },
    {
      id: 18,
      name: 'Наушники Sony WH-1000XM6 черный',
      description:
        'Наушники Sony WH-1000XM6 — эталонный звук и непревзойденный комфорт в стильном черном исполнении.',
      rating: 5,
      price: 190411,
      image: '',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/p42/pc0/43642118.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p26/pc0/43642119.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p9d/pbd/43642121.jpg?format=gallery-medium',
      ],
      link: 'https://kaspi.kz/shop/p/naushniki-sony-wh-1000xm6-chernyi-140045244/?c=750000000',
      likes: 76,
      categoryId: 4,
    },
    {
      id: 19,
      name: 'Наушники Sony WH-1000XM6 черный',
      description:
        'Наушники Sony WH-1000XM6 — эталонный звук и непревзойденный комфорт в стильном черном исполнении.',
      rating: 5,
      price: 190411,
      image: '',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/p42/pc0/43642118.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p26/pc0/43642119.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p9d/pbd/43642121.jpg?format=gallery-medium',
      ],
      link: 'https://kaspi.kz/shop/p/naushniki-sony-wh-1000xm6-chernyi-140045244/?c=750000000',
      likes: 76,
      categoryId: 4,
    },
    {
      id: 20,
      name: 'Наушники Sony WH-1000XM6 черный',
      description:
        'Наушники Sony WH-1000XM6 — эталонный звук и непревзойденный комфорт в стильном черном исполнении.',
      rating: 5,
      price: 190411,
      image: '',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/p42/pc0/43642118.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p26/pc0/43642119.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p9d/pbd/43642121.jpg?format=gallery-medium',
      ],
      link: 'https://kaspi.kz/shop/p/naushniki-sony-wh-1000xm6-chernyi-140045244/?c=750000000',
      likes: 76,
      categoryId: 4,
    },
  ];
}
