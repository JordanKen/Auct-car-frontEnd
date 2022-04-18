// NGRX
import {createFeatureSelector, createSelector} from '@ngrx/store';
// State
import {WithdrawMethodState} from '../_reducers/receive_methods.reducers';

export const selectRoleState = createFeatureSelector<WithdrawMethodState>('withdraw_methods');



export const selectWithdrawMethodsPageLoading = createSelector(
  selectRoleState,
  depositsState => {
    return depositsState.listLoading;
  }
);

export const selectWithdrawMethodsActionLoading = createSelector(
  selectRoleState,
  depositsState => depositsState.actionsloading
);

export const selectWithdrawMethodsShowInitWaitingMessage = createSelector(
  selectRoleState,
  depositsState => depositsState.showInitWaitingMessage
);
