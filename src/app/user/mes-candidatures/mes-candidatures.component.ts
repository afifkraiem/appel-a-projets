import { Component, OnInit, Input } from '@angular/core';
import { CandidatureService } from 'src/app/services/candidature.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-mes-candidatures',
  templateUrl: './mes-candidatures.component.html',
  styleUrls: ['./mes-candidatures.component.css']
})
export class MesCandidaturesComponent implements OnInit {

  
  @Input() searchString: string;
  candidatures: any ;
  evals: any;
  idcand;
  ExpertName: String;
  users;
  Campagnes;
  constructor(private candservice: CandidatureService, private userservice: UserService) { }

  ngOnInit() {
this.getAllCands();
this.getAllcamp();
  }
getAllCands() {
  this.candidatures = [];
  return this.candservice.getCandByUserId().subscribe((data: {}) => {
    this.candidatures = data;
    console.log(data);
  });

}

getAllcamp() {
this.Campagnes = [];
this.candservice.getAllCamp().subscribe(data => {
  console.log(data);
  this.Campagnes = data;
});
}

onSelect($event) {
console.log($event);
this.getCneufByCamp($event);
}

getCneufByCamp(id: number[]) {
  this.candservice.getCneufByCampAndUser(id).subscribe(data => {
    console.log(data);
    this.candidatures = data;
  });
}

}
