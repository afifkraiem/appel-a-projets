import * as tslib_1 from "tslib";
import { Component, Input } from '@angular/core';
let AffectationExpertsComponent = class AffectationExpertsComponent {
    constructor(candservice, userservice, router, tokenservice) {
        this.candservice = candservice;
        this.userservice = userservice;
        this.router = router;
        this.tokenservice = tokenservice;
        this.idExperts = [];
    }
    ngOnInit() {
        this.getAllCands();
        this.getExperts();
    }
    /* obtenir la liste de candidatures consolidées **/
    getAllCands() {
        return this.candservice.getCandidatures().subscribe(data => {
            this.candidatures = [];
            console.log(data);
            console.log(this.candidatures);
            data.forEach(cand => {
                if (cand.statut == '2' || cand.statut == '3') {
                    this.candidatures.push(cand);
                }
            });
            console.log(this.candidatures);
        });
    }
    /* obtenir la liste des experts cneuf**/
    getExperts() {
        this.userservice.getExpert().subscribe((response) => {
            this.experts = response.users;
        }, (error) => {
            this.tokenservice.getSIUToken();
            this.getExperts();
        });
    }
    /* obtenir le nom de l'expert **/
    getexpertName(id) {
        this.userservice.getOneUser(id).subscribe((response) => {
            return response.users[0].nom;
        }, (error) => {
            this.tokenservice.getSIUToken();
            this.getexpertName(id);
        });
    }
    /* affectation d'un expert **/
    assignExpert(ide, idc) {
        this.userservice.assignExpert(ide, idc).subscribe(data => {
            alert('projet assigné au expert avec succès');
            this.getAllCands();
        });
    }
    getAssignedExperts(id) {
        let candidature;
        this.idExperts = [];
        this.candservice.getCandById(id).subscribe(data => {
            candidature = data;
            candidature.Evaluation.forEach(ev => {
                this.idExperts.push(ev.idExpert);
            });
        });
    }
    verifyExp(id) {
        if (this.idExperts.includes(id)) {
            return true;
        }
    }
};
tslib_1.__decorate([
    Input()
], AffectationExpertsComponent.prototype, "searchString", void 0);
AffectationExpertsComponent = tslib_1.__decorate([
    Component({
        selector: 'app-affectation-experts',
        templateUrl: './affectation-experts.component.html',
        styleUrls: ['./affectation-experts.component.css']
    })
], AffectationExpertsComponent);
export { AffectationExpertsComponent };
//# sourceMappingURL=affectation-experts.component.js.map