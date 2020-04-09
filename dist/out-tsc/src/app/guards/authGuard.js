import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
let AuthGuard = class AuthGuard {
    constructor(router, tokenStorage, toast) {
        this.router = router;
        this.tokenStorage = tokenStorage;
        this.toast = toast;
    }
    canActivate() {
        if (!this.tokenStorage.SIUTokenExpiration()) {
            return true;
        }
        this.toast.info('Votre session est expirée, vous devez vous connecter', 'Session expirée');
        this.tokenStorage.signOut();
        window.location.href = 'https://auth-b2c.auf.org/auth/?authorize&client_id=11_5x39q6e96s080cogggk4wos0gcsksoogcs0g80kkgsws0g0oow&return_url=https%3A%2F%2Fcneuf-test-pipeline-wise-oryx.eu-de.mybluemix.net%2F%23%2FsignIn';
        return false;
    }
};
AuthGuard = tslib_1.__decorate([
    Injectable()
], AuthGuard);
export { AuthGuard };
//# sourceMappingURL=authGuard.js.map