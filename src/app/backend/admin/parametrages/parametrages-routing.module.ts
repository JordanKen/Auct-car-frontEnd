import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {VehiculeComponent} from './devises/devises.component';
import {ModeRetraitsComponent} from './mode-retraits/mode-retraits.component';
import {RolesComponent} from './compte-utilisateur/roles/roles.component';
import {UtilisateursComponent} from './compte-utilisateur/utilisateurs/utilisateurs.component';
import {CompteUtilisateurModule} from './compte-utilisateur/compte-utilisateur.module';
import {UserComponent} from "./country/country.component";
import {EnchereComponent} from "./enchere/enchere.component";

const routes: Routes = [
  {
    path: 'utilisateur',
    component: UserComponent
  },
  {
    path: 'enchere',
    component: EnchereComponent
  },
  {
    path: 'vehicule',
    component: VehiculeComponent
  },
  {
    path: 'parametrages-moderetraits',
    component: ModeRetraitsComponent
  },
  {
    path: 'user-roles',
    component: RolesComponent
  },
  {
    path: 'user-utilisateurs',
    component: UtilisateursComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes),
  CompteUtilisateurModule],
  exports: [RouterModule]
})
export class ParametragesRoutingModule { }
