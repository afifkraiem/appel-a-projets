import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-suivi-cneufs',
  templateUrl: './suivi-cneufs.component.html',
  styleUrls: ['./suivi-cneufs.component.css']
})
export class SuiviCneufsComponent implements OnInit {

selectedCneuf: any;
 cneufs = [{name:'cneuf1', Rapports: ['fichier 1', 'fichier2'] , clicked: false },{name:'cneuf2', Rapports: ['fichier 3', 'fichier 4'] , clicked: false},{name:'cneuf3', Rapports: ['fichier 5', 'fichier 6'], clicked: false },{name:'cneuf4', Rapports: ['fichier 7', 'fichier 8'] , clicked: false},{name:'cneuf5', Rapports: ['fichier 9', 'fichier 10'], clicked: false }]
  constructor() { }

  ngOnInit() {
  }
OnSelect(cneuf) {
this.selectedCneuf = cneuf;
console.log(this.selectedCneuf);
}

getFilesForCneuf(cneuf: any) {

}
}
