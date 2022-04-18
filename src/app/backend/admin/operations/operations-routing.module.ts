import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TransactionEnvoiComponent} from './transactions/envois/transaction-envoi.component';
import {TransactionReceptionComponent} from './transactions/receptions/transaction-reception.component';
import {TransactionAllComponent} from './transactions/toutes-transations/transaction-all.component';
import {TransactionsModule} from './transactions/transactions.module';
import {GarageComponent} from "../garages/garage.component";
import {MarqueComponent} from "./marques/marque.component";
import {GabaritComponent} from "./gabaries/gabarit.component";
const routes: Routes = [
  {
    path: 'marques',
    component: MarqueComponent
  },
  {
    path: 'garage',
    component: GarageComponent
  },
  {
    path: 'gabaries',
    component: GabaritComponent
  },
  {
    path: 'transactions-envois',
    component: TransactionEnvoiComponent
  },
  {
    path: 'transactions-receptions',
    component: TransactionReceptionComponent
  },
  {
    path: 'transactions-toutestransactions',
    component: TransactionAllComponent
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes),
  TransactionsModule],
  exports: [RouterModule]
})
export class OperationsRoutingModule { }
