import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ContactComponent } from './contact/contact.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgModule } from '@angular/core';
import { HttpModule, Http, RequestOptions } from '@angular/http';
import { provideAuth, AuthHttp, AuthConfig, JwtHelper } from 'angular2-jwt';
import { AppComponent } from './app.component';
import { ProfileComponent } from './profile/profile.component';
import { HomeComponent } from './home/home.component';
import { routes } from './app.routes'
import { AuthGuard } from './authGuard'

import { Auth } from './auth.service';
import { UnauthorizedComponent } from './unauthorized/unauthorized.component';

// ... other import statements ...

export function authHttpServiceFactory(http: Http, options: RequestOptions) {
  return new AuthHttp( new AuthConfig({}), http, options);
}

@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    ProfileComponent,
    HomeComponent,
    UnauthorizedComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NgbModule,
    routes
  ],
  providers: [
    {
    provide: AuthHttp,
    useFactory: authHttpServiceFactory,
    deps: [ Http, RequestOptions ]
    
    },
    AuthGuard,
    Auth
    
  ],
  
  bootstrap: [AppComponent]
})
export class AppModule { }
