// NGRX
import {createFeatureSelector} from '@ngrx/store';
import {createEntityAdapter, EntityAdapter, EntityState} from '@ngrx/entity';
// Actions
import {PurchaseActions, PurchasesActionTypes} from '../_actions/purchase.actions';
// Models
import {Purchases} from '../../../models/purchases';

// tslint:disable-next-line:no-empty-interface
export interface PurchaseState extends EntityState<Purchases> {
  listLoading: boolean;
  actionsloading: boolean;
  showInitWaitingMessage: boolean;
}

export const adapter: EntityAdapter<Purchases> = createEntityAdapter<Purchases>();

export const initialDepositsState: PurchaseState = adapter.getInitialState({
  listLoading: false,
  actionsloading: false,
  showInitWaitingMessage: true
});



export function rolesReducer(state = initialDepositsState, action: PurchaseActions): PurchaseState {
  switch (action.type) {
    case PurchasesActionTypes.PurchasesCreated:
      return adapter.addOne(action.payload.purchase, {
        ...state, lastCreatedUserId: action.payload.purchase.id
      });
    case PurchasesActionTypes.PurchasesPageToggleLoading:
      return {
        ...state, actionsloading: true
      };
    case PurchasesActionTypes.PurchasesPageCancelled:
      return {
        ...state, listLoading: true
      };
    case PurchasesActionTypes.PurchasesPageLoaded: {
      return adapter.addMany(action.payload.purchases, {
        ...initialDepositsState,
        listLoading: false,
        showInitWaitingMessage: false
      });
    }
    default:
      return state;
  }
}

export const getDepositState = createFeatureSelector<PurchaseState>('purchases');

export const {
  selectAll,
  selectEntities,
  selectIds
} = adapter.getSelectors();
