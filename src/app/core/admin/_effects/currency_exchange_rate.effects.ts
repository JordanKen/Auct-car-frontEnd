// Angular
import {Injectable} from '@angular/core';
// RxJS
import {map, mergeMap, tap} from 'rxjs/operators';
// NGRX
import {Actions, Effect, ofType} from '@ngrx/effects';
import {Store} from '@ngrx/store';
// Services
// State
import {AppState} from '../../../core/reducers';
import {
  AllCurrencyExchangeRatesRequested,
  CurrencyExchangeRatesActionToggleLoading, CurrencyExchangeRatesCreated,
  CurrencyExchangeRatesMethodActionTypes,
  CurrencyExchangeRatesPageToggleLoading
} from '../_actions/currency_exchange_rate.actions';
import {CurrencyExchangeRateService} from '../_services/currency_exchange_rate.service';

@Injectable()
export class DepositMethodEffects {
  showPageLoadingDistpatcher = new CurrencyExchangeRatesActionToggleLoading({isLoading: true});
  hidePageLoadingDistpatcher = new CurrencyExchangeRatesPageToggleLoading({isLoading: false});

  showActionLoadingDistpatcher = new CurrencyExchangeRatesActionToggleLoading({isLoading: true});
  hideActionLoadingDistpatcher = new CurrencyExchangeRatesActionToggleLoading({isLoading: false});

  @Effect()
  loadCountryPage$ = this.actions$
    .pipe(
      ofType<AllCurrencyExchangeRatesRequested>(CurrencyExchangeRatesMethodActionTypes.AllCurrencyExchangeRatesRequested),
      mergeMap(() => {
        this.store.dispatch(this.showPageLoadingDistpatcher);
        return this.service.all();
      }),
      map(response => {
        return new AllCurrencyExchangeRatesRequested({
          CurrencyExchangeRates: response.items
        });
      }),
    );
    @Effect()
    createCurrencyExchangeRate$ = this.actions$
      .pipe(
        ofType<CurrencyExchangeRatesCreated>(CurrencyExchangeRatesMethodActionTypes.CurrencyExchangeRatesCreated),
        mergeMap(({payload}) => {
          this.store.dispatch(this.showActionLoadingDistpatcher);
          return this.service.create(payload.CurrencyExchangeRate).pipe(
            tap(res => {
              this.store.dispatch(new CurrencyExchangeRatesCreated({CurrencyExchangeRate: res}));
            })
          );
        }),
        map(() => {
          return this.hideActionLoadingDistpatcher;
        }),
      );

  constructor(private actions$: Actions, private service: CurrencyExchangeRateService, private store: Store<AppState>) {
  }
}
