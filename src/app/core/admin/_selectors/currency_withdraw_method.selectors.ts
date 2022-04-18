// NGRX
import {createFeatureSelector, createSelector} from '@ngrx/store';
// State
import {CurrencyWithdrawalMethodsReducer, CurrencyWithdrawalMethodState} from '../_reducers/currency_wihtdraw_method.reducers';

export const selectCurrencyWithdrawalMethodState = createFeatureSelector<CurrencyWithdrawalMethodState>('currency_withdrawal_methods');

export const selectCurrencyWithdrawalMethodById = (CurrencyWithdrawalMethodId: number) => createSelector(
  selectCurrencyWithdrawalMethodState,
  currencyWithdrawalMethodsState => currencyWithdrawalMethodsState.entities[CurrencyWithdrawalMethodId]
);
export const selectCurrencyWithdrawalMethodsPageLoading = createSelector(
  selectCurrencyWithdrawalMethodState,
  currencyWithdrawalMethodsState => {
    return currencyWithdrawalMethodsState.listLoading;
  }
);

export const selectCurrencyWithdrawalMethodsActionLoading = createSelector(
  selectCurrencyWithdrawalMethodState,
  currencyWithdrawalMethodsState => currencyWithdrawalMethodsState.actionsloading
);

export const selectCurrencyWithdrawalMethodsShowInitWaitingMessage = createSelector(
  selectCurrencyWithdrawalMethodState,
  currencyWithdrawalMethodsState => currencyWithdrawalMethodsState.showInitWaitingMessage
);
