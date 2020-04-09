import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
let LoaderComponent = class LoaderComponent {
    constructor(loaderService) {
        this.loaderService = loaderService;
        this.isLoading = this.loaderService.isLoading;
    }
    ngOnInit() {
    }
};
LoaderComponent = tslib_1.__decorate([
    Component({
        selector: 'app-loader',
        templateUrl: './loader.component.html',
        styleUrls: ['./loader.component.css']
    })
], LoaderComponent);
export { LoaderComponent };
//# sourceMappingURL=loader.component.js.map