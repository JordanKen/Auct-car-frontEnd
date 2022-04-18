import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {OperationsRoutingModule} from './operations-routing.module';
import {UIModule} from '../../../shared/ui/ui.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {GarageComponent} from "../garages/garage.component";
import {MarqueComponent} from "./marques/marque.component";
import {GabaritComponent} from "./gabaries/gabarit.component";


@NgModule({
  declarations: [MarqueComponent, GabaritComponent, GarageComponent],
  imports: [
    CommonModule,
    OperationsRoutingModule,
    UIModule,
    FormsModule,
    NgbModule,
    ReactiveFormsModule
  ]
})
export class OperationsModule { }
