// NGRX
import {createFeatureSelector, createSelector} from '@ngrx/store';
// State
import {PurchaseState} from '../_reducers/purchases.reducers';

export const selectPurchaseState = createFeatureSelector<PurchaseState>('purchases');



export const selectPurchasesPageLoading = createSelector(
  selectPurchaseState,
  depositsState => {
    return depositsState.listLoading;
  }
);

export const selectPurchasesActionLoading = createSelector(
  selectPurchaseState,
  depositsState => depositsState.actionsloading
);

export const selectPurchasesShowInitWaitingMessage = createSelector(
  selectPurchaseState,
  depositsState => depositsState.showInitWaitingMessage
);
