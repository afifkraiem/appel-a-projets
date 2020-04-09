import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { CandidatureService } from 'src/app/services/candidature.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-gestion-campagnes',
  templateUrl: './gestion-campagnes.component.html',
  styleUrls: ['./gestion-campagnes.component.css']
})
export class GestionCampagnesComponent implements OnInit, OnDestroy {

  camp: any;
  form: FormGroup;
  candidatures;
  selectedCamp = false;
  nomSelectedCamp;
  isActive = true;
  @Input() searchString: string;
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
    "lengthMenu":     "Afficher _MENU_ campagnes",
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
  constructor(private router: Router, private candservice: CandidatureService, private fb: FormBuilder) { }

  ngOnInit( ) {
    this.form = this.fb.group({
      nomcomp: '',
      date_debut: '',
      date_cloture: ''

    });
    this.getAllCampagnes();
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 3,
      language: this.lang,
      destroy: true
    };
  }

  /** méthode pour changer l'état de campagne en cloturée */
Cloture(id: number) {
this.candservice.ClotureCamp(id).subscribe(data => {
  alert('campagne cloturée avec succès!');
  this.getAllCampagnes();
}
   );
}

/** charger la liste de toutes les campagnes */
getAllCampagnes() {
  this.camp = [];
  this.candservice.getAllCamp().subscribe ((data: []) => {
    console.log(data);
   this.camp = data;
    data.forEach((camp:any )=> {
      if(camp.etat == 'active') { this.isActive = false}
    });
  });
  this.dtTrigger.next();

}

/** sauvegarde du formulaire d'ajout d'une nouvelle campagne */

envoyer(form: any) {

  return this.candservice.saveCamp(form.value).subscribe( data => {
    alert('nouvelle campagne enregistrée avec succès !');
    console.log(form.value);
    this.getAllCampagnes();
  });

 
}


/** chargement de la liste de candidatures pour une campagne sélectionnée */

getCneufByCamp(id: number[], nomCamp: string) {
  console.log(nomCamp);
  this.nomSelectedCamp = nomCamp;
    this.selectedCamp = true;
  this.candservice.getCneufByCamp(id).subscribe(data => {
    
    this.candidatures = data;
  });
}

ngOnDestroy(): void {
  // Do not forget to unsubscribe the event
  this.dtTrigger.unsubscribe();
}
}
