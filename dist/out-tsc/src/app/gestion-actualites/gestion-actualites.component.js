import * as tslib_1 from "tslib";
import { Component, ViewChild } from '@angular/core';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
let GestionActualitesComponent = class GestionActualitesComponent {
    constructor(actservice, candservice, fb) {
        this.actservice = actservice;
        this.candservice = candservice;
        this.fb = fb;
        this.acts = [];
        this.cands = [];
        this.selectedAct = {
            id: null,
            titre: '',
            cathegory: '',
            intro: '',
            image: null,
            discription: '',
            cneufs: []
        };
        this.Editor = ClassicEditor;
        this.model = {
            editorData: ''
        };
    }
    ngOnInit() {
        this.getCandsByUserId();
        $("#menu-toggle").click(function (e) {
            e.preventDefault();
            $("#wrapper").toggleClass("active");
        });
        this.form = this.fb.group({
            titre: '',
            cathegory: '',
            intro: '',
            image: null,
            discription: '',
            cneufs: []
        });
    }
    getCandsByUserId() {
        return this.candservice.getCandByUserId().subscribe(data => {
            this.cands = data;
        });
    }
    showActs($event) {
        return this.actservice.getActualiteByCneufId($event).subscribe(data => {
            this.acts = data;
        });
    }
    deleteAct(id, index) {
        return this.actservice.deleteAct(id).subscribe(data => {
            this.acts.splice(index, 1);
        });
    }
    upImage(event) {
        let reader = new FileReader();
        if (event.target.files && event.target.files.length > 0) {
            let file = event.target.files[0];
            reader.readAsDataURL(file);
            reader.onload = () => {
                this.form.get('image').setValue(reader.result);
            };
        }
    }
    envoyer(form) {
        console.log(form.value);
        this.actservice.saveAct(form.value).subscribe(data => {
            alert('Actualité ajoutée avec succès !');
        });
    }
    getSelectedAct(act) {
        console.log(act);
        this.actservice.getActualiteById(act).subscribe(data => {
            this.selectedAct = data;
            console.log(this.selectedAct);
        });
    }
    getAct(id) {
        return this.actservice.getActualiteById(id).subscribe(data => {
            this.form.patchValue(data);
            this.selectedAct = data;
            this.selectedAct.cneufs.forEach(cneuf => {
                this.form.get('cneufs').setValue([cneuf.id]);
            });
        });
    }
    updateAct(form) {
        return this.actservice.updateAct(form.value, this.selectedAct.id).subscribe(data => {
            alert('Actualité modifiée avec succès !');
        });
    }
};
tslib_1.__decorate([
    ViewChild('image', { static: true })
], GestionActualitesComponent.prototype, "cadInput", void 0);
GestionActualitesComponent = tslib_1.__decorate([
    Component({
        selector: 'app-gestion-actualites',
        templateUrl: './gestion-actualites.component.html',
        styleUrls: ['./gestion-actualites.component.css']
    })
], GestionActualitesComponent);
export { GestionActualitesComponent };
//# sourceMappingURL=gestion-actualites.component.js.map