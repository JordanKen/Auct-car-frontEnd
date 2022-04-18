// NGRX
import {createFeatureSelector, createSelector} from '@ngrx/store';
// State
import {WithdrawState} from '../_reducers/withdraw.reducers';

export const selectWithdrawState = createFeatureSelector<WithdrawState>('withdraws');



export const selectWihdrawsPageLoading = createSelector(
  selectWithdrawState,
  depositsState => {
    return depositsState.listLoading;
  }
);

export const selectWihdrawsActionLoading = createSelector(
  selectWithdrawState,
  depositsState => depositsState.actionsloading
);

export const selectWihdrawsShowInitWaitingMessage = createSelector(
  selectWithdrawState,
  depositsState => depositsState.showInitWaitingMessage
);
