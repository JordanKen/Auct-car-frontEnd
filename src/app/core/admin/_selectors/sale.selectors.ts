// NGRX
import {createFeatureSelector, createSelector} from '@ngrx/store';
// State
import {SaleState} from '../_reducers/sale.reducers';

export const selectSaleState = createFeatureSelector<SaleState>('sales');


export const selectSalesPageLoading = createSelector(
  selectSaleState,
  salesState => {
    return salesState.listLoading;
  }
);

export const selectSalesActionLoading = createSelector(
  selectSaleState,
  salesState => salesState.actionsloading
);

export const selectSalesShowInitWaitingMessage = createSelector(
  selectSaleState,
  salesState => salesState.showInitWaitingMessage
);
