import * as tslib_1 from "tslib";
import { Injectable } from "@angular/core";
import { finalize } from "rxjs/operators";
let LoaderInterceptor = class LoaderInterceptor {
    constructor(loaderService) {
        this.loaderService = loaderService;
    }
    intercept(req, next) {
        this.loaderService.show();
        return next.handle(req).pipe(finalize(() => this.loaderService.hide()));
    }
};
LoaderInterceptor = tslib_1.__decorate([
    Injectable()
], LoaderInterceptor);
export { LoaderInterceptor };
//# sourceMappingURL=loaderInterceptor.js.map