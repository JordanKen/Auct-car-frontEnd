// NGRX
import {createFeatureSelector, createSelector} from '@ngrx/store';
// State
import {DepositState} from '../_reducers/deposite.reducers';
import {selectAll} from '../_reducers/deposite.reducers';


export const selectDepositeState = createFeatureSelector<DepositState>('deposits');

export const getAllDeposite = createSelector(
  selectDepositeState,
  selectAll
);

export const selectDepositesPageLoading = createSelector(
  selectDepositeState,
  depositsState => {
    return depositsState.listLoading;
  }
);

export const selectDepositesActionLoading = createSelector(
  selectDepositeState,
  depositsState => depositsState.actionsloading
);

export const selectDepositesShowInitWaitingMessage = createSelector(
  selectDepositeState,
  depositsState => depositsState.showInitWaitingMessage
);
