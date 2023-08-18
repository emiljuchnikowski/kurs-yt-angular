import { BrowserModule, bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { importProvidersFrom } from '@angular/core';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app/app.component';
import { routes } from './app/app-routing';
import { AuthInterceptor } from './app/interceptors';


bootstrapApplication(AppComponent, {
    providers: [
      importProvidersFrom(HttpClientModule),
      importProvidersFrom(BrowserModule),
      provideRouter(routes),
      {
        provide: HTTP_INTERCEPTORS,
        multi: true,
        useClass: AuthInterceptor
      }
    ]
})
  .catch(err => console.error(err));
