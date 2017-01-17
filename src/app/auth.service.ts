
import { Injectable }      from '@angular/core';
import { tokenNotExpired, JwtHelper } from 'angular2-jwt';
import { Router } from '@angular/router';
// Avoid name not found warnings
let Auth0Lock = require('auth0-lock').default;
@Injectable()
export class Auth {

  jwtHelper: JwtHelper = new JwtHelper();

  // Configure Auth0
  lock = new Auth0Lock('63mRBoDN6hEJKP6XZl4YDXJVIRIafKgI', 'emmatest.auth0.com', {});

  constructor(private _router: Router) {
    this.lock.on("authenticated", (authResult) => {
      let token = authResult.idToken;
      localStorage.setItem('id_token', authResult.idToken);
      localStorage.setItem('profile', authResult.profile);

       this.lock.getProfile(authResult.idToken, (error: any, profile: any) => {
        if (error) {
          console.log(error);
        }

        localStorage.setItem('profile', JSON.stringify(profile));
      });
    });
  }

 login() {
    this.lock.show();
  }

  public authenticated() {
    // Check if there's an unexpired JWT
    // This searches for an item in localStorage with key == 'id_token'
    return tokenNotExpired();
  }

  public logout() {
    // Remove token from localStorage
    localStorage.removeItem('id_token');
    localStorage.removeItem('profile');

    let link = ["/home"];
    this._router.navigate(link);

  }
}