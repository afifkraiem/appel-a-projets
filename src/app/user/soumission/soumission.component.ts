import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl, FormArray } from '@angular/forms';
import { CandidatureService } from '../../services/candidature.service';
import { Router } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';
import { HttpClient, HttpEvent, HttpEventType } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-soumission',
  templateUrl: './soumission.component.html',
  styleUrls: ['./soumission.component.css']
})
export class SoumissionComponent implements OnInit {

  form: FormGroup;
  username: any;
  parts: any [];
  listAcad: any [] ;
  listImpl: any ;
  selected = [];
  public besoins = ['Rénovation','Immobilier','Connectivité','Plateau technique']
  
  
  
  constructor(private fb: FormBuilder,  private candservice: CandidatureService,
     private router: Router, private http: HttpClient, private sanitizer: DomSanitizer, private toast: ToastrService) {
  
      }
      ngOnInit() {
        this.form = this.fb.group({
          nom_projet: ['', Validators.required],
          presentation: ['', Validators.required],
          nom_porteur_projet: ['', Validators.required],
          date_debut: ['', Validators.required],
          direction_reg: ['', Validators.required],
          duree: ['', Validators.required],
          besoin: '',
          montant_global: ['', Validators.required],
          devise: '',
          montant_auf: ['', Validators.required],
          objectif: ['', [ Validators.maxLength(1500)]],
          cadre_logic: null,
          description: '',
          localisation: '',
          locaux: '',
          plan_amenagement: null,
          stratg_comm: '',
          stratg_perren: '',
          gouvernance: '',
          org_opera: '',
          partenaireAcad: this.fb.array([]),
          partenaireSe: this.fb.array([]),
          partenaireAutre: this.fb.array([]),
          implantations: this.fb.array([]),
          recettePartAcad: this.fb.array([]),
          recettePartSe: this.fb.array([]),
          recettePartAutre: this.fb.array([]),
          recetteAUF: this.fb.group ({
            afa1: new FormControl(''),
            cafa1: new FormControl(''),
            afa2: new FormControl(''),
            cafa2: new FormControl(''),
            afa3: new FormControl(''),
            cafa3: new FormControl(''),
            afa4: new FormControl(''),
            cafa4: new FormControl(''),
            aia1: new FormControl(''),
            caia1: new FormControl(''),
            aia2: new FormControl(''),
            caia2: new FormControl(''),
            aia3: new FormControl(''),
            caia3: new FormControl(''),
            aia4: new FormControl(''),
            caia4: new FormControl(''),
            apa1: new FormControl(''),
            capa1: new FormControl(''),
            apa2: new FormControl(''),
            capa2: new FormControl(''),
            apa3: new FormControl(''),
            capa3: new FormControl(''),
            apa4: new FormControl(''),
            capa4: new FormControl(''),
            }),
            depences: this.fb.group({
              d_fct_a1: '',
              d_fct_a2: '',
              d_fct_a3: '',
              d_fct_a4: '',
              d_invest_a1: '',
              d_invest_a2: '',
              d_invest_a3: '',
              d_invest_a4: '',
              d_perso_a1: '',
              d_perso_a2: '',
              d_perso_a3: '',
              d_perso_a4: '',
              m_d_fct_a1: '',
              m_d_fct_a2: '',
              m_d_fct_a3: '',
              m_d_fct_a4: '',
              m_d_invest_a1: '',
              m_d_invest_a2: '',
              m_d_invest_a3: '',
              m_d_invest_a4: '',
              m_d_perso_a1: '',
              m_d_perso_a2: '',
              m_d_perso_a3: '',
              m_d_perso_a4: ''
  
            }),
            budget_prev: null,
            charte_qualite: null
        });
  
        this.getListAcad();
        this.getListImpl();
      }
  
      getListAcad() {
        return this.candservice.getListAcad().subscribe( data => {
          this.listAcad = data;
  
        });
      }
  
