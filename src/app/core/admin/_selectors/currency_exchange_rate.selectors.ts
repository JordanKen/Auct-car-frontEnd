// NGRX
import {createFeatureSelector, createSelector} from '@ngrx/store';
// State
import {CurrencyExchangeRateState} from '../_reducers/currency_exchange_rate.reducers';

export const selectCountryState = createFeatureSelector<CurrencyExchangeRateState>('CurrencyExchangeRate');



export const selectCurrencyExchangeRatesPageLoading = createSelector(
  selectCountryState,
  countryState => {
    return countryState.listLoading;
  }
);

export const selectCurrencyExchangeRatesActionLoading = createSelector(
  selectCountryState,
  countryState => countryState.actionsloading
);

export const selectCurrencyExchangeRatesShowInitWaitingMessage = createSelector(
  selectCountryState,
  countryState => countryState.showInitWaitingMessage
);
