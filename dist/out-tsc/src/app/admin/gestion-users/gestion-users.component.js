import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
let GestionUsersComponent = class GestionUsersComponent {
    constructor(userservice, tokenservice) {
        this.userservice = userservice;
        this.tokenservice = tokenservice;
    }
    ngOnInit() {
        this.getUsers();
    }
    getUsers() {
        this.users = [];
        this.userservice.getCneufUsers().subscribe((response) => {
            console.log(response);
            this.users = response.users;
            console.log(this.users);
        }, (error) => {
            this.tokenservice.getSIUToken();
            this.getUsers();
        });
    }
    setAsExpert(id) {
        console.log(id);
        this.userservice.setAsExpert(id).subscribe(data => {
            console.log(data);
            alert('utilisateur défini comme expertavec succès!');
        });
    }
};
GestionUsersComponent = tslib_1.__decorate([
    Component({
        selector: 'app-gestion-users',
        templateUrl: './gestion-users.component.html',
        styleUrls: ['./gestion-users.component.css']
    })
], GestionUsersComponent);
export { GestionUsersComponent };
//# sourceMappingURL=gestion-users.component.js.map