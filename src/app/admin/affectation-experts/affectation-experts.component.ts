import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { CandidatureService } from 'src/app/services/candidature.service';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { TokenStorageService } from '../../Auth/token-storage.service';

@Component({
  selector: 'app-affectation-experts',
  templateUrl: './affectation-experts.component.html',
  styleUrls: ['./affectation-experts.component.css']
})
export class AffectationExpertsComponent implements OnInit{

  @Input() searchString: string;
  candidatures : any ;
  evals: any;
  idcand;
  ExpertName: String;
  users;
  experts;

  idExperts: any= [];
  
  constructor(private candservice: CandidatureService, private userservice: UserService, private router: Router,private tokenservice: TokenStorageService) { }

  ngOnInit() {
    this.getAllCands();
    this.getExperts();
    
      }

      /* obtenir la liste de candidatures consolidées **/
    getAllCands() {
      return this.candservice.getCandidatures().subscribe(data => {
        this.candidatures = [];
        console.log(data);
        console.log(this.candidatures);

        data.forEach(cand => {
          if (cand.statut == '2' || cand.statut == '3' ) {
            this.candidatures.push(cand);

          }
          
        });
        console.log(this.candidatures);
      });

    }
    
    /* obtenir la liste des experts cneuf**/
    getExperts() {
      
      this.userservice.getExpert().subscribe((response) => {
        this.experts = response.users ;
    
      },
      (error)=> {
        this.tokenservice.getSIUToken();
        this.getExperts();
      }
      
      );
    }

    
    /* obtenir le nom de l'expert **/
    getexpertName(id: number) {
      this.userservice.getOneUser(id).subscribe((response) => {
        return response.users[0].nom;

      },
      (error)=> {
        this.tokenservice.getSIUToken();
        this.getexpertName(id);
      }
        
      );
    }

    /* affectation d'un expert **/ 
    assignExpert(ide, idc) {
      this.userservice.assignExpert(ide, idc).subscribe(data => {
        alert('projet assigné au expert avec succès');
        this.getAllCands();
      });
}

getAssignedExperts (id: number) {
  let candidature: any;
  this.idExperts = [];
  this.candservice.getCandById(id).subscribe(data => {
    candidature = data;
    candidature.Evaluation.forEach(ev => {
      this.idExperts.push(ev.idExpert);

    });

  });
}

verifyExp(id: number): boolean {
  
    if( this.idExperts.includes( id)) {
      return true;
    }
}
}


