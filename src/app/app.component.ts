import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Spinkit } from 'ng-http-loader';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'cneuf';
  public spinkit = Spinkit;
  constructor( private http: HttpClient) { }
  ngOnInit() {
   
}
}
