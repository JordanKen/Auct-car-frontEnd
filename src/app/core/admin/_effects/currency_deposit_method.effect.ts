// Angular
import {Injectable} from '@angular/core';
// RxJS
import {map, mergeMap, tap} from 'rxjs/operators';
// NGRX
import {Actions, Effect, ofType} from '@ngrx/effects';
import {Store} from '@ngrx/store';
// Services
import { CurrencyDepositMethodService } from '../_services/currency_deposit_method.service';
// State
import {AppState} from '../../../core/reducers';

import {
  AllCurrencyDepositMethodsRequested,
  CurrencyDepositMethodActionTypes,
  CurrencyDepositMethodsActionToggleLoading,
  CurrencyDepositMethodsDeleted,
  CurrencyDepositMethodsPageToggleLoading,
  CurrencyDepositMethodsUpdated,
  CurrencyDepositMethodsCreated
} from '../_actions/currency_deposit_method.actions';



@Injectable()
export class CurrencyDepositMethodEffects {
  showPageLoadingDistpatcher = new CurrencyDepositMethodsActionToggleLoading({isLoading: true});
  hidePageLoadingDistpatcher = new CurrencyDepositMethodsPageToggleLoading({isLoading: false});

  showActionLoadingDistpatcher = new CurrencyDepositMethodsActionToggleLoading({isLoading: true});
  hideActionLoadingDistpatcher = new CurrencyDepositMethodsActionToggleLoading({isLoading: false});

  @Effect()
  loadCurrencyDepositMethodsPage$ = this.actions$
    .pipe(
      ofType<AllCurrencyDepositMethodsRequested>(CurrencyDepositMethodActionTypes.AllCurrencyDepositMethodsRequested),
      mergeMap(({payload}) => {
        this.store.dispatch(this.showPageLoadingDistpatcher);
        return this.service.allCurrenciesDepositMethods();
      }),
      map(response => {
        return new AllCurrencyDepositMethodsRequested({
          currency_deposit_methods: response.items
        });
      }),
    );

  @Effect()
  createCurrencyDepositMethod = this.actions$
    .pipe(
      ofType<CurrencyDepositMethodsCreated>(CurrencyDepositMethodActionTypes.CurrencyDepositMethodsCreated),
      mergeMap(({payload}) => {
        this.store.dispatch(this.showActionLoadingDistpatcher);
        return this.service.create(payload.currency_deposit_methods).pipe(
          tap(res => {
            this.store.dispatch(new CurrencyDepositMethodsCreated({currency_deposit_methods: res}));
          })
        );
      }),
      map(() => {
        return this.hideActionLoadingDistpatcher;
      }),
    );


  @Effect()
  UpdateCurrencyDepositMethods$ = this.actions$
    .pipe(
      ofType<CurrencyDepositMethodsUpdated>(CurrencyDepositMethodActionTypes.CurrencyDepositMethodsUpdated),
      mergeMap(({payload}) => {
        this.store.dispatch(this.showPageLoadingDistpatcher);
        return this.service.updateDepositMethods(payload.currencydepositmethods);
      }),
      map(() => {
          return this.hideActionLoadingDistpatcher;
      }),
    );
  @Effect()
  DeleteCurrencyDepositMethods$ = this.actions$
    .pipe(
      ofType<CurrencyDepositMethodsDeleted>(CurrencyDepositMethodActionTypes.CurrencyDepositMethodsDeleted),
      mergeMap(({payload}) => {
        this.store.dispatch(this.showPageLoadingDistpatcher);
        return this.service.deleteDepositMethods(payload.id);
      }),
      map(() => {
          return this.hideActionLoadingDistpatcher;
      }),
    );

  constructor(private actions$: Actions, private service: CurrencyDepositMethodService, private store: Store<AppState>) {
  }
}
