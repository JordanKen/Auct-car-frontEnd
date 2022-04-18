// NGRX
import {createFeatureSelector, createSelector} from '@ngrx/store';
// State
import {ExchangeMethodState} from '../_reducers/exchange.reducers';

export const selectExchangeMethodState = createFeatureSelector<ExchangeMethodState>('ExchangeMethod');



export const selectExchangeMethodsPageLoading = createSelector(
  selectExchangeMethodState,
  exchangeState => {
    return exchangeState.listLoading;
  }
);

export const selectExchangeMethodsActionLoading = createSelector(
  selectExchangeMethodState,
  exchangeState => exchangeState.actionsloading
);

export const selectExchangeMethodsShowInitWaitingMessage = createSelector(
  selectExchangeMethodState,
  exchangeState => exchangeState.showInitWaitingMessage
);
