import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
let SignInComponent = class SignInComponent {
    constructor(tokenStorage, router, route, http) {
        this.tokenStorage = tokenStorage;
        this.router = router;
        this.route = route;
        this.http = http;
        this.form = {};
        this.isLoginFailed = false;
    }
    ngOnInit() {
        const tt = this.tokenStorage.getParameterByName('idtoken');
        console.log(tt);
        localStorage.setItem('auth', tt);
        const helper = new JwtHelperService();
        const decoded = helper.decodeToken(tt);
        console.log(decoded);
        this.username = decoded.lastname;
        localStorage.setItem('username', decoded.lastname);
        localStorage.setItem('email', decoded.emails);
        this.getAccessToken();
        setTimeout(() => {
            this.router.navigate(['/home']);
        }, 2000);
    }
    getAccessToken() {
        return this.http.get('https://test-usagers.auf.org/oauth/v2/token?grant_type=client_credentials&client_id=11_5x39q6e96s080cogggk4wos0gcsksoogcs0g80kkgsws0g0oow&client_secret=2nlgtq1qxsg0wk4gg4okw80gscg0g4sg8kk8sgo4sockg0ckwo').subscribe(data => {
            console.log(data);
            localStorage.setItem('access', data.access_token);
            const access = localStorage.getItem('access');
            const email = localStorage.getItem('email');
            return this.http.get('https://test-usagers.auf.org/api/user/all.json?access_token=' + access + '&email=' + email).subscribe((response) => {
                console.log(response);
                response.users.forEach(user => {
                    localStorage.setItem('id', user.id);
                    user.role.forEach(role => {
                        console.log(role);
                        localStorage.setItem('role', role);
                    });
                    localStorage.setItem('prenom', user.firstname);
                    localStorage.setItem('nom', user.lastname);
                });
            }, (error) => {
                this.getAccessToken();
            });
        });
    }
};
SignInComponent = tslib_1.__decorate([
    Component({
        selector: 'app-sign-in',
        templateUrl: './sign-in.component.html',
        styleUrls: ['./sign-in.component.css']
    })
], SignInComponent);
export { SignInComponent };
//# sourceMappingURL=sign-in.component.js.map