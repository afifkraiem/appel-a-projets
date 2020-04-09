import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
let SuiviCneufsComponent = class SuiviCneufsComponent {
    constructor() {
        this.cneufs = [{ name: 'cneuf1', Rapports: ['fichier 1', 'fichier2'], clicked: false }, { name: 'cneuf2', Rapports: ['fichier 3', 'fichier 4'], clicked: false }, { name: 'cneuf3', Rapports: ['fichier 5', 'fichier 6'], clicked: false }, { name: 'cneuf4', Rapports: ['fichier 7', 'fichier 8'], clicked: false }, { name: 'cneuf5', Rapports: ['fichier 9', 'fichier 10'], clicked: false }];
    }
    ngOnInit() {
    }
    OnSelect(cneuf) {
        this.selectedCneuf = cneuf;
        console.log(this.selectedCneuf);
    }
    getFilesForCneuf(cneuf) {
    }
};
SuiviCneufsComponent = tslib_1.__decorate([
    Component({
        selector: 'app-suivi-cneufs',
        templateUrl: './suivi-cneufs.component.html',
        styleUrls: ['./suivi-cneufs.component.css']
    })
], SuiviCneufsComponent);
export { SuiviCneufsComponent };
//# sourceMappingURL=suivi-cneufs.component.js.map