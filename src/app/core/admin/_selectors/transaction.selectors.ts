// NGRX
import {createFeatureSelector, createSelector} from '@ngrx/store';
// State
import {TransactionableState, selectAll} from '../_reducers/tansaction.reducers';

export const selectTransactionableState = createFeatureSelector<TransactionableState>('transactions');

export const getAllTransaction = createSelector(
  selectTransactionableState,
  selectAll
);

export const selectTransactionablePageLoading = createSelector(
  selectTransactionableState,
  transactionableState => {
    return transactionableState.listLoading;
  }
);

export const selectTransactionableActionLoading = createSelector(
  selectTransactionableState,
  transactionableState => transactionableState.actionsloading
);

export const selectTransactionableShowInitWaitingMessage = createSelector(
  selectTransactionableState,
  transactionableState => transactionableState.showInitWaitingMessage
);
