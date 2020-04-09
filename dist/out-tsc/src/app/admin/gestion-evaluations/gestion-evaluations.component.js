import * as tslib_1 from "tslib";
import { Component, Input } from '@angular/core';
import { Subject } from 'rxjs';
let GestionEvaluationsComponent = class GestionEvaluationsComponent {
    constructor(candservice, userservice, router, tokenservice) {
        this.candservice = candservice;
        this.userservice = userservice;
        this.router = router;
        this.tokenservice = tokenservice;
        this.dtOptions = {};
        this.dtTrigger = new Subject();
        this.lang = {
            "decimal": "",
            "emptyTable": "Aucun élément trouvé",
            "info": "Affichage de _START_ à _END_ parmis _TOTAL_  campagnes",
            "infoEmpty": "Affichage  0 to 0 of 0 entries",
            "infoFiltered": "(filtered from _MAX_ total entries)",
            "infoPostFix": "",
            "thousands": ",",
            "lengthMenu": "Afficher _MENU_ candidatures",
            "loadingRecords": "Chargement...",
            "processing": "Processing...",
            "search": "Recherche:",
            "zeroRecords": "Aucun élément trouvé",
            "paginate": {
                "first": "Première page",
                "last": "Dernière page",
                "next": "Page suivante",
                "previous": "Page précédente"
            },
            "aria": {
                "sortAscending": ": activate to sort column ascending",
                "sortDescending": ": activate to sort column descending"
            }
        };
    }
    ngOnInit() {
        this.getAllCands();
        this.getExperts();
        this.getAllcamp();
        this.dtOptions = {
            pagingType: 'full_numbers',
            pageLength: 3,
            language: this.lang
        };
    }
    getAllCands() {
        return this.candservice.getCandidatures().subscribe(data => {
            this.candidatures = [];
            data.forEach(cand => {
                if (cand.Evaluation.length > 0) {
                    this.candidatures.push(cand);
                }
            });
            this.dtTrigger.next();
            console.log(this.candidatures);
        });
    }
    getAllcamp() {
        this.Campagnes = [];
        this.candservice.getAllCamp().subscribe(data => {
            console.log(data);
            this.Campagnes = data;
        });
    }
    getEvals(id) {
        this.evals = [];
        this.candservice.getEvalByCneufId(id).subscribe(data => {
            this.evals = data;
            console.log(data);
            this.idcand = id;
        });
    }
    valider() {
        this.candservice.valider(this.idcand).subscribe(data => {
            alert('Projet validé avec succès');
        });
    }
    Rejeter() {
        this.candservice.Rejeter(this.idcand).subscribe(data => {
            alert('Projet rejeté avec succès');
        });
    }
    getExperts() {
        this.userservice.getExpert().subscribe((response) => {
            this.experts = response.users;
        }, (erro) => {
            this.tokenservice.getSIUToken();
            this.getExperts();
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
    getexpertName(id) {
        this.userservice.getOneUser(id).subscribe((response) => {
            return response.users[0].nom;
        }, (error) => {
            this.tokenservice.getSIUToken();
            this.getexpertName(id);
        });
    }
};
tslib_1.__decorate([
    Input()
], GestionEvaluationsComponent.prototype, "searchString", void 0);
GestionEvaluationsComponent = tslib_1.__decorate([
    Component({
        selector: 'app-gestion-evaluations',
        templateUrl: './gestion-evaluations.component.html',
        styleUrls: ['./gestion-evaluations.component.css']
    })
], GestionEvaluationsComponent);
export { GestionEvaluationsComponent };
//# sourceMappingURL=gestion-evaluations.component.js.map