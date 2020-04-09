import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { TokenStorageService } from '../../Auth/token-storage.service';

@Component({
  selector: 'app-gestion-users',
  templateUrl: './gestion-users.component.html',
  styleUrls: ['./gestion-users.component.css']
})
export class GestionUsersComponent implements OnInit {
users;
  constructor(private userservice: UserService, private tokenservice: TokenStorageService) { }

  ngOnInit() {
    this.getUsers();
  }

 

  getUsers() {
    this.users = [];
    this.userservice.getCneufUsers().subscribe((response) => {
      console.log(response);
      this.users = response.users;
      console.log(this.users);
    },
    (error)=> {
      this.tokenservice.getSIUToken();
      this.getUsers();
    }
    
    );
}

setAsExpert(id: number) {
  console.log(id);
  this.userservice.setAsExpert(id).subscribe(data => {
    console.log(data);
    
    alert('utilisateur défini comme expertavec succès!');
  });
}
}