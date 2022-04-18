// NGRX
import {createFeatureSelector, createSelector} from '@ngrx/store';
// State
import {MerchantMethodState} from '../_reducers/merchant.reducers';

export const selectMerchantMethodState = createFeatureSelector<MerchantMethodState>('MerchantMethod');



export const selectMerchantMethodsPageLoading = createSelector(
  selectMerchantMethodState,
  merchantState => {
    return merchantState.listLoading;
  }
);

export const selectMerchantMethodsActionLoading = createSelector(
  selectMerchantMethodState,
  merchantState => merchantState.actionsloading
);

export const selectMerchantMethodsShowInitWaitingMessage = createSelector(
  selectMerchantMethodState,
  merchantState => merchantState.showInitWaitingMessage
);
