import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ParametragesRoutingModule} from './parametrages-routing.module';
import {VehiculeComponent} from './devises/devises.component';
import {ModeRetraitsComponent} from './mode-retraits/mode-retraits.component';
import {UserComponent} from './country/country.component';
import {UIModule} from '../../../shared/ui/ui.module';
import {NgbModule, NgbPaginationModule, NgbTypeaheadModule} from '@ng-bootstrap/ng-bootstrap';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgSelectModule} from "@ng-select/ng-select";
import {EnchereComponent} from "./enchere/enchere.component";


@NgModule({
  declarations: [ EnchereComponent, ModeRetraitsComponent, UserComponent, VehiculeComponent],
  imports: [
    CommonModule,
    ParametragesRoutingModule,
    UIModule,
    NgbTypeaheadModule,
    FormsModule,
    NgbPaginationModule,
    ReactiveFormsModule,
    NgbModule,
    NgSelectModule,
  ]
})
export class ParametragesModule { }
