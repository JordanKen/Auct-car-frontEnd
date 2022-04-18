// NGRX
import {createFeatureSelector, createSelector} from '@ngrx/store';
// State
import {CurrencyDepositMethodsReducer, CurrencyDepositMethodState} from '../_reducers/currency_deposit_method.reducers';

export const selectCurrencyDepositMethodState = createFeatureSelector<CurrencyDepositMethodState>('currency_deposit_methods');

export const selectCurrencyDepositMethodById = (CurrencyDepositMethodId: number) => createSelector(
  selectCurrencyDepositMethodState,
  currencyDepositMethodsState => currencyDepositMethodsState.entities[CurrencyDepositMethodId]
);
export const selectCurrencyDepositMethodsPageLoading = createSelector(
  selectCurrencyDepositMethodState,
  currencyDepositMethodsState => {
    return currencyDepositMethodsState.listLoading;
  }
);

export const selectCurrencyDepositMethodsActionLoading = createSelector(
  selectCurrencyDepositMethodState,
  currencyDepositMethodsState => currencyDepositMethodsState.actionsloading
);

export const selectCurrencyDepositMethodsShowInitWaitingMessage = createSelector(
  selectCurrencyDepositMethodState,
  currencyDepositMethodsState => currencyDepositMethodsState.showInitWaitingMessage
);
