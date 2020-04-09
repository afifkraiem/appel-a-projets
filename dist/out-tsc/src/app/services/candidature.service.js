import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
let CandidatureService = class CandidatureService {
    constructor(http, tokenservice) {
        this.http = http;
        this.tokenservice = tokenservice;
        this.apiUrl = 'http://localhost:8080/api/';
    }
    getCandidatures() {
        return this.http.get(this.apiUrl + 'GetAllCneufs');
    }
    getCandByUserId() {
        const headers = new HttpHeaders({ 'Authorization': 'Bearer ' + localStorage.getItem('auth') });
        const options = ({ headers: headers });
        const id = localStorage.getItem('id');
        return this.http.get(this.apiUrl + 'GetAllCneufByUserId/' + id, options);
    }
    getCandById(id) {
        return this.http.get(this.apiUrl + 'cneuf/' + id);
    }
    saveCand(candidature) {
        const headers = new HttpHeaders({ 'Authorization': 'Bearer ' + localStorage.getItem('auth') });
        const options = ({ headers: headers });
        const id = localStorage.getItem('id');
        return this.http.post(this.apiUrl + 'savecneuf/' + id, candidature, options);
    }
    saveCandBr(candidature) {
        const headers = new HttpHeaders({ 'Authorization': 'Bearer ' + localStorage.getItem('auth') });
        const options = ({ headers: headers });
        const id = localStorage.getItem('id');
        return this.http.post(this.apiUrl + 'savecneufdraft/' + id, candidature, options);
    }
    Consolider(id, email) {
        return this.http.get(this.apiUrl + 'ConsoliderCneuf/' + id + '/' + email);
    }
    enBrouillon(idc, com, email) {
        return this.http.put(this.apiUrl + 'ToDraftCneuf/' + idc + '/' + email, com);
    }
    updateCandDraft(cand, idc) {
        const headers = new HttpHeaders({ 'Authorization': 'Bearer ' + localStorage.getItem('auth') });
        const options = ({ headers: headers });
        const id = localStorage.getItem('id');
        return this.http.put(this.apiUrl + 'UpdateDraftCneuf/' + idc + '/' + id, cand, options);
    }
    updateCand(cand, idc) {
        const headers = new HttpHeaders({ 'Authorization': 'Bearer ' + localStorage.getItem('auth') });
        const options = ({ headers: headers });
        const id = localStorage.getItem('id');
        return this.http.put(this.apiUrl + 'UpdateCneuf/' + idc + '/' + id, cand, options);
    }
    getListAcad() {
        return this.http.get(this.apiUrl + 'etablissement');
    }
    getListImpl() {
        return this.http.get(this.apiUrl + 'implantation');
    }
    saveEval(idc, form) {
        const headers = new HttpHeaders({ 'Authorization': 'Bearer ' + localStorage.getItem('auth') });
        const options = ({ headers: headers });
        const id = localStorage.getItem('id');
        return this.http.put(this.apiUrl + 'saveEvaluationDraft/' + idc + '/' + id, form, options);
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
    getEvalByCneufId(id) {
        return this.http.get(this.apiUrl + 'getEvaluationsByCneuf/' + id);
    }
    valider(id) {
        const headers = new HttpHeaders({ 'Authorization': 'Bearer ' + localStorage.getItem('auth') });
        const options = ({ headers: headers });
        return this.http.put(this.apiUrl + 'validerCneuf/' + id, options);
    }
    Rejeter(id) {
        const headers = new HttpHeaders({ 'Authorization': 'Bearer ' + localStorage.getItem('auth') });
        const options = ({ headers: headers });
        return this.http.put(this.apiUrl + 'rejeterCneuf/' + id, options);
    }
    saveCamp(camp) {
        const headers = new HttpHeaders({ 'Authorization': 'Bearer ' + localStorage.getItem('auth') });
        const options = ({ headers: headers });
        return this.http.post(this.apiUrl + 'saveCampagne/', camp, options);
    }
    getAllCamp() {
        return this.http.get(this.apiUrl + 'campagnes');
    }
    ClotureCamp(id) {
        const headers = new HttpHeaders({ 'Authorization': 'Bearer ' + localStorage.getItem('auth') });
        const options = ({ headers: headers });
        return this.http.put(this.apiUrl + 'updateCampagne/' + id, options);
    }
    getCneufByCamp(id) {
        const headers = new HttpHeaders({ 'Authorization': 'Bearer ' + localStorage.getItem('auth') });
        const options = ({ headers: headers });
        return this.http.get(this.apiUrl + 'cneufByCamp/' + id, options);
    }
    UploadFile(fichier) {
        let file = new FormData();
        file.append('file', fichier);
        return this.http.post(this.apiUrl + 'file/uploadCos', file, { responseType: 'text', reportProgress: true });
    }
    DownloadFile(fileName) {
        return this.http.get(this.apiUrl + 'file/' + fileName, { responseType: 'blob' });
    }
    saveDelib(delib, fileName) {
        const headers = new HttpHeaders({ 'Authorization': 'Bearer ' + localStorage.getItem('auth') });
        const options = ({ headers: headers });
        return this.http.post(this.apiUrl + 'saveDeliberation/' + fileName, delib, options);
    }
    getAllDelibs() {
        const headers = new HttpHeaders({ 'Authorization': 'Bearer ' + localStorage.getItem('auth') });
        const options = ({ headers: headers });
        return this.http.get(this.apiUrl + 'Deliberations');
    }
};
CandidatureService = tslib_1.__decorate([
    Injectable({
        providedIn: 'root'
    })
], CandidatureService);
export { CandidatureService };
//# sourceMappingURL=candidature.service.js.map