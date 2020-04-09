
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Route } from '@angular/compiler/src/core';
import {DomSanitizer, SafeResourceUrl} from '@angular/platform-browser';
import { ActualiteService } from 'src/app/services/actualite.service';

@Component({
  selector: 'app-appel',
  templateUrl: './appel.component.html',
  styleUrls: ['./appel.component.css']
})
export class AppelComponent implements OnInit {

  id;

  act;
  text;
 
 safe;
 
   constructor(private actservice: ActualiteService, private route: ActivatedRoute, private router: Router) { }
 
   ngOnInit() {
 
     this.id = this.route.snapshot.paramMap.get('id');
 
     console.log(this.id);
 
      this.actservice.getActualiteById(this.id).subscribe(data => {
       this.act = data;
     this.safe = this.getUrls(this.act.discription);
     var test_list = this.safe;
       var the_test_spliter=new RegExp('\n',"g");
       var the_test_array = test_list.split(the_test_spliter);
       this.text = the_test_array;
       console.log(this.text);
 
       });
 
     }
 
 
 
     
 
 
    navigate() {
      this.router.navigateByUrl('Actualités');
    }
 
    getUrls(text) {
     var urlRegex =/(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/ig;
     return text.replace(urlRegex, function(url) {
         return '<a href="' + url + '">' + url + '</a>';
       }
     );
    }

  }
