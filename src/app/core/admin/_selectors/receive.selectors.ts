// NGRX
import {createFeatureSelector, createSelector} from '@ngrx/store';
// State
import {ReceiveMethodState} from '../_reducers/receive.reducers';
import {selectAll} from '../_reducers/receive.reducers';
import {selectWithdrawState} from './withdraw.selectors';


export const selectReceiveMethodState = createFeatureSelector<ReceiveMethodState>('ReceivesMethod');

export const getAllWithdraw = createSelector(
selectWithdrawState,  selectAll
);


export const selectReceiveMethodsPageLoading = createSelector(
  selectReceiveMethodState,
  receiveState => {
    return receiveState.listLoading;
  }
);

export const selectReceiveMethodsActionLoading = createSelector(
  selectReceiveMethodState,
  receiveState => receiveState.actionsloading
);

export const selectReceiveMethodsShowInitWaitingMessage = createSelector(
  selectReceiveMethodState,
  receiveState => receiveState.showInitWaitingMessage
);
