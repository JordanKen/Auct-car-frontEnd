// NGRX
import {createFeatureSelector} from '@ngrx/store';
import {createEntityAdapter, EntityAdapter, EntityState} from '@ngrx/entity';
// Actions
import {SaleActions, SaleActionTypes} from '../_actions/sale.actions';
// Models
import {Sales} from '../../../models/sales';

// tslint:disable-next-line:no-empty-interface
export interface SaleState extends EntityState<Sales> {
  listLoading: boolean;
  actionsloading: boolean;
  showInitWaitingMessage: boolean;
}

export const adapter: EntityAdapter<Sales> = createEntityAdapter<Sales>();

export const initialSalesState: SaleState = adapter.getInitialState({
  listLoading: false,
  actionsloading: false,
  showInitWaitingMessage: true
});



export function salesReducer(state = initialSalesState, action:  SaleActions): SaleState {
  switch (action.type) {
    case SaleActionTypes.AllSalesRequested:
      return adapter.addMany(action.payload.sales, {
        ...initialSalesState,
        listLoading: false,
        showInitWaitingMessage: false
      });
    case SaleActionTypes.SalesPageToggleLoading:
      return {
        ...state, actionsloading: true
      };
    case SaleActionTypes.SalesPageCancelled:
      return {
        ...state, listLoading: true
      };
    case SaleActionTypes.SalesPageLoaded: {
      return adapter.addMany(action.payload.sales, {
        ...initialSalesState,
        listLoading: false,
        showInitWaitingMessage: false
      });
    }
    default:
      return state;
  }
}

export const getSaleState = createFeatureSelector<SaleState>('sales');

export const {
  selectAll,
  selectEntities,
  selectIds
} = adapter.getSelectors();
