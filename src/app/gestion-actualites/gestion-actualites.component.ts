import { Component, OnInit, ViewChild, ElementRef, TemplateRef } from '@angular/core';
import { ActualiteService } from '../services/actualite.service';
import { CandidatureService } from '../services/candidature.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-gestion-actualites',
  templateUrl: './gestion-actualites.component.html',
  styleUrls: ['./gestion-actualites.component.css']
})
export class GestionActualitesComponent implements OnInit {
  acts = [];
  cands = [];
  form: FormGroup;
  selectedAct= {
                id: null,
                titre: '',
                cathegory: '',
                intro: '',
                image: null,
                discription: '',
                cneufs: []
              };
  public Editor = ClassicEditor;
  public model = {
    editorData: ''
  };
  @ViewChild('image', {static: true}) cadInput: ElementRef;
  constructor(private actservice: ActualiteService, private candservice: CandidatureService,private fb: FormBuilder) { }

  ngOnInit() {
    this.getCandsByUserId();

    $("#menu-toggle").click(function(e) {
      e.preventDefault();
      $("#wrapper").toggleClass("active");
});

this.form = this.fb.group({
  titre: '',
  cathegory: '',
  intro: '',
  image: null,
  discription: '',
  cneufs: []

});


  }
  
  getCandsByUserId() {
    return this.candservice.getCandByUserId().subscribe( data => {

      this.cands = data;

    });
  }
  showActs($event) {

    return this.actservice.getActualiteByCneufId($event).subscribe(data => {
      this.acts = data;
    });

  }

deleteAct(id: number, index: number) {
  return this.actservice.deleteAct(id).subscribe( data => {
    this.acts.splice(index, 1);

  });
}

upImage(event: any) {
  let reader = new FileReader();
  if (event.target.files && event.target.files.length > 0) {
    let file = event.target.files[0];
    reader.readAsDataURL(file);
    reader.onload = () => {
      this.form.get('image').setValue( reader.result);
    };
  }
}

envoyer(form: any) {
console.log(form.value);
this.actservice.saveAct(form.value).subscribe(data => {
  alert('Actualité ajoutée avec succès !');
  
});
}

getSelectedAct(act:any) {
  console.log(act);
 this.actservice.getActualiteById(act).subscribe(data => {
   this.selectedAct = data;
   console.log(this.selectedAct);
 });
}

getAct(id:number) {
  return  this.actservice.getActualiteById(id).subscribe(data => {
    this.form.patchValue(data);
    this.selectedAct = data ;
    this.selectedAct.cneufs.forEach(cneuf => {
      this.form.get('cneufs').setValue([cneuf.id]);
    });
  });
}

updateAct(form:any) {
  return this.actservice.updateAct(form.value, this.selectedAct.id).subscribe(data => {
    alert('Actualité modifiée avec succès !');
  });
}
}
