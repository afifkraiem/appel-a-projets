import { Component, OnInit } from '@angular/core';
import { CandidatureService } from '../services/candidature.service';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../services/user.service';
import { Location } from '@angular/common';

import { saveAs } from 'file-saver';
import * as fileSaver from 'file-saver';
import { FormGroup, FormBuilder } from '@angular/forms';
import { TokenStorageService } from '../Auth/token-storage.service';

@Component({
  selector: 'app-details-candidature',
  templateUrl: './details-candidature.component.html',
  styleUrls: ['./details-candidature.component.css']
})
export class DetailsCandidatureComponent implements OnInit {
public userRole = localStorage.getItem('role');
userid = localStorage.getItem('id');
id;
emailPorteur: string;
cand: any = {};
file_cad: SafeResourceUrl ;
file_plan: SafeResourceUrl ;
file_per: SafeResourceUrl ;
file_bud: SafeResourceUrl ;
file_comm: SafeResourceUrl ;
file_qual: SafeResourceUrl ;
lettre_acad: SafeResourceUrl ;
lettre_se: SafeResourceUrl ;
lettre_aut: SafeResourceUrl ;
listp;
obj;
strcom;
stper;
gouv;
org;
experts = [];
totdepa1;
totdepa2;
totdepa3;
totdepa4;

form: FormGroup;

  constructor(private route: ActivatedRoute, private candservice: CandidatureService, private sanitizer: DomSanitizer,
    private router: Router, private userservice: UserService, private _location: Location, private fb: FormBuilder, private tokenservice: TokenStorageService
    ) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.showCand();
    this.getEmailPorteur();
    this.form = this.fb.group({
      n1: '',
      n2: '',
      n3: '',
      n4: '',
      n5: '',
      n6: '',
      n7: '',
      commentaire: ''
   });
  }


showCand() {
  this.candservice.getCandById(this.id).subscribe((data => {
    this.cand = data;
    console.log(data);

     


    this.totdepa1 = parseInt(this.cand.Depences[0].m_d_fct_a1,10) + parseInt(this.cand.Depences[0].m_d_fct_a1,10) + parseInt(this.cand.Depences[0].m_d_fct_a1,10) + parseInt(this.cand.Depences[0].m_d_fct_a1,10);
    this.totdepa2 = parseInt(this.cand.Depences[0].m_d_fct_a2,10) + parseInt(this.cand.Depences[0].m_d_fct_a2,10) + parseInt(this.cand.Depences[0].m_d_fct_a2,10) + parseInt(this.cand.Depences[0].m_d_fct_a2,10);
    this.totdepa3 = parseInt(this.cand.Depences[0].m_d_fct_a3,10) + parseInt(this.cand.Depences[0].m_d_fct_a3,10) + parseInt(this.cand.Depences[0].m_d_fct_a3,10) + parseInt(this.cand.Depences[0].m_d_fct_a3,10);
    this.totdepa4 = parseInt(this.cand.Depences[0].m_d_fct_a4,10) + parseInt(this.cand.Depences[0].m_d_fct_a4,10) + parseInt(this.cand.Depences[0].m_d_fct_a4,10) + parseInt(this.cand.Depences[0].m_d_fct_a4,10);



  }));

}

print() {
  window.print();
}

Consolider (id) {
  this.candservice.Consolider(id, this.emailPorteur).subscribe((data => {
    alert('Candidature consolidée avec succès! ');
    this.router.navigate(['admin/Candidatures']);

  }));

}
retourBr (comm:any) {
  this.candservice.enBrouillon(this.id,comm,this.emailPorteur).subscribe((data => {
    alert('Candidature remise en état brouillon avec succès! ');
    this.router.navigate(['admin/Candidatures']);


  }));

}





goBack() {
  this._location.back();

}

getEmailPorteur() {
  this.userservice.getOneUser(this.cand.user_id).subscribe((response) => {
      this.emailPorteur = response.users[0].email;
      console.log(this.emailPorteur); },
      (error)=> {
        this.tokenservice.getSIUToken();
        this.getEmailPorteur();
      }
        
      
  );
}

DownloadFile(fileName: String) {
  this.candservice.DownloadFile(fileName).subscribe(data=> {
    console.log(data);
    let blob:any = new Blob([data], { type: data.type });
						fileSaver.saveAs(blob, fileName);

     
  });
}

evaluer(id: number, form: any) {
  console.log(this.form.value);
  this.candservice.saveEval(id, form.value).subscribe(data => {

alert('Evaluation envoyée avec succès !');
this.router.navigate(['user/MesCandidatures']);

  });

} 
}