      getListImpl() {
        return this.candservice.getListImpl().subscribe( data => {
          this.listImpl = data;
        });
      }
  
  
      uploadFile(event: any, element: HTMLElement) {
    if (event.target.files && event.target.files.length > 0) {
      let file = event.target.files[0];
      console.log(file);
      this.candservice.UploadFile(file).subscribe(data => {
        console.log(data);
        this.form.get(element.getAttribute('name')).setValue(data);
        this.toast.success('fichier uploadé avec succès', 'Upload du fichier', {progressBar: true});
      });
    }
  
      }
      
      uplettreAcad(event: any, i: number) {
     if (event.target.files && event.target.files.length > 0) {
       let file = event.target.files[0];
       this.candservice.UploadFile(file).subscribe(data => {

        (<FormArray>(this.form.controls.partenaireAcad)).at(i).get('lettre').setValue( data);
        this.toast.success('fichier uploadé avec succès', 'Upload du fichier', {progressBar: true});

       });
         
       
  
     } }
  
     uplettreSe(event: any, i: number) {
   if (event.target.files && event.target.files.length > 0) {
     let file = event.target.files[0];
     this.candservice.UploadFile(file).subscribe(data => {

      (<FormArray>(this.form.controls.partenaireSe)).at(i).get('lettre').setValue( data);
      this.toast.success('fichier uploadé avec succès', 'Upload du fichier', {progressBar: true});

     });
   }
    }
    uplettreAut(event: any, i: number ) {
   if (event.target.files && event.target.files.length > 0) {
     let file = event.target.files[0];
     this.candservice.UploadFile(file).subscribe(data => {

      (<FormArray>(this.form.controls.partenaireAutre)).at(i).get('lettre').setValue( data);
      this.toast.success('fichier uploadé avec succès', 'Upload du fichier', {progressBar: true});

     });
   }
    }
  
    uplettreImpl(event: any, i: number ) {
   if (event.target.files && event.target.files.length > 0) {
     let file = event.target.files[0];
     this.candservice.UploadFile(file).subscribe(data => {

      (<FormArray>(this.form.controls.implantations)).at(i).get('lettre').setValue( data);
      this.toast.success('fichier uploadé avec succès', 'Upload du fichier', {progressBar: true});

     });
   }
    }
  
  
  
      createinst() {
        return this.fb.group ({
        fpa1: '',
        cfpa1: '',
        fpa2: '',
        cfpa2: '',
        fpa3: '',
        cfpa3: '',
        fpa4: '',
        cfpa4: '',
        ipa1: '',
        cipa1: '',
        ipa2: '',
        cipa2: '',
        ipa3: '',
        cipa3: '',
        ipa4: '',
        cipa4: '',
        ppa1: '',
        cppa1: '',
        ppa2: '',
        cppa2: '',
        ppa3: '',
        cppa3: '',
        ppa4: '',
        cppa4: '',
        });
        }
  
