import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  private profile:any;

  constructor() { }

  ngOnInit() {
    this.profile = JSON.parse(localStorage.getItem('profile'));
    console.log(this.profile);
  }

}
