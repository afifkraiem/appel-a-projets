import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
let UserService = class UserService {
    constructor(http, tokenservice) {
        this.http = http;
        this.tokenservice = tokenservice;
        this.apiUrl = 'http://localhost:8080/api';
    }
    getUsers() {
        const access = localStorage.getItem('access');
        return this.http.get('https://test-usagers.auf.org/api/user/all.json?access_token=' + access);
    }
    getOneUser(id) {
        const access = localStorage.getItem('access');
        return this.http.get('https://test-usagers.auf.org/api/user/' + id + '.json?access_token=' + access);
    }
    getCneufUsers() {
        const access = localStorage.getItem('access');
        return this.http.get('https://test-usagers.auf.org/api/user/all.json?access_token=' + access + '&role[value][]=CNEUF_EXPERT&role[value][]=CNEUF_ADMIN&role[value][]=CNEUF_COORDONNATEUR');
    }
    getExpert() {
        const access = localStorage.getItem('access');
        return this.http.get('https://test-usagers.auf.org/api/user/all.json?access_token=' + access + '&role[value][]=CNEUF_EXPERT');
    }
    getCoord() {
        const access = localStorage.getItem('access');
        return this.http.get('https://usagers.auf.org/api/user/all.json?access_token=' + access + '&role[value][]=CNEUF_COORDONNATEUR');
    }
    getAdmin() {
        const access = localStorage.getItem('access');
        return this.http.get('https://usagers.auf.org/api/user/all.json?access_token=' + access + '&role[value][]=CNEUF_ADMIN');
    }
    assignExpert(ide, idc) {
        const headers = new HttpHeaders({ 'Authorization': 'Bearer ' + this.tokenservice.getToken() });
        const options = ({ headers: headers });
        return this.http.post(this.apiUrl + '/assignerEvaluation/' + ide + '/' + idc, options);
    }
    setAsExpert(id) {
        let headers = { "Content-Type": "application/json" };
        const access = localStorage.getItem('access');
        return this.http.post('https://test-usagers.auf.org/api/user/' + id + '/update?access_token=' + access + '&role[value][]=CNEUF_EXPERT', { headers: headers });
    }
};
UserService = tslib_1.__decorate([
    Injectable({
        providedIn: 'root'
    })
], UserService);
export { UserService };
//# sourceMappingURL=user.service.js.map