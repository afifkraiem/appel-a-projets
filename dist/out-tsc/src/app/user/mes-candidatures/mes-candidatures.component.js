import * as tslib_1 from "tslib";
import { Component, Input } from '@angular/core';
let MesCandidaturesComponent = class MesCandidaturesComponent {
    constructor(candservice, userservice) {
        this.candservice = candservice;
        this.userservice = userservice;
    }
    ngOnInit() {
        this.getAllCands();
        this.getAllcamp();
    }
    getAllCands() {
        this.candidatures = [];
        return this.candservice.getCandByUserId().subscribe((data) => {
            this.candidatures = data;
            console.log(data);
        });
    }
    getAllcamp() {
        this.Campagnes = [];
        this.candservice.getAllCamp().subscribe(data => {
            console.log(data);
            this.Campagnes = data;
        });
    }
    onSelect($event) {
        console.log($event);
        this.getCneufByCamp($event);
    }
    getCneufByCamp(id) {
        this.candservice.getCneufByCamp(id).subscribe(data => {
            console.log(data);
            this.candidatures = data;
        });
    }
};
tslib_1.__decorate([
    Input()
], MesCandidaturesComponent.prototype, "searchString", void 0);
MesCandidaturesComponent = tslib_1.__decorate([
    Component({
        selector: 'app-mes-candidatures',
        templateUrl: './mes-candidatures.component.html',
        styleUrls: ['./mes-candidatures.component.css']
    })
], MesCandidaturesComponent);
export { MesCandidaturesComponent };
//# sourceMappingURL=mes-candidatures.component.js.map