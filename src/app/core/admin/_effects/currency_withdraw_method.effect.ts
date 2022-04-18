// Angular
import {Injectable} from '@angular/core';
// RxJS
import {map, mergeMap, tap} from 'rxjs/operators';
// NGRX
import {Actions, Effect, ofType} from '@ngrx/effects';
import {Store} from '@ngrx/store';
// Services
import { CurrencyWithdrawMethodService } from "../_services/currency_withdraw_method.service";
// State
import {AppState} from '../../../core/reducers';
import {
  AllCurrencyWithdrawalMethodsRequested, CurrencyWithdrawalMethodActionTypes,
  CurrencyWithdrawalMethodsActionToggleLoading, CurrencyWithdrawalMethodsCreated, CurrencyWithdrawalMethodsDeleted,
  CurrencyWithdrawalMethodsPageToggleLoading, CurrencyWithdrawalMethodsUpdated
} from "../_actions/currency_withdraw_method.actions";
import {SettingActionTypes, SettingsSaved} from "../_actions/setting.actions";


@Injectable()
export class CurrencyWithdrawalMethodEffects {
  showPageLoadingDistpatcher = new CurrencyWithdrawalMethodsActionToggleLoading({isLoading: true});
  hidePageLoadingDistpatcher = new CurrencyWithdrawalMethodsPageToggleLoading({isLoading: false});

  showActionLoadingDistpatcher = new CurrencyWithdrawalMethodsActionToggleLoading({isLoading: true});
  hideActionLoadingDistpatcher = new CurrencyWithdrawalMethodsActionToggleLoading({isLoading: false});

  @Effect()
  loadCurrencyWithdrawalMethodsPage$ = this.actions$
    .pipe(
      ofType<AllCurrencyWithdrawalMethodsRequested>(CurrencyWithdrawalMethodActionTypes.AllCurrencyWithdrawalMethodsRequested),
      mergeMap(({payload}) => {
        this.store.dispatch(this.showPageLoadingDistpatcher);
        return this.service.allCurrenciesWithdrawMethods();
      }),
      map(response => {
        return new AllCurrencyWithdrawalMethodsRequested({
          currency_withdrawal_methods: response.items
        });
      }),
    );
  @Effect()
  CreateCurrencyWithdrawalMethods$ = this.actions$
    .pipe(
      ofType<CurrencyWithdrawalMethodsCreated>(CurrencyWithdrawalMethodActionTypes.CurrencyWithdrawalMethodsCreated),
      mergeMap(({payload}) => {
        return this.service.create(payload.currency_withdrawal_methods).pipe(
          tap(res => {
            this.store.dispatch(new CurrencyWithdrawalMethodsCreated({currency_withdrawal_methods: res}));
          })
        );
      }),
      map(() => {
        return this.hideActionLoadingDistpatcher;
      }),
    );
  @Effect()
  UpdateCurrencyWithdrawalMethods$ = this.actions$
    .pipe(
      ofType<CurrencyWithdrawalMethodsUpdated>(CurrencyWithdrawalMethodActionTypes.CurrencyWithdrawalMethodsUpdated),
      mergeMap(({payload}) => {
        this.store.dispatch(this.showPageLoadingDistpatcher);
        return this.service.updateWithdrawMethods(payload.currencyWithdrawaltmethods);
      }),
      map(() => {
          return this.hideActionLoadingDistpatcher;
      }),
    );
  @Effect()
  DeleteCurrencyWithdrawalMethods$ = this.actions$
    .pipe(
      ofType<CurrencyWithdrawalMethodsDeleted>(CurrencyWithdrawalMethodActionTypes.CurrencyWithdrawalMethodsDeleted),
      mergeMap(({payload}) => {
        this.store.dispatch(this.showPageLoadingDistpatcher);
        return this.service.deleteWithdrawMethods(payload.id);
      }),
      map(() => {
          return this.hideActionLoadingDistpatcher;
      }),
    );

  constructor(private actions$: Actions, private service: CurrencyWithdrawMethodService, private store: Store<AppState>) {
  }
}
