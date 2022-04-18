// NGRX
import {createFeatureSelector} from '@ngrx/store';
import {createEntityAdapter, EntityAdapter, EntityState} from '@ngrx/entity';
// Actions
import {DepositActions, DepositActionTypes} from '../_actions/deposite.actions';
// Models
import {Deposits} from '../../../models/deposits';

// tslint:disable-next-line:no-empty-interface
export interface DepositState extends EntityState<Deposits> {
  listLoading: boolean;
  actionsloading: boolean;
  showInitWaitingMessage: boolean;
}

export const adapter: EntityAdapter<Deposits> = createEntityAdapter<Deposits>();

export const initialDepositsState: DepositState = adapter.getInitialState({
  listLoading: false,
  actionsloading: false,
  showInitWaitingMessage: true
});



export function depositsReducer(state = initialDepositsState, action: DepositActions): DepositState {
  switch (action.type) {
    case DepositActionTypes.AllDepositsRequested:
      return adapter.addMany(action.payload.deposits, {
        ...initialDepositsState,
        listLoading: false,
        showInitWaitingMessage: false
      });
    case DepositActionTypes.DepositsPageToggleLoading:
      return {
        ...state, actionsloading: true
      };
    case DepositActionTypes.DepositsPageCancelled:
      return {
        ...state, listLoading: true
      };
    case DepositActionTypes.DepositsPageLoaded: {
      return adapter.addMany(action.payload.deposits, {
        ...initialDepositsState,
        listLoading: false,
        showInitWaitingMessage: false
      });
    }
    default:
      return state;
  }
}

export const getDepositState = createFeatureSelector<DepositState>('deposits');

export const {
  selectAll,
  selectEntities,
  selectIds
} = adapter.getSelectors();
