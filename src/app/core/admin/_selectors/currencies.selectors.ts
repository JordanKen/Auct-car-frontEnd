// NGRX
import {createFeatureSelector, createSelector} from '@ngrx/store';
// State
import {CurrencyState} from '../_reducers/currencies.reducers';

export const selectCurrencyState = createFeatureSelector<CurrencyState>('currencies');

export const selectUserById = (userId: number) => createSelector(
  selectCurrencyState,
  currenciesState => currenciesState.entities[userId]
);

export const selectUsersPageLoading = createSelector(
  selectCurrencyState,
  currenciesState => {
    return currenciesState.listLoading;
  }
);

export const selectUsersActionLoading = createSelector(
  selectCurrencyState,
  currenciesState => currenciesState.actionsloading
);

export const selectUsersShowInitWaitingMessage = createSelector(
  selectCurrencyState,
  currenciesState => currenciesState.showInitWaitingMessage
);
