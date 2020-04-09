import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import * as fileSaver from 'file-saver';
let DetailsCandidatureComponent = class DetailsCandidatureComponent {
    constructor(route, candservice, sanitizer, router, userservice, _location, fb, tokenservice) {
        this.route = route;
        this.candservice = candservice;
        this.sanitizer = sanitizer;
        this.router = router;
        this.userservice = userservice;
        this._location = _location;
        this.fb = fb;
        this.tokenservice = tokenservice;
        this.userRole = localStorage.getItem('role');
        this.userid = localStorage.getItem('id');
        this.cand = {};
        this.experts = [];
    }
    ngOnInit() {
        this.id = this.route.snapshot.paramMap.get('id');
        this.showCand();
        this.getEmailPorteur();
        this.form = this.fb.group({
            n1: '',
            n2: '',
            n3: '',
            n4: '',
            n5: '',
            n6: '',
            n7: '',
            commentaire: ''
        });
    }
    showCand() {
        this.candservice.getCandById(this.id).subscribe((data => {
            this.cand = data;
            console.log(data);
            this.totdepa1 = parseInt(this.cand.Depences[0].m_d_fct_a1, 10) + parseInt(this.cand.Depences[0].m_d_fct_a1, 10) + parseInt(this.cand.Depences[0].m_d_fct_a1, 10) + parseInt(this.cand.Depences[0].m_d_fct_a1, 10);
            this.totdepa2 = parseInt(this.cand.Depences[0].m_d_fct_a2, 10) + parseInt(this.cand.Depences[0].m_d_fct_a2, 10) + parseInt(this.cand.Depences[0].m_d_fct_a2, 10) + parseInt(this.cand.Depences[0].m_d_fct_a2, 10);
            this.totdepa3 = parseInt(this.cand.Depences[0].m_d_fct_a3, 10) + parseInt(this.cand.Depences[0].m_d_fct_a3, 10) + parseInt(this.cand.Depences[0].m_d_fct_a3, 10) + parseInt(this.cand.Depences[0].m_d_fct_a3, 10);
            this.totdepa4 = parseInt(this.cand.Depences[0].m_d_fct_a4, 10) + parseInt(this.cand.Depences[0].m_d_fct_a4, 10) + parseInt(this.cand.Depences[0].m_d_fct_a4, 10) + parseInt(this.cand.Depences[0].m_d_fct_a4, 10);
        }));
    }
    print() {
        window.print();
    }
    Consolider(id) {
        this.candservice.Consolider(id, this.emailPorteur).subscribe((data => {
            alert('Candidature consolidée avec succès! ');
            this.router.navigate(['admin/Candidatures']);
        }));
    }
    retourBr(comm) {
        this.candservice.enBrouillon(this.id, comm, this.emailPorteur).subscribe((data => {
            alert('Candidature remise en état brouillon avec succès! ');
            this.router.navigate(['admin/Candidatures']);
        }));
    }
    goBack() {
        this._location.back();
    }
    getEmailPorteur() {
        this.userservice.getOneUser(this.cand.user_id).subscribe((response) => {
            this.emailPorteur = response.users[0].email;
            console.log(this.emailPorteur);
        }, (error) => {
            this.tokenservice.getSIUToken();
            this.getEmailPorteur();
        });
    }
    DownloadFile(fileName) {
        this.candservice.DownloadFile(fileName).subscribe(data => {
            console.log(data);
            let blob = new Blob([data], { type: data.type });
            fileSaver.saveAs(blob, fileName);
        });
    }
    evaluer(id, form) {
        console.log(this.form.value);
        this.candservice.saveEval(id, form.value).subscribe(data => {
            alert('Evaluation envoyée avec succès !');
            this.router.navigate(['user/MesCandidatures']);
        });
    }
};
DetailsCandidatureComponent = tslib_1.__decorate([
    Component({
        selector: 'app-details-candidature',
        templateUrl: './details-candidature.component.html',
        styleUrls: ['./details-candidature.component.css']
    })
], DetailsCandidatureComponent);
export { DetailsCandidatureComponent };
//# sourceMappingURL=details-candidature.component.js.map