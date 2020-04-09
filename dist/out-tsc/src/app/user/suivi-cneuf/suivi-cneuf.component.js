import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
let SuiviCneufComponent = class SuiviCneufComponent {
    constructor(fb, candservice) {
        this.fb = fb;
        this.candservice = candservice;
        this.cneufs = [];
    }
    ngOnInit() {
        this.form = this.fb.group({
            id_cneuf: '',
            intitule: '',
            rapport: ''
        });
        this.getCneufs();
    }
    OnSelect(cneuf) {
        this.selectedCneuf = cneuf;
        console.log(this.selectedCneuf);
    }
    getCneufs() {
        this.candservice.getCandByUserId().subscribe(data => {
            this.cneufs = data;
            console.log(data);
        });
    }
};
SuiviCneufComponent = tslib_1.__decorate([
    Component({
        selector: 'app-suivi-cneuf',
        templateUrl: './suivi-cneuf.component.html',
        styleUrls: ['./suivi-cneuf.component.css']
    })
], SuiviCneufComponent);
export { SuiviCneufComponent };
//# sourceMappingURL=suivi-cneuf.component.js.map