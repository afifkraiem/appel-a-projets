import * as tslib_1 from "tslib";
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { PublicComponent } from './public/public.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { UserComponent } from './user/user.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { httpInterceptorProviders, AuthInterceptor } from './Auth/auth-interceptor';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { GestionCandidaturesComponent } from './admin/gestion-candidatures/gestion-candidatures.component';
import { GestionCampagnesComponent } from './admin/gestion-campagnes/gestion-campagnes.component';
import { GestionEvaluationsComponent } from './admin/gestion-evaluations/gestion-evaluations.component';
import { GestionDeliberationsComponent } from './admin/gestion-deliberations/gestion-deliberations.component';
import { GestionUsersComponent } from './admin/gestion-users/gestion-users.component';
import { ActsComponent } from './public/Acts/Acts.component';
import { AppelComponent } from './public/appel/appel.component';
import { CartographieComponent } from './public/Cartographie/Cartographie.component';
import { DescriptifComponent } from './public/Descriptif/Descriptif.component';
import { DashboardAdminComponent } from './admin/dashboard-admin/dashboard-admin.component';
import { NgHttpLoaderModule } from 'ng-http-loader';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { FilterPipe } from './pipes/filter.pipe';
import { SafePipe } from './pipes/safe.pipe';
import { DetailsCandidatureComponent } from './details-candidature/details-candidature.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SplitterPipe } from './pipes/splitter.pipe';
import { MesCandidaturesComponent } from './user/mes-candidatures/mes-candidatures.component';
import { SuiviCneufComponent } from './user/suivi-cneuf/suivi-cneuf.component';
import { SoumissionComponent } from './user/soumission/soumission.component';
import { TabDeBordComponent } from './user/tab-de-bord/tab-de-bord.component';
import { MesEvaluationsComponent } from './user/mes-evaluations/mes-evaluations.component';
import { GestionActualitesComponent } from './gestion-actualites/gestion-actualites.component';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AffectationExpertsComponent } from './admin/affectation-experts/affectation-experts.component';
import { ChartsModule } from 'ng2-charts';
import { DataTablesModule } from 'angular-datatables';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EditCandidatureComponent } from './user/edit-candidature/edit-candidature.component';
import { AuthGuard } from './guards/authGuard';
import { TokenStorageService } from './Auth/token-storage.service';
import { LoaderComponent } from './loader/loader.component';
import { LoaderService } from './services/loader.service';
import { LoaderInterceptor } from './Auth/loaderInterceptor';
import { AvatarModule } from 'ngx-avatar';
import { SuiviCneufsComponent } from './admin/suivi-cneufs/suivi-cneufs.component';
let AppModule = class AppModule {
};
AppModule = tslib_1.__decorate([
    NgModule({
        declarations: [AppComponent,
            AdminComponent,
            FooterComponent,
            HeaderComponent,
            HomeComponent,
            PublicComponent,
            SidebarComponent,
            UserComponent,
            SignInComponent,
            GestionCandidaturesComponent,
            GestionCampagnesComponent,
            GestionEvaluationsComponent,
            ActsComponent,
            GestionDeliberationsComponent,
            GestionUsersComponent,
            AppelComponent,
            CartographieComponent,
            DescriptifComponent,
            DashboardAdminComponent,
            FilterPipe,
            SafePipe,
            DetailsCandidatureComponent,
            PageNotFoundComponent,
            SplitterPipe,
            MesCandidaturesComponent,
            SoumissionComponent,
            SuiviCneufComponent,
            TabDeBordComponent,
            MesEvaluationsComponent,
            GestionActualitesComponent,
            AffectationExpertsComponent,
            EditCandidatureComponent,
            LoaderComponent,
            SuiviCneufsComponent
        ],
        imports: [BrowserModule,
            AppRoutingModule,
            HttpClientModule,
            FormsModule,
            ReactiveFormsModule,
            NgSelectModule,
            NgHttpLoaderModule.forRoot(),
            CKEditorModule,
            NgbModule,
            ChartsModule,
            DataTablesModule,
            ToastrModule.forRoot({
                timeOut: 2000,
                positionClass: 'toast-top-center',
            }),
            BrowserAnimationsModule,
            AvatarModule
        ],
        providers: [httpInterceptorProviders,
            AuthInterceptor,
            TokenStorageService, AuthGuard, LoaderService,
            { provide: HTTP_INTERCEPTORS, useClass: LoaderInterceptor, multi: true }],
        bootstrap: [AppComponent]
    })
], AppModule);
export { AppModule };
//# sourceMappingURL=app.module.js.map