import { Component, OnInit, Input } from '@angular/core';
import { Form, FormBuilder, FormGroup } from '@angular/forms';
import { CandidatureService } from 'src/app/services/candidature.service';
import { Subject } from 'rxjs';
import * as fileSaver from 'file-saver';

@Component({
  selector: 'app-gestion-deliberations',
  templateUrl: './gestion-deliberations.component.html',
  styleUrls: ['./gestion-deliberations.component.css']
})
export class GestionDeliberationsComponent implements OnInit {
  form : FormGroup;
  candidatures : any = [];
  deliberations :any = [];
  Campagnes: any = [];
  dtOptions: DataTables.Settings = {};
  dtTrigger = new Subject();
  public lang = {
    "decimal":        "",
    "emptyTable":     "Aucun élément trouvé",
    "info":           "Affichage de _START_ à _END_ parmis _TOTAL_  candidatures",
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
  constructor(private fb: FormBuilder, private candservice: CandidatureService) { }

  ngOnInit() {
    this.form = this.fb.group({
      idCneuf: "",
      date: "",
      fichier: ""
    });

    this.getAllCandidatures();
    this.getAllcamp();

    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 3,
      language: this.lang,
      stateSave: true,
      destroy: true
    };
  }

  getAllCandidatures() {
    this.candservice.getCandidatures().subscribe((data) =>  {
     
      data.forEach(cand => {

        if(cand.statut == '5' && cand.deliberation == null) {
          this.candidatures.push(cand);
        }
       
      });
      data.forEach(cand => {
        if(cand.deliberation !== null) {
          this.deliberations.push(cand);
        }
      });
            this.dtTrigger.next();

      console.log( this.candidatures);
        console.log( this.deliberations);
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
    this.getDelibByCamp($event);
    }
    
    getDelibByCamp(id: number[]) {
      this.candservice.getCneufByCamp(id).subscribe((data : any) => {
        let delibs = [];
       data.forEach(cand=> {
         if(cand.deliberation !== null) {
           delibs.push(cand);
         }
       })
       this.deliberations = delibs;
      });
      console.log(this.deliberations);
      this.dtTrigger.next();

    }
    
 

  EnvoyerDelib() {
    this.candservice.saveDelib(this.form.value,this.form.controls['fichier'].value).subscribe(data=> {
      alert('Délibération sauvegardée avec succès!');

    }
    
    );
    this.getAllCandidatures();
  }

  ngOnDestroy(): void {
    // Do not forget to unsubscribe the event
    this.dtTrigger.unsubscribe();
  }

  uploadFile(event: any) {
    if (event.target.files && event.target.files.length > 0) {
      let file = event.target.files[0];
      console.log(file);
      this.candservice.UploadFile(file).subscribe(data => {
        this.form.controls['fichier'].patchValue(data);
      });
    }
}
DownloadFile(fileName: String) {
  this.candservice.DownloadFile(fileName).subscribe(data=> {
    console.log(data);
    let blob:any = new Blob([data], { type: data.type });
						fileSaver.saveAs(blob, fileName);

     
  });
}
}
