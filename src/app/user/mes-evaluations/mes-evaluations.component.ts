import { Component, OnInit } from '@angular/core';
import { CandidatureService } from 'src/app/services/candidature.service';

@Component({
  selector: 'app-mes-evaluations',
  templateUrl: './mes-evaluations.component.html',
  styleUrls: ['./mes-evaluations.component.css']
})
export class MesEvaluationsComponent implements OnInit {

  constructor(private candservice: CandidatureService) { }
candidatures: any ;

  ngOnInit() {
this.getAllCands();
  }
getAllCands() {
  this.candidatures = [];
  return this.candservice.getCneufByExpert().subscribe((data: {}) => {
    this.candidatures = data;
  });  }

}
