import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TransactionsRoutingModule } from './transactions-routing.module';
import { TransactionEnvoiComponent } from './envois/transaction-envoi.component';
import { TransactionReceptionComponent } from './receptions/transaction-reception.component';
import { TransactionAllComponent } from './toutes-transations/transaction-all.component';
import {UIModule} from '../../../../shared/ui/ui.module';
import {FormsModule} from "@angular/forms";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
//import {SharedModule} from '../../apps/email/shared/shared.module';

@NgModule({
  declarations: [TransactionEnvoiComponent, TransactionReceptionComponent, TransactionAllComponent],
  imports: [
    CommonModule,
    TransactionsRoutingModule,
    UIModule,
    CommonModule,
    //SharedModule,
    UIModule,
    FormsModule,
    NgbModule,
  ]
})
export class TransactionsModule { }
