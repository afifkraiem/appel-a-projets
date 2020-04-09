import * as tslib_1 from "tslib";
import { Component, Input } from '@angular/core';
import { Subject } from 'rxjs';
let GestionCampagnesComponent = class GestionCampagnesComponent {
    constructor(router, candservice, fb) {
        this.router = router;
        this.candservice = candservice;
        this.fb = fb;
        this.selectedCamp = false;
        this.isActive = true;
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
            "lengthMenu": "Afficher _MENU_ campagnes",
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
        this.form = this.fb.group({
            nomcomp: '',
            date_debut: '',
            date_cloture: ''
        });
        this.getAllCampagnes();
        this.dtOptions = {
            pagingType: 'full_numbers',
            pageLength: 3,
            language: this.lang,
            destroy: true
        };
    }
    /** méthode pour changer l'état de campagne en cloturée */
    Cloture(id) {
        this.candservice.ClotureCamp(id).subscribe(data => {
            alert('campagne cloturée avec succès!');
            this.getAllCampagnes();
        });
    }
    /** charger la liste de toutes les campagnes */
    getAllCampagnes() {
        this.camp = [];
        this.candservice.getAllCamp().subscribe((data) => {
            console.log(data);
            this.camp = data;
            data.forEach((camp) => {
                if (camp.etat == 'active') {
                    this.isActive = false;
                }
            });
        });
        this.dtTrigger.next();
    }
    /** sauvegarde du formulaire d'ajout d'une nouvelle campagne */
    envoyer(form) {
        return this.candservice.saveCamp(form.value).subscribe(data => {
            alert('nouvelle campagne enregistrée avec succès !');
            console.log(form.value);
            this.getAllCampagnes();
        });
    }
    /** chargement de la liste de candidatures pour une campagne sélectionnée */
    getCneufByCamp(id, nomCamp) {
        console.log(nomCamp);
        this.nomSelectedCamp = nomCamp;
        this.selectedCamp = true;
        this.candservice.getCneufByCamp(id).subscribe(data => {
            this.candidatures = data;
        });
    }
    ngOnDestroy() {
        // Do not forget to unsubscribe the event
        this.dtTrigger.unsubscribe();
    }
};
tslib_1.__decorate([
    Input()
], GestionCampagnesComponent.prototype, "searchString", void 0);
GestionCampagnesComponent = tslib_1.__decorate([
    Component({
        selector: 'app-gestion-campagnes',
        templateUrl: './gestion-campagnes.component.html',
        styleUrls: ['./gestion-campagnes.component.css']
    })
], GestionCampagnesComponent);
export { GestionCampagnesComponent };
//# sourceMappingURL=gestion-campagnes.component.js.map