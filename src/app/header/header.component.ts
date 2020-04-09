import { HttpClient } from '@angular/common/http';
import { TokenStorageService } from '../Auth/token-storage.service';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
username; 
 roles: any [];
  auth: string;
  isLoggedIn = false;
userRole ;
  constructor(private tokenstorage: TokenStorageService, private http: HttpClient) { }

  ngOnInit() {
    if (localStorage.getItem('auth')) {
     this.isLoggedIn = true;
     this.username = localStorage.getItem('prenom').charAt(0)+''+localStorage.getItem('nom').charAt(0);
     console.log(this.username);
      this.userRole = localStorage.getItem('role');
  }
}
logout() {
  this.tokenstorage.signOut();
}



}

