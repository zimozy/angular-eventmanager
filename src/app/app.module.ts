import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthModule } from './auth/auth.module';
import { EventModule } from './event/event.module';

import { FormioAppConfig } from 'angular-formio';
import { FormioAuthService, FormioAuthConfig } from 'angular-formio/auth';
import { AuthConfig, AppConfig } from '../config';

import { FormioResources } from 'angular-formio/resource';

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
      },
      {
        path: 'home',
        component: HomeComponent
      },
      {
        path: 'auth',
        loadChildren: () => AuthModule
      },
      {
        path: 'event',
        loadChildren: () => EventModule
      } 
    ])
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent
  ],
  providers: [
    FormioResources,
    FormioAuthService,
    {provide: FormioAuthConfig, useValue: AuthConfig},
    {provide: FormioAppConfig, useValue: AppConfig},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
