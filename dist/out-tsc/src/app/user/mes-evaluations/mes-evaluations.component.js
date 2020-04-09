import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
let MesEvaluationsComponent = class MesEvaluationsComponent {
    constructor(candservice) {
        this.candservice = candservice;
    }
    ngOnInit() {
        this.getAllCands();
    }
    getAllCands() {
        this.candidatures = [];
        return this.candservice.getCneufByExpert().subscribe((data) => {
            this.candidatures = data;
        });
    }
};
MesEvaluationsComponent = tslib_1.__decorate([
    Component({
        selector: 'app-mes-evaluations',
        templateUrl: './mes-evaluations.component.html',
        styleUrls: ['./mes-evaluations.component.css']
    })
], MesEvaluationsComponent);
export { MesEvaluationsComponent };
//# sourceMappingURL=mes-evaluations.component.js.map