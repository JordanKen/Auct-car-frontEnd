// NGRX
import {createFeatureSelector, createSelector} from '@ngrx/store';
// State
import {CountryState, selectAll} from '../_reducers/country.reducers';

export const selectCountryState = createFeatureSelector<CountryState>('country');


export const getAllCountries = createSelector(
  selectCountryState,
  selectAll
);

export const selectCountrysPageLoading = createSelector(
  selectCountryState,
  countryState => {
    return countryState.listLoading;
  }
);

export const selectCountrysActionLoading = createSelector(
  selectCountryState,
  countryState => countryState.actionsloading
);

export const selectCountrysShowInitWaitingMessage = createSelector(
  selectCountryState,
  countryState => countryState.showInitWaitingMessage
);