      createPart() {
        return this.fb.group({
          institution: '',
          nom: '',
          lettre: '' ,
          fonction: '',
          email: '',
          ville: '',
          pays: '',
          url: '',
        });
      }
      createRecAcad() {
        return this.fb.group ({
            
            faa1: '',
            faa2: '',
            faa3: '',
            faa4: '',
            iaa1: '',
            iaa2: '',
            iaa3: '',
            iaa4: '',
            paa1: '',
            paa2: '',
            paa3: '',
            paa4: '',
            cfaa1: '',
            cfaa2: '',
            cfaa3: '',
            cfaa4: '',
            ciaa1: '',
            ciaa2: '',
            ciaa3: '',
            ciaa4: '',
            cpaa1: '',
            cpaa2: '',
            cpaa3: '',
            cpaa4: ''
  
        });
      }
      createRecSe() {
        return this.fb.group ({
          fsa1: '',
          fsa2: '',
          fsa3: '',
          fsa4: '',
          isa1: '',
          isa2: '',
          isa3: '',
          isa4: '',
          psa1: '',
          psa2: '',
          psa3: '',
          psa4: '',
          cfsa1: '',
          cfsa2: '',
          cfsa3: '',
          cfsa4: '',
          cisa1: '',
          cisa2: '',
          cisa3: '',
          cisa4: '',
          cpsa1: '',
          cpsa2: '',
          cpsa3: '',
          cpsa4: ''
        });
      }
      createRecAut() {
        return this.fb.group ({
          fta1: '',
          fta2: '',
          fta3: '',
          fta4: '',
          ita1: '',
          ita2: '',
          ita3: '',
          ita4: '',
          pta1: '',
          pta2: '',
          pta3: '',
          pta4: '',
          cfta1: '',
          cfta2: '',
          cfta3: '',
          cfta4: '',
          cita1: '',
          cita2: '',
          cita3: '',
          cita4: '',
          cpta1: '',
          cpta2: '',
          cpta3: '',
          cpta4: ''
  
  
  
        });
      }
      get acadForms() {
        return this.form.get('partenaireAcad') as FormArray;
      }
      get recAcad() {
        return this.form.get('recettePartAcad') as FormArray;
      }
      get recSe() {
        return this.form.get('recettePartSe') as FormArray;
      }
      get recAut() {
        return this.form.get('recettePartAutre') as FormArray;
      }
  
      addParts() {
      const acad = <FormArray>this.form.controls.partenaireAcad as FormArray;
        acad.push(this.createPart() );
  
        const part = <FormArray>this.form.controls.recettePartAcad as FormArray;
        part.push(this.createRecAcad());
      }
  
    removePart(index) {
      this.acadForms.removeAt(index);
      this.recAcad.removeAt(index);
    }
  
    get ecoForms() {
      return this.form.get('partenaireSe') as FormArray;
    }
  
    addEco() {
    const eco = <FormArray>this.form.controls.partenaireSe as FormArray;
      eco.push(this.createPart());
      const part = <FormArray>this.form.controls.recettePartSe as FormArray;
      part.push(this.createRecSe() );
  }
  
  removeEco(index) {
    this.ecoForms.removeAt(index);
    this.recSe.removeAt(index);
  }
  get autForms() {
    return this.form.get('partenaireAutre') as FormArray;
  }
  
  addAut() {
  const aut = <FormArray>this.form.controls.partenaireAutre as FormArray;
    aut.push(this.createPart());
    const part = <FormArray>this.form.controls.recettePartAutre as FormArray;
        part.push(this.createRecAut() );
  }
  removeAut(index) {
  this.autForms.removeAt(index);
  this.recAut.removeAt(index);
  }
  
  get implForms() {
    return this.form.get('implantations') as FormArray;
  }
  
  addImpl() {
  const impl = <FormArray>this.form.controls.implantations as FormArray;
    impl.push(this.createPart());
    const part = <FormArray>this.form.controls.partenaires as FormArray;
      part.push(this.createinst() );
  
  }
  removeImpl(index) {
  this.implForms.removeAt(index);
  }
  
  Soumettre() {
  
    this.candservice.saveCand(this.form.value).subscribe( (data) => {
      this.toast.success('Votre candidature a été soumise avec succès');
      this.router.navigate(['user/MesCandidatures']);
    });
  
  }
  
  
    Enregistrer() {
      this.candservice.saveCandBr(this.form.value).subscribe(data => {
        this.toast.success('candidature enregistrée en brouillon avec succès', 'Enregistrement en brouillon');
        this.router.navigate(['user/MesCandidatures']);
      }
        
      );
     
    }
    onchange(isChecked: boolean, besoin: string) {
   
      if(isChecked) {
          this.selected.push(besoin); 
          console.log(this.selected);
               } 
          else {
          let index = this.selected.indexOf(besoin);
          this.selected.splice(index,1);
        }
     console.log(this.selected.toString())
      this.form.controls.besoin.setValue(this.selected.toString());
    }
  
}
