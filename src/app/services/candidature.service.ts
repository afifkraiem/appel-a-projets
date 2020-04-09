import { TokenStorageService } from '../Auth/token-storage.service';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpEventType } from '@angular/common/http';
import { Observable, Subject, throwError} from 'rxjs';
import { map } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})

export class CandidatureService {

  constructor(private http: HttpClient, private tokenservice: TokenStorageService) { }
  apiUrl =  'http://localhost:8080/api/';

  getCandidatures() {
    return this.http.get<any>(this.apiUrl + 'GetAllCneufs');
  }

  getCandByUserId() {
    const headers = new HttpHeaders({ 'Authorization': 'Bearer ' + localStorage.getItem('auth') });
    const options = ({ headers: headers });
    const id = localStorage.getItem('id');
    return this.http.get<any> (this.apiUrl + 'GetAllCneufByUserId/' +  id, options);
  }
getCandById(id: number) {
  return this.http.get<any[]> (this.apiUrl + 'cneuf/' + id);

}
  saveCand(candidature: any): Observable <Object> {
    const headers = new HttpHeaders({ 'Authorization': 'Bearer ' + localStorage.getItem('auth') });
const options = ({ headers: headers });
const id = localStorage.getItem('id');
   return this.http.post<Object>( this.apiUrl + 'savecneuf/' + id , candidature, options);
  }

  saveCandBr(candidature: any): Observable <Object> {
    const headers = new HttpHeaders({ 'Authorization': 'Bearer ' + localStorage.getItem('auth') });
const options = ({ headers: headers });
    const id = localStorage.getItem('id');
   return this.http.post<Object>(this.apiUrl + 'savecneufdraft/' + id, candidature, options);
  }

  Consolider(id: number, email: string) {

        return this.http.get(this.apiUrl + 'ConsoliderCneuf/' + id + '/' + email );
  }
  enBrouillon(idc: number, com: any, email: string) {
    
      return this.http.put(this.apiUrl + 'ToDraftCneuf/' + idc + '/' + email ,com);
}

  updateCandDraft(cand: any, idc: number) {
    const headers = new HttpHeaders({ 'Authorization': 'Bearer ' + localStorage.getItem('auth') });
    const options = ({ headers: headers });
    const id = localStorage.getItem('id');
    return this.http.put(this.apiUrl + 'UpdateDraftCneuf/'  + idc + '/' + id, cand, options);
  }

  updateCand(cand: any, idc: number) {
    const headers = new HttpHeaders({ 'Authorization': 'Bearer ' + localStorage.getItem('auth') });
    const options = ({ headers: headers });
    const id = localStorage.getItem('id');

    return this.http.put(this.apiUrl + 'UpdateCneuf/'  + idc + '/' + id, cand, options);
  }

  getListAcad() {
    return this.http.get<any>(this.apiUrl + 'etablissement' );
  }

  getListImpl() {
    return this.http.get(this.apiUrl + 'implantation');
  }

  saveEval(idc: number, form: any) {
    const headers = new HttpHeaders({ 'Authorization': 'Bearer ' + localStorage.getItem('auth')});
    const options = ({ headers: headers });
    const id = localStorage.getItem('id');
    return this.http.put<any>( this.apiUrl + 'saveEvaluationDraft/' + idc + '/' + id, form, options);
  }

  getEvalByExpertId() {
    const headers = new HttpHeaders({ 'Authorization': 'Bearer ' + localStorage.getItem('auth') });
    const options = ({ headers: headers });
    const id = localStorage.getItem('id');

    return this.http.get(this.apiUrl + 'getEvaluationsByExpert/' + id, options);
  }

  getCneufByExpert() {
    const headers = new HttpHeaders({ 'Authorization': 'Bearer ' + localStorage.getItem('auth') });
    const options = ({ headers: headers });
    const id = localStorage.getItem('id');

    return this.http.get(this.apiUrl + 'getCneufForExpert/' + id, options);
  }


  getEvalByCneufId(id: number) {
    return this.http.get(this.apiUrl + 'getEvaluationsByCneuf/' + id);
  }

  valider(id: number) {
    const headers = new HttpHeaders({ 'Authorization': 'Bearer ' + localStorage.getItem('auth') });
    const options = ({ headers: headers });
    return this.http.put(this.apiUrl + 'validerCneuf/' + id , options);
  }

  Rejeter(id: number) {
    const headers = new HttpHeaders({ 'Authorization': 'Bearer ' + localStorage.getItem('auth') });
    const options = ({ headers: headers });
    return this.http.put(this.apiUrl + 'rejeterCneuf/' + id , options);
  }

  saveCamp(camp: any): Observable <Object> {
    const headers = new HttpHeaders({ 'Authorization': 'Bearer ' + localStorage.getItem('auth') });
const options = ({ headers: headers });

   return this.http.post<Object>( this.apiUrl + 'saveCampagne/'  , camp, options);
  }

  getAllCamp() {
    return this.http.get(this.apiUrl + 'campagnes' );
  }
  ClotureCamp(id: number) {
    const headers = new HttpHeaders({ 'Authorization': 'Bearer ' + localStorage.getItem('auth') });
const options = ({ headers: headers });
    return this.http.put(this.apiUrl + 'updateCampagne/' + id , options);
  }

  getCneufByCamp(id: number[]) {
    const headers = new HttpHeaders({ 'Authorization': 'Bearer ' + localStorage.getItem('auth') });
  const options = ({ headers: headers });

    return this.http.get(this.apiUrl + 'cneufByCamp/' + id,  options);
  }

  getCneufByCampAndUser(id: number[]) {
    const headers = new HttpHeaders({ 'Authorization': 'Bearer ' + localStorage.getItem('auth') });
  const options = ({ headers: headers });
  const iduser = localStorage.getItem('id');

    return this.http.get(this.apiUrl + 'cneufByCampAndUserId/' + id+ '/'+iduser,  options);
  }
  UploadFile(fichier): Observable<any> {
    let  file = new FormData();
    file.append('file', fichier);

    return this.http.post(this.apiUrl+'file/uploadCos', file, {responseType: 'text', reportProgress: true });

  }

  DownloadFile(fileName: String) {
    return this.http.get(this.apiUrl+'file/'+fileName, { responseType: 'blob' });
  }

  saveDelib(delib: any, fileName: string) {
    const headers = new HttpHeaders({ 'Authorization': 'Bearer ' + localStorage.getItem('auth') });
    const options = ({ headers: headers });
       return this.http.post<Object>(this.apiUrl + 'saveDeliberation/'+fileName, delib, options);  
      }

  getAllDelibs() {
    const headers = new HttpHeaders({ 'Authorization': 'Bearer ' + localStorage.getItem('auth') });
    const options = ({ headers: headers });
    return this.http.get(this.apiUrl+ 'Deliberations')
  }
}
