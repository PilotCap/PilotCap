import { ApplicationConfig } from '@angular/core';
import { provideServerRendering } from '@angular/ssr';
import { provideRouter, Routes } from '@angular/router';
import { LoginComponent } from './components/auth/login/login.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent }
];

export const appConfig: ApplicationConfig = {
  providers: [
    provideServerRendering(),
    provideRouter(routes)
  ]
};
