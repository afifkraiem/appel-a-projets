import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from '../Auth/token-storage.service';
import { HttpClient } from '@angular/common/http';
import * as $ from 'jquery';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  userRole ;
  username;
  constructor(private tokenstorage: TokenStorageService, private http: HttpClient) { }

  ngOnInit() {
    if (localStorage.getItem('auth')) {
      this.username = localStorage.getItem('prenom').charAt(0)+localStorage.getItem('nom').charAt(0);
      console.log(this.username);
       this.userRole = localStorage.getItem('role');

   }

   $("#menu-toggle").click(function(e) {
    e.preventDefault();
    $("#wrapper").toggleClass("active");
  });
  
  }
  logout() {
    this.tokenstorage.signOut();
  }
}
