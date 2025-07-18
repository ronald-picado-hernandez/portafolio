import { Routes } from '@angular/router';
import { SloganComponent } from './slogan/slogan.component';

export const routes: Routes = [
  { path: '', component: SloganComponent },
  { path: '**', redirectTo: '' }
];
