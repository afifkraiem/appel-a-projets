import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import * as $ from 'jquery';
let SidebarComponent = class SidebarComponent {
    constructor(tokenstorage, http) {
        this.tokenstorage = tokenstorage;
        this.http = http;
    }
    ngOnInit() {
        if (localStorage.getItem('auth')) {
            this.username = localStorage.getItem('prenom').charAt(0) + localStorage.getItem('nom').charAt(0);
            console.log(this.username);
            this.userRole = localStorage.getItem('role');
        }
        $("#menu-toggle").click(function (e) {
            e.preventDefault();
            $("#wrapper").toggleClass("active");
        });
    }
    logout() {
        this.tokenstorage.signOut();
    }
};
SidebarComponent = tslib_1.__decorate([
    Component({
        selector: 'app-sidebar',
        templateUrl: './sidebar.component.html',
        styleUrls: ['./sidebar.component.css']
    })
], SidebarComponent);
export { SidebarComponent };
//# sourceMappingURL=sidebar.component.js.map