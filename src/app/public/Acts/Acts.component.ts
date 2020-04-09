import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ActualiteService } from 'src/app/services/actualite.service';

@Component({
  selector: 'app-Acts',
  templateUrl: './Acts.component.html',
  styleUrls: ['./Acts.component.css']
})
export class ActsComponent implements OnInit {
  constructor(private actservice: ActualiteService, private router: Router) { }
  acts =  [];

    ngOnInit() {
   this.actservice.getAllActualite().subscribe( data => {
  this.acts = data;
  console.log(data);
  });
    }

}
