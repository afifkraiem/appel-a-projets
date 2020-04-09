import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { CandidatureService } from 'src/app/services/candidature.service';

@Component({
  selector: 'app-suivi-cneuf',
  templateUrl: './suivi-cneuf.component.html',
  styleUrls: ['./suivi-cneuf.component.css']
})
export class SuiviCneufComponent implements OnInit {

  form: FormGroup;
  selectedCneuf: any;
  cneufs = [];

  constructor(private fb:FormBuilder, private candservice: CandidatureService) { }

  ngOnInit() {
    this.form = this.fb.group({
      id_cneuf:'',
      intitule:'',
      rapport:''
    })

    this.getCneufs();
  }

  OnSelect(cneuf) {
    this.selectedCneuf = cneuf;
    console.log(this.selectedCneuf);
    }

    getCneufs() {
      this.candservice.getCandByUserId().subscribe(data => {
        this.cneufs = data;
        console.log(data);
      })
    }
}
