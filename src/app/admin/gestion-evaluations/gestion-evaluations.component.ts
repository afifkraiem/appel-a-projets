import { Component, OnInit, Input } from '@angular/core';
import { CandidatureService } from 'src/app/services/candidature.service';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { TokenStorageService } from './../../Auth/token-storage.service';

@Component({
  selector: 'app-gestion-evaluations',
  templateUrl: './gestion-evaluations.component.html',
  styleUrls: ['./gestion-evaluations.component.css']
})
export class GestionEvaluationsComponent implements OnInit {

  @Input() searchString: string;
  candidatures : any ;
  evals: any;
  idcand;
  ExpertName: String;
  users;
  experts;
  Campagnes;
  dtOptions: DataTables.Settings = {};
  dtTrigger = new Subject();
  public lang = {
    "decimal":        "",
    "emptyTable":     "Aucun élément trouvé",
    "info":           "Affichage de _START_ à _END_ parmis _TOTAL_  campagnes",
    "infoEmpty":      "Affichage  0 to 0 of 0 entries",
    "infoFiltered":   "(filtered from _MAX_ total entries)",
    "infoPostFix":    "",
    "thousands":      ",",
    "lengthMenu":     "Afficher _MENU_ candidatures",
    "loadingRecords": "Chargement...",
    "processing":     "Processing...",
    "search":         "Recherche:",
    "zeroRecords":    "Aucun élément trouvé",
    "paginate": {
        "first":      "Première page",
        "last":       "Dernière page",
        "next":       "Page suivante",
        "previous":   "Page précédente"
    },
    "aria": {
        "sortAscending":  ": activate to sort column ascending",
        "sortDescending": ": activate to sort column descending"
    }
}
  constructor(private candservice: CandidatureService, private userservice: UserService, private router: Router, private tokenservice: TokenStorageService) { }

  ngOnInit() {
    this.getAllCands();
    this.getExperts();
    this.getAllcamp();
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 3,
      language: this.lang
    };

      }
    getAllCands() {
      return this.candservice.getCandidatures().subscribe(data => {
        this.candidatures = [];
        data.forEach(cand => {
          if (cand.Evaluation.length > 0) {
            this.candidatures.push(cand);

          }
        });
        this.dtTrigger.next();

        console.log(this.candidatures);
      });

    }

    getAllcamp() {
    this.Campagnes = [];
    this.candservice.getAllCamp().subscribe(data => {
      console.log(data);
      this.Campagnes = data;
    });
    }

    getEvals(id: number) {
      this.evals = [];
      this.candservice.getEvalByCneufId(id).subscribe(data => {
        this.evals = data ;
        console.log(data);
        this.idcand = id;
      });
    }

    valider() {
      this.candservice.valider(this.idcand).subscribe(data => {
        alert('Projet validé avec succès');
      });
    }

    Rejeter() {
      this.candservice.Rejeter(this.idcand).subscribe(data => {
        alert('Projet rejeté avec succès');
      });
    }

    getExperts() {
      
      this.userservice.getExpert().subscribe((response) => {
        this.experts = response.users ;
      },
      (erro)=> {
        this.tokenservice.getSIUToken();
          this.getExperts();
      }
          
        
      );
    }

    onSelect($event) {
    console.log($event);
    this.getCneufByCamp($event);
    }

    getCneufByCamp(id: number[]) {
      this.candservice.getCneufByCamp(id).subscribe(data => {
        console.log(data);
        this.candidatures = data;
      });
    }
    getexpertName(id: number) {
      this.userservice.getOneUser(id).subscribe((response) => {
        return response.users[0].nom; },
        (error)=> {
          this.tokenservice.getSIUToken();
          this.getexpertName(id);
        }
      );
    }


}