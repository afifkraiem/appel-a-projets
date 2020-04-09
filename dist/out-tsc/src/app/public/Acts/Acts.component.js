import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
let ActsComponent = class ActsComponent {
    constructor(actservice, router) {
        this.actservice = actservice;
        this.router = router;
        this.acts = [];
    }
    ngOnInit() {
        this.actservice.getAllActualite().subscribe(data => {
            this.acts = data;
            console.log(data);
        });
    }
};
ActsComponent = tslib_1.__decorate([
    Component({
        selector: 'app-Acts',
        templateUrl: './Acts.component.html',
        styleUrls: ['./Acts.component.css']
    })
], ActsComponent);
export { ActsComponent };
//# sourceMappingURL=Acts.component.js.map