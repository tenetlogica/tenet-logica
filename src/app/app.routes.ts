import {Routes} from '@angular/router';

export const routes: Routes = [
  { path: '', loadComponent: () => import('./components/home.component').then(m => m.HomeComponent) },
  { path: 'about', loadComponent: () => import('./components/about.component').then(m => m.AboutComponent) },
  { path: 'services', loadComponent: () => import('./components/services.component').then(m => m.ServicesComponent) },
  { path: 'careers', loadComponent: () => import('./components/careers.component').then(m => m.CareersComponent) },
  { path: 'contact', loadComponent: () => import('./components/contact.component').then(m => m.ContactComponent) },
  { path: 'privacy', loadComponent: () => import('./components/privacy.component').then(m => m.PrivacyComponent) },
  { path: 'terms', loadComponent: () => import('./components/terms.component').then(m => m.TermsComponent) },
  { path: '**', redirectTo: '' }
];
