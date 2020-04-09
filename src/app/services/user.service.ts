import { TokenStorageService } from '../Auth/token-storage.service';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class UserService {

constructor(private http: HttpClient, private tokenservice: TokenStorageService) { }

apiUrl = 'http://localhost:8080/api';

getUsers() {
  const access = localStorage.getItem('access');
  return this.http.get<any>('https://test-usagers.auf.org/api/user/all.json?access_token=' + access   );
}

getOneUser(id:number) {
  const access = localStorage.getItem('access');
  return this.http.get<any>('https://test-usagers.auf.org/api/user/'+id+'.json?access_token=' + access );

}
getCneufUsers(){
  const access = localStorage.getItem('access');
  return this.http.get<any>('https://test-usagers.auf.org/api/user/all.json?access_token=' + access + '&role[value][]=CNEUF_EXPERT&role[value][]=CNEUF_ADMIN&role[value][]=CNEUF_COORDONNATEUR' );
}
getExpert() {
const access = localStorage.getItem('access');
  return this.http.get<any>('https://test-usagers.auf.org/api/user/all.json?access_token=' + access + '&role[value][]=CNEUF_EXPERT');
}
getCoord() {
const access = localStorage.getItem('access');
  return this.http.get<any>('https://usagers.auf.org/api/user/all.json?access_token=' + access + '&role[value][]=CNEUF_COORDONNATEUR' );
}
getAdmin() {
const access = localStorage.getItem('access');
  return this.http.get<any>('https://usagers.auf.org/api/user/all.json?access_token=' + access + '&role[value][]=CNEUF_ADMIN' );
}



  assignExpert(ide: number[], idc: number) {
    const headers = new HttpHeaders({ 'Authorization': 'Bearer ' + this.tokenservice.getToken() });
    const options = ({ headers: headers });
    return this.http.post(this.apiUrl + '/assignerEvaluation/' + ide + '/' + idc , options);
  }


setAsExpert(id: number) {

  let headers = { "Content-Type": "application/json" };
  const access = localStorage.getItem('access');
  return this.http.post<any>('https://test-usagers.auf.org/api/user/'+ id + '/update?access_token=' + access + '&role[value][]=CNEUF_EXPERT', {headers: headers} );

}

}

