import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Spinkit } from 'ng-http-loader';
let AppComponent = class AppComponent {
    constructor(http) {
        this.http = http;
        this.title = 'cneuf';
        this.spinkit = Spinkit;
    }
    ngOnInit() {
    }
};
AppComponent = tslib_1.__decorate([
    Component({
        selector: 'app-root',
        templateUrl: './app.component.html',
        styleUrls: ['./app.component.css']
    })
], AppComponent);
export { AppComponent };
//# sourceMappingURL=app.component.js.map