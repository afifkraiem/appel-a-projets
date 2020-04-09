import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
const TOKEN_KEY = 'AuthToken';
const USERNAME_KEY = 'AuthUsername';
const AUTHORITIES_KEY = 'AuthAuthorities';
const ID_KEY = 'AuthUserId';
let TokenStorageService = class TokenStorageService {
    constructor(http) {
        this.http = http;
        this.roles = [];
    }
    signOut() {
        localStorage.clear();
    }
    saveToken(token) {
        window.sessionStorage.removeItem(TOKEN_KEY);
        window.sessionStorage.setItem(TOKEN_KEY, token);
    }
    getToken() {
        return sessionStorage.getItem(TOKEN_KEY);
    }
    saveId(id) {
        window.sessionStorage.removeItem(ID_KEY);
        window.sessionStorage.setItem(ID_KEY, id);
    }
    getId() {
        return sessionStorage.getItem(ID_KEY);
    }
    saveUsername(username) {
        window.sessionStorage.removeItem(USERNAME_KEY);
        window.sessionStorage.setItem(USERNAME_KEY, username);
    }
    getUsername() {
        return sessionStorage.getItem(USERNAME_KEY);
    }
    saveAuthorities(authorities) {
        window.sessionStorage.removeItem(AUTHORITIES_KEY);
        window.sessionStorage.setItem(AUTHORITIES_KEY, JSON.stringify(authorities));
    }
    getAuthorities() {
        this.roles = [];
        if (sessionStorage.getItem(TOKEN_KEY)) {
            JSON.parse(sessionStorage.getItem(AUTHORITIES_KEY)).forEach(authority => {
                this.roles.push(authority);
            });
        }
        return this.roles;
    }
    getParameterByName(name) {
        let url = window.location.href;
        name = name.replace(/[[]]/g, "\$&");
        var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"), results = regex.exec(url);
        if (!results)
            return null;
        if (!results[2])
            return '';
        return decodeURIComponent(results[2].replace("/+/g", " "));
    }
    SIUTokenExpiration() {
        const token = localStorage.getItem('auth');
        const helper = new JwtHelperService();
        const isExpired = helper.isTokenExpired(token);
        return isExpired;
    }
    getSIUToken() {
        return this.http.get('https://test-usagers.auf.org/oauth/v2/token?grant_type=client_credentials&client_id=11_5x39q6e96s080cogggk4wos0gcsksoogcs0g80kkgsws0g0oow&client_secret=2nlgtq1qxsg0wk4gg4okw80gscg0g4sg8kk8sgo4sockg0ckwo').subscribe(data => {
            localStorage.setItem('access', data.access_token);
        });
    }
};
TokenStorageService = tslib_1.__decorate([
    Injectable({
        providedIn: 'root'
    })
], TokenStorageService);
export { TokenStorageService };
//# sourceMappingURL=token-storage.service.js.map