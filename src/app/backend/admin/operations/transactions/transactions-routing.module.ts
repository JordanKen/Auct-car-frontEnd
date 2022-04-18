import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TransactionEnvoiComponent } from './envois/transaction-envoi.component';
import { TransactionReceptionComponent } from './receptions/transaction-reception.component';
import { TransactionAllComponent } from './toutes-transations/transaction-all.component';
const routes: Routes = [
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TransactionsRoutingModule { }
