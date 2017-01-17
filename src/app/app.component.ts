import { Component } from '@angular/core';
import { Auth } from './auth.service';
import { Router } from '@angular/router'

 @Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],

})
export class AppComponent {

constructor( 
  private auth: Auth,
  private router: Router) {
    
  }

  goProfile(){
    let name = JSON.parse(localStorage.getItem('profile')).name;
    let link = ['/profile', name];
    this.router.navigate(link);
  }
  
}

