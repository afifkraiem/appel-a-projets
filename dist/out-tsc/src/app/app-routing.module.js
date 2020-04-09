import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ActsComponent } from './public/Acts/Acts.component';
import { AppelComponent } from './public/appel/appel.component';
import { CartographieComponent } from './public/Cartographie/Cartographie.component';
import { DescriptifComponent } from './public/Descriptif/Descriptif.component';
import { AdminComponent } from './admin/admin.component';
import { GestionCandidaturesComponent } from './admin/gestion-candidatures/gestion-candidatures.component';
import { GestionCampagnesComponent } from './admin/gestion-campagnes/gestion-campagnes.component';
import { GestionEvaluationsComponent } from './admin/gestion-evaluations/gestion-evaluations.component';
import { GestionDeliberationsComponent } from './admin/gestion-deliberations/gestion-deliberations.component';
import { GestionUsersComponent } from './admin/gestion-users/gestion-users.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { DashboardAdminComponent } from './admin/dashboard-admin/dashboard-admin.component';
import { DetailsCandidatureComponent } from './details-candidature/details-candidature.component';
import { UserComponent } from './user/user.component';
import { MesCandidaturesComponent } from './user/mes-candidatures/mes-candidatures.component';
import { SoumissionComponent } from './user/soumission/soumission.component';
import { SuiviCneufComponent } from './user/suivi-cneuf/suivi-cneuf.component';
import { MesEvaluationsComponent } from './user/mes-evaluations/mes-evaluations.component';
import { TabDeBordComponent } from './user/tab-de-bord/tab-de-bord.component';
import { GestionActualitesComponent } from './gestion-actualites/gestion-actualites.component';
import { AffectationExpertsComponent } from './admin/affectation-experts/affectation-experts.component';
import { EditCandidatureComponent } from './user/edit-candidature/edit-candidature.component';
import { SuiviCneufsComponent } from './admin/suivi-cneufs/suivi-cneufs.component';
import { AuthGuard } from './guards/authGuard';
const routes = [
    { path: 'home', component: HomeComponent },
    { path: '', component: HomeComponent },
    { path: 'Actualités', component: ActsComponent },
    { path: 'Détail', component: AppelComponent },
    { path: 'Cartographie', component: CartographieComponent },
    { path: 'Modalités', component: DescriptifComponent },
    { path: 'Sidebar', component: SidebarComponent },
    { path: 'signIn', component: SignInComponent },
    { path: 'signIn?**', redirectTo: 'home' },
    { path: 'DetailsCandidature/:id', component: DetailsCandidatureComponent },
    { path: 'Actualités', component: ActsComponent },
    { path: 'appel/:id', component: AppelComponent },
    { path: 'admin', component: AdminComponent, children: [
            { path: 'dashboardAdmin', component: DashboardAdminComponent },
            { path: 'Candidatures', component: GestionCandidaturesComponent },
            { path: 'Campagnes', component: GestionCampagnesComponent },
            { path: 'Evaluations', component: GestionEvaluationsComponent },
            { path: 'Deliberations', component: GestionDeliberationsComponent },
            { path: 'GestionUsers', component: GestionUsersComponent },
            { path: 'GestionActualites', component: GestionActualitesComponent },
            { path: 'AffectationExpert', component: AffectationExpertsComponent },
            { path: 'SuiviCneufs', component: SuiviCneufsComponent }
        ], canActivate: [AuthGuard] },
    { path: 'user', component: UserComponent, children: [
            { path: 'MesCandidatures', component: MesCandidaturesComponent },
            { path: 'Soumission', component: SoumissionComponent },
            { path: 'SuiviCneuf', component: SuiviCneufComponent },
            { path: 'MesEvaluations', component: MesEvaluationsComponent },
            { path: 'MonTableauDeBord', component: TabDeBordComponent },
            { path: 'MesActualites', component: GestionActualitesComponent },
            { path: 'ModifierCandidature/:id', component: EditCandidatureComponent }
        ], canActivate: [AuthGuard] },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib_1.__decorate([
    NgModule({
        imports: [RouterModule.forRoot(routes, { useHash: true })],
        exports: [RouterModule]
    })
], AppRoutingModule);
export { AppRoutingModule };
//# sourceMappingURL=app-routing.module.js.map