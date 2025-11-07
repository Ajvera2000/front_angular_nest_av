import 'zone.js';  // Para el cliente
import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { BrowserModule } from '@angular/platform-browser';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { provideClientHydration } from '@angular/platform-browser'; // 👈 Solo si usas SSR

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient(withFetch()),
    importProvidersFrom(BrowserModule),
    importProvidersFrom(BrowserAnimationsModule)
    // provideClientHydration(), // 👈 Descomenta si usas Angular Universal
  ],
};
