import { Component, signal } from '@angular/core';
import { ProductList } from './components/product-list/product-list';
import { Header } from './components/header/header';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [Header, RouterModule],
  template: `
    <app-header></app-header>

    <div class='main-container'>
      <aside class='sidebar'>
        <h3>Все категории</h3>
        <ul>
          <li><a routerLink="/products">Все товары</a></li>
          <li><a routerLink="/products" [queryParams]="{category: 'Phones'}">Телефоны и гаджеты</a></li>
          </ul>
      </aside>

      <main class="content">
        <router-outlet></router-outlet>
      </main>
    </div>
  `,
styles: [`
    .main-container {
      display: flex;
      gap: 20px;
      padding: 20px;
      max-width: 1200px;
      margin: 0 auto;
    }

    .sidebar {
      width: 250px;
      flex-shrink: 0;
      background: #f5f5f5;
      padding: 15px;
      border-radius: 8px;
      height: fit-content;
    }

    .sidebar ul {
      list-style: none;
      padding: 0;
    }

    .sidebar li {
      margin-bottom: 10px;
    }

    .sidebar a {
      text-decoration: none;
      color: #333;
      font-size: 14px;
    }

    .sidebar a:hover {
      color: #d32f2f;
    }

    .content {
      flex-grow: 1;
    }
  `]
})
export class App {
  protected readonly title = signal('Kaspi');
}
