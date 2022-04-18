// NGRX
import {createFeatureSelector, createSelector} from '@ngrx/store';
// State
import {EscrowMethodState} from '../_reducers/escrow.reducers';

export const selectEscrowMethodState = createFeatureSelector<EscrowMethodState>('EscrowMethod');



export const selectEscrowMethodsPageLoading = createSelector(
  selectEscrowMethodState,
  escrowState => {
    return escrowState.listLoading;
  }
);

export const selectEscrowMethodsActionLoading = createSelector(
  selectEscrowMethodState,
  escrowState => escrowState.actionsloading
);

export const selectEscrowMethodsShowInitWaitingMessage = createSelector(
  selectEscrowMethodState,
  escrowState => escrowState.showInitWaitingMessage
);
