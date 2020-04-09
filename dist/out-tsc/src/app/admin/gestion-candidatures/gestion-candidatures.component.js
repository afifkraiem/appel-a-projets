import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Subject } from 'rxjs';
let GestionCandidaturesComponent = class GestionCandidaturesComponent {
    constructor(candservice, userservice) {
        this.candservice = candservice;
        this.userservice = userservice;
        this.dtOptions = {};
        this.dtTrigger = new Subject();
        this.lang = {
            "decimal": "",
            "emptyTable": "Aucun élément trouvé",
            "info": "Affichage de _START_ à _END_ parmis _TOTAL_  candidatures",
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
        this.getAllcamp();
        this.dtOptions = {
            pagingType: 'full_numbers',
            pageLength: 3,
            language: this.lang,
            stateSave: true,
            destroy: true
        };
    }
    /** charger la liste de toutes les candidatures */
    getAllCands() {
        this.candidatures = [];
        return this.candservice.getCandidatures().subscribe((data) => {
            this.candidatures = data;
            this.dtTrigger.next();
        });
    }
    /** charger la liste de toutes les campagnes */
    getAllcamp() {
        this.Campagnes = [];
        this.candservice.getAllCamp().subscribe(data => {
            console.log(data);
            this.Campagnes = data;
        });
    }
    getEvals(id) {
        this.candservice.getEvalByCneufId(id).subscribe(data => {
            this.evals = data;
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
    /** obtenir l'élement sélectionné */
    onSelect($event) {
        this.getCneufByCamp($event);
    }
    /** charger liste de candidatures pour une ou plusieurs campagnes séléctionnées */
    getCneufByCamp(id) {
        this.candservice.getCneufByCamp(id).subscribe(data => {
            console.log(data);
            this.candidatures = data;
            this.dtTrigger.next();
        });
    }
    ngOnDestroy() {
        // Do not forget to unsubscribe the event
        this.dtTrigger.unsubscribe();
    }
};
GestionCandidaturesComponent = tslib_1.__decorate([
    Component({
        selector: 'app-gestion-candidatures',
        templateUrl: './gestion-candidatures.component.html',
        styleUrls: ['./gestion-candidatures.component.css']
    })
], GestionCandidaturesComponent);
export { GestionCandidaturesComponent };
//# sourceMappingURL=gestion-candidatures.component.js.map