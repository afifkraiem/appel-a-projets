import { Component, OnInit } from '@angular/core';
import { CandidatureService } from 'src/app/services/candidature.service';
import { UserService } from 'src/app/services/user.service';
import { ActualiteService } from 'src/app/services/actualite.service';
import * as CanvasJS from 'src/assets/canvasjs.min.js';
import { Chart, plugins, ChartDataSets } from 'chart.js';
import { TokenStorageService } from '../../Auth/token-storage.service';
import { from } from 'rxjs';
import { groupBy, mergeMap, toArray } from 'rxjs/operators';

import 'chartjs-plugin-datalabels';
@Component({
  selector: 'app-dashboard-admin',
  templateUrl: './dashboard-admin.component.html',
  styleUrls: ['./dashboard-admin.component.css']
})
export class DashboardAdminComponent implements OnInit {
  nbrCand: number;
candidatures: any;
campagnes: any;
nbrCamp: number;
NomCampActive: String;
users: any;
nbrUser: number;
Acts: any;
nbrActs: number;
nbrBr: number = 0;
nbrS: number = 0;
nbrC: number = 0;
nbrA: number =0;
nbrV: number = 0;
nbrR: number = 0;
chart = [];
nCands = [];
candLabels = [];

  public pieChartLabels: string[] = ['En brouillon', 'En attente de consolidation', 'Consolidée','Assigné à un expert', 'Validée', 'Rejetée'];
  public pieChartType: string = 'pie';
  public   pieChartData = [0, 0, 0, 0, 0];

  public pieChartLegend = true;
  public pieChartOptions: any = [{backgroundColor: [
            '#938F85',
            '#4BC0C0',
            '#FFCE56',
            '#4EDB12',
            '#F91515'
            ]
            

            },
           
            {
              responsive: true
          },
         
          
        
      

        ];

        barchart ; 
  constructor(private candservice: CandidatureService, private userservice: UserService, private actservice: ActualiteService ,private tokenservice: TokenStorageService) { }

  ngOnInit() {
    this.getNbrCandidatures();
    this.getNbrCampagnes();
    this.getUsers();
    this.getNbrActualites();
    this.GrpCands();
    
  }

  getNbrCandidatures() {
    this.candidatures = [];
   this.candservice.getCandidatures().subscribe((data: {}) => {
    this.candidatures = data;
    console.log(data);
    this.nbrCand = this.candidatures.length;

    this.candidatures.forEach(cand => {
      switch (cand.statut) {
        case '0': { 
                    this.nbrBr = this.nbrBr + 1;
                    break; }
      
        case '1': {
          this.nbrS = this.nbrS + 1;
          break;
        }
        case '2': {
          this.nbrC = this.nbrC + 1;
          break;
        }
        case '3': {
          this.nbrA = this.nbrA + 1;
          break;
        }
        case '4': {
          this.nbrV = this.nbrV + 1;
          break;
        }
        case '5': {
          this.nbrR = this.nbrR + 1;
          break;
        }
      }
      });
      this.pieChartData = [this.nbrBr,this.nbrS,this.nbrC,this.nbrA,this.nbrV,this.nbrR]

       console.log(this.nbrBr, this.nbrC);
       const groups = this.candidatures.reduce((groups, cand) => {
        const date = (new Date(cand.date_debut)).getFullYear();
        if (!groups[date]) {
          groups[date] = [];
        }
        groups[date].push(cand);
        return groups;
      }, {});
      
      // Edit: to add it in the array format instead
      const groupArrays = Object.keys(groups).map((date) => {
        return {
          date,
          cands: groups[date]
        };
      });
      groupArrays.forEach(array=> {
        this.candLabels.push(array.date); 
        this.nCands.push(array.cands.length)
       
      })
      console.log(this.candLabels);
      console.log(this.nCands);
      this.barchart = new Chart('canvas', {  
        type: 'bar',  
        data: {  
          labels: this.candLabels,  
          datasets: [  
            {  
              data: this.nCands,  
              borderColor: '#3cba9f',  
              backgroundColor: [  
                "Blue",
                "Blue",  
                "Blue",  
                "Blue",  
                "Blue",    
                "Blue",  
                
                 
              ],  
              fill: true,
            }  
          ]  
        },  
        options: {  
          legend: {  
            display: false
          },  
          scales: {  
            xAxes: [{  
              display: true  
            }],  
            yAxes: [{
              ticks: {
                  beginAtZero: true,
              },
              display: true
          }]
          },
          plugins: {
            datalabels: {
              anchor: 'end',
              align: 'top',
              formatter: Math.round,
              font: {
                weight: 'bold'
              }
            }
          }  
        }  
      });  
  
        });
    
        
}

getNbrCampagnes() {
  this.campagnes = [];
  this.candservice.getAllCamp().subscribe((data) => {

    this.campagnes = data;
    console.log(data);
    this.nbrCamp = this.campagnes.length;

    this.campagnes.forEach(camp => {
      if(camp.etat == 'active') { 
         this.NomCampActive = camp.nomcomp;
         console.log(this.NomCampActive);
      }
    });
  });
}

getUsers() {
  this.users = [];
  this.userservice.getCneufUsers().subscribe((response)=> {
    this.users = response.users;
    this.nbrUser = this.users.length; },

    (error)=>{
      this.tokenservice.getSIUToken();
      this.getUsers();
    }
  );
}

getNbrActualites() {
  this.Acts=  [];
  this.actservice.getAllActualite().subscribe(data=> {
    this.Acts = data;
    this.nbrActs = this.Acts.length;
  });
}

GrpCands() {
  this.candservice.getCandidatures().subscribe((data: any = []) => {
    const source = from(data);
    let result = source.pipe(groupBy((cand:any) =>cand.statut),
    
    mergeMap(group => group.pipe(toArray())));
result.subscribe(val=> {
  console.log(val.length);
  val.forEach(el=> {
    
  })
}); 
 
})
}
}