import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { About } from './components/about/about';
import { Albums } from './components/albums/albums';

export const routes: Routes = [
  {path: '', component: Home},
  {path: 'about', component: About},
  {path: 'albums', component: Albums},
];
