// Angular
import {Injectable} from '@angular/core';
// RxJS
import {map, mergeMap} from 'rxjs/operators';
// NGRX
import {Actions, Effect, ofType} from '@ngrx/effects';
import {Store} from '@ngrx/store';
// Services
import {TransactionService} from '../../../core/admin/_services/transaction.service';
// State
import {AppState} from '../../../core/reducers';

import {
  AllTransactionsRequested,
  TransactionActionTypes,
  TransactionsActionToggleLoading,
  TransactionsPageToggleLoading
} from "../_actions/transaction.actions";


@Injectable()
export class TransactionEffects {
  showPageLoadingDistpatcher = new TransactionsActionToggleLoading({isLoading: true});
  hidePageLoadingDistpatcher = new TransactionsPageToggleLoading({isLoading: false});

  showActionLoadingDistpatcher = new TransactionsActionToggleLoading({isLoading: true});
  hideActionLoadingDistpatcher = new TransactionsActionToggleLoading({isLoading: false});

  @Effect()
  loadTransactionPage$ = this.actions$
    .pipe(
      ofType<AllTransactionsRequested>(TransactionActionTypes.AllTransactionsRequested),
      mergeMap(() => {
        this.store.dispatch(this.showPageLoadingDistpatcher);
        return this.service.getall();
      }),
      map(response => {
        return new AllTransactionsRequested({
          transactionable: response.items
        });
      }),
    );

  constructor(private actions$: Actions, private service: TransactionService, private store: Store<AppState>) {
  }
}
