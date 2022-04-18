// NGRX
import {createFeatureSelector} from '@ngrx/store';
import {createEntityAdapter, EntityAdapter, EntityState} from '@ngrx/entity';
// Actions
import {WithdrawActions, WithDrawActionTypes} from '../_actions/withdraw.actions';
// Models
import {Receives} from '../../../models/receives';

// tslint:disable-next-line:no-empty-interface
export interface WithdrawState extends EntityState<Receives> {
  listLoading: boolean;
  actionsloading: boolean;
  showInitWaitingMessage: boolean;
}

export const adapter: EntityAdapter<Receives> = createEntityAdapter<Receives>();

export const initialDepositsState: WithdrawState = adapter.getInitialState({
  listLoading: false,
  actionsloading: false,
  showInitWaitingMessage: true
});



export function withdrawReducer(state = initialDepositsState, action: WithdrawActions): WithdrawState {
  switch (action.type) {
    case WithDrawActionTypes.AllWithdrawsRequested:
      return adapter.addMany(action.payload.receives, {
        ...initialDepositsState,
        listLoading: false,
        showInitWaitingMessage: false
      });
    case WithDrawActionTypes.WithdrawsPageToggleLoading:
      return {
        ...state, actionsloading: true
      };
    case WithDrawActionTypes.WithdrawsPageCancelled:
      return {
        ...state, listLoading: true
      };
    case WithDrawActionTypes.WithdrawsPageLoaded: {
      return adapter.addMany(action.payload.receives, {
        ...initialDepositsState,
        listLoading: false,
        showInitWaitingMessage: false
      });
    }
    default:
      return state;
  }
}

export const getDepositState = createFeatureSelector<WithdrawState>('withdraws');

export const {
  selectAll,
  selectEntities,
  selectIds
} = adapter.getSelectors();
