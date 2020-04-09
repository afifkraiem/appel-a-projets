import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
let AppelComponent = class AppelComponent {
    constructor(actservice, route, router) {
        this.actservice = actservice;
        this.route = route;
        this.router = router;
    }
    ngOnInit() {
        this.id = this.route.snapshot.paramMap.get('id');
        console.log(this.id);
        this.actservice.getActualiteById(this.id).subscribe(data => {
            this.act = data;
            this.safe = this.getUrls(this.act.discription);
            var test_list = this.safe;
            var the_test_spliter = new RegExp('\n', "g");
            var the_test_array = test_list.split(the_test_spliter);
            this.text = the_test_array;
            console.log(this.text);
        });
    }
    navigate() {
        this.router.navigateByUrl('Actualités');
    }
    getUrls(text) {
        var urlRegex = /(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/ig;
        return text.replace(urlRegex, function (url) {
            return '<a href="' + url + '">' + url + '</a>';
        });
    }
};
AppelComponent = tslib_1.__decorate([
    Component({
        selector: 'app-appel',
        templateUrl: './appel.component.html',
        styleUrls: ['./appel.component.css']
    })
], AppelComponent);
export { AppelComponent };
//# sourceMappingURL=appel.component.js.map