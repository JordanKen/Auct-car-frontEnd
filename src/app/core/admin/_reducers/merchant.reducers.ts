// NGRX
import {createFeatureSelector} from '@ngrx/store';
import {createEntityAdapter, EntityAdapter, EntityState} from '@ngrx/entity';
// Actions
import {MerchantMethodActions, MerchantMethodActionTypes} from '../_actions/merchant.actions';
// Models
import {Merchants} from '../../../models/merchants';

// tslint:disable-next-line:no-empty-interface
export interface MerchantMethodState extends EntityState<Merchants> {
  listLoading: boolean;
  actionsloading: boolean;
  showInitWaitingMessage: boolean;
}

export const adapter: EntityAdapter<Merchants> = createEntityAdapter<Merchants>();

export const initialMerchantState: MerchantMethodState = adapter.getInitialState({
  listLoading: false,
  actionsloading: false,
  showInitWaitingMessage: true
});
export function MerchantMethodReducer(state = initialMerchantState, action: MerchantMethodActions): MerchantMethodState {
  switch (action.type) {

    case MerchantMethodActionTypes.CreateMerchantRequested:
      return adapter.addOne(action.payload.merchants, {
        ...state, lastCreatedMerchantId: action.payload.merchants.id
      });

    case MerchantMethodActionTypes.DeleteMerchantRequested:
      return adapter.removeOne(action.payload.id, state);

    case MerchantMethodActionTypes.AllMerchantRequested:
      return adapter.addMany(action.payload.merchants, {
        ...initialMerchantState,
        listLoading: false,
        showInitWaitingMessage: false
      });

    case MerchantMethodActionTypes.MerchantPageToggleLoading:
      return {
        ...state, actionsloading: true
      };

    case MerchantMethodActionTypes.MerchantPageCancelled:
      return {
        ...state, listLoading: true
      };

    case MerchantMethodActionTypes.MerchantPageLoaded: {
      return adapter.addMany(action.payload.merchants, {
        ...initialMerchantState,
        listLoading: false,
        showInitWaitingMessage: false
      });
    }
    default:
      return state;
  }
}

export const getMerchantMethodState = createFeatureSelector<MerchantMethodState>('MerchantMethod');

export const {
  selectAll,
  selectEntities,
  selectIds
} = adapter.getSelectors();
