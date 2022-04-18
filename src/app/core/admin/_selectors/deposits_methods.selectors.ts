// NGRX
import {createFeatureSelector, createSelector} from '@ngrx/store';
// State
import {DepositMethodState} from '../_reducers/deposit_method.reducers';

export const selectDepositeMethodState = createFeatureSelector<DepositMethodState>('depositMethods');



export const selectDepositMethoodsPageLoading = createSelector(
  selectDepositeMethodState,
  depositsState => {
    return depositsState.listLoading;
  }
);

export const selectDepositMethodsActionLoading = createSelector(
  selectDepositeMethodState,
  depositsState => depositsState.actionsloading
);

export const selectDepositMethodsShowInitWaitingMessage = createSelector(
  selectDepositeMethodState,
  depositsState => depositsState.showInitWaitingMessage
);
