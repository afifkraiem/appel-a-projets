import { Injectable } from '@angular/core';
import { TokenStorageService } from '../Auth/token-storage.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, Subject, throwError} from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class ActualiteService {

  apiUrl =  'https://dev-cneuf-back.eu-de.mybluemix.net/api/' ;

constructor(private http: HttpClient, private tokenservice: TokenStorageService) { }

getAllActualite() {

  return this.http.get<any>(this.apiUrl + 'AllActuality');
}

getActualiteById(id: number) {
  return this.http.get<any>(this.apiUrl + 'actuality/' + id);
}

getActualiteByCneufId(id: number) {

return this.http.get<any> (this.apiUrl + 'actualityByCneufId/' + id);
}

saveAct(act: any): Observable <Object> {
  const headers = new HttpHeaders({ 'Authorization': 'Bearer ' + localStorage.getItem('auth') });
const options = ({ headers: headers });
 return this.http.post<Object>(this.apiUrl + 'addActuality/' , act, options);
}

updateAct(act: any, id: number) {
  const headers = new HttpHeaders({ 'Authorization': 'Bearer ' + localStorage.getItem('auth') });
  const options = ({ headers: headers });
  return this.http.put(this.apiUrl + 'UpdateActuality/'  + id, act, options);
}
 deleteAct(id: number) {
   return this.http.delete(this.apiUrl + 'DeleteActuality/' + id);
 }
}
