import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
let ActualiteService = class ActualiteService {
    constructor(http, tokenservice) {
        this.http = http;
        this.tokenservice = tokenservice;
        this.apiUrl = 'https://dev-cneuf-back.eu-de.mybluemix.net/api/';
    }
    getAllActualite() {
        return this.http.get(this.apiUrl + 'AllActuality');
    }
    getActualiteById(id) {
        return this.http.get(this.apiUrl + 'actuality/' + id);
    }
    getActualiteByCneufId(id) {
        return this.http.get(this.apiUrl + 'actualityByCneufId/' + id);
    }
    saveAct(act) {
        const headers = new HttpHeaders({ 'Authorization': 'Bearer ' + localStorage.getItem('auth') });
        const options = ({ headers: headers });
        return this.http.post(this.apiUrl + 'addActuality/', act, options);
    }
    updateAct(act, id) {
        const headers = new HttpHeaders({ 'Authorization': 'Bearer ' + localStorage.getItem('auth') });
        const options = ({ headers: headers });
        return this.http.put(this.apiUrl + 'UpdateActuality/' + id, act, options);
    }
    deleteAct(id) {
        return this.http.delete(this.apiUrl + 'DeleteActuality/' + id);
    }
};
ActualiteService = tslib_1.__decorate([
    Injectable({
        providedIn: 'root'
    })
], ActualiteService);
export { ActualiteService };
//# sourceMappingURL=actualite.service.js.map