// Angular
import {Injectable} from '@angular/core';
// RxJS
import {map, mergeMap, tap} from 'rxjs/operators';
// NGRX
import {Actions, Effect, ofType} from '@ngrx/effects';
import {Store} from '@ngrx/store';
// Services
import {CurrencyService} from '../../../core/admin/_services/currency.service';
// State
import {AppState} from '../../../core/reducers';
import {
  AllCurrenciesRequested,
  CurrenciesPageToggleLoading,
  CurrencyActionTypes,
  CurrencyCreate,
} from '../_actions/currencies.actions';

@Injectable()
export class DepositMethodEffects {
  showPageLoadingDistpatcher = new CurrenciesPageToggleLoading({isLoading: true});
  hidePageLoadingDistpatcher = new CurrenciesPageToggleLoading({isLoading: false});

  showActionLoadingDistpatcher = new CurrenciesPageToggleLoading({isLoading: true});
  hideActionLoadingDistpatcher = new CurrenciesPageToggleLoading({isLoading: false});

  @Effect()
  loadDepositeMethodPage$ = this.actions$
    .pipe(
      ofType<AllCurrenciesRequested>(CurrencyActionTypes.AllCurrenciesRequested),
      mergeMap(() => {
        this.store.dispatch(this.showPageLoadingDistpatcher);
        return this.service.all();
      }),
      map(response => {
        return new AllCurrenciesRequested({
          currencies: response.items
        });
      }),
    );
  @Effect()
  loadCreatePage$ = this.actions$
    .pipe(
      ofType<CurrencyCreate>(CurrencyActionTypes.CurrencyCreate),
      mergeMap(({payload}) => {
        return this.service.create(payload.currencies).pipe(
          tap(res => {
            this.store.dispatch(new CurrencyCreate({currencies: res}));
          })
        );
      }),
      map(() => {
        return this.hideActionLoadingDistpatcher;
      }),
    );

  constructor(private actions$: Actions, private service: CurrencyService, private store: Store<AppState>) {
  }
}
