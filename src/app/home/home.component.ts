import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  auth: string;
  loggedIn = false;

  constructor() { }

  ngOnInit() {

    if (localStorage.getItem('auth')) {

      this.loggedIn = true;
      this.auth = localStorage.getItem('role');
    }

  }

  
}
