import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
let HeaderComponent = class HeaderComponent {
    constructor(tokenstorage, http) {
        this.tokenstorage = tokenstorage;
        this.http = http;
        this.isLoggedIn = false;
    }
    ngOnInit() {
        if (localStorage.getItem('auth')) {
            this.isLoggedIn = true;
            this.username = localStorage.getItem('prenom').charAt(0) + '' + localStorage.getItem('nom').charAt(0);
            console.log(this.username);
            this.userRole = localStorage.getItem('role');
        }
    }
    logout() {
        this.tokenstorage.signOut();
    }
};
HeaderComponent = tslib_1.__decorate([
    Component({
        selector: 'app-header',
        templateUrl: './header.component.html',
        styleUrls: ['./header.component.css']
    })
], HeaderComponent);
export { HeaderComponent };
//# sourceMappingURL=header.component.js.map