// NGRX
import {createFeatureSelector} from '@ngrx/store';
import {createEntityAdapter, EntityAdapter, EntityState} from '@ngrx/entity';
// Actions
import {DepositMethodActions, DepositMethodActionTypes} from '../_actions/deposit_method.actions';
// Models
import {Deposit_methods} from '../../../models/deposit_methods';

// tslint:disable-next-line:no-empty-interface
export interface DepositMethodState extends EntityState<Deposit_methods> {
  listLoading: boolean;
  actionsloading: boolean;
  showInitWaitingMessage: boolean;
}

export const adapter: EntityAdapter<Deposit_methods> = createEntityAdapter<Deposit_methods>();

export const initialDepositsState: DepositMethodState = adapter.getInitialState({
  listLoading: false,
  actionsloading: false,
  showInitWaitingMessage: true
});



export function depositsMethodReducer(state = initialDepositsState, action: DepositMethodActions): DepositMethodState {
  switch (action.type) {
    case DepositMethodActionTypes.AllDepositMethodsRequested:
      return adapter.addMany(action.payload.deposits, {
        ...initialDepositsState,
        listLoading: false,
        showInitWaitingMessage: false
      });
    case DepositMethodActionTypes.DepositMethodsPageToggleLoading:
      return {
        ...state, actionsloading: true
      };
    case DepositMethodActionTypes.DepositMethodsPageCancelled:
      return {
        ...state, listLoading: true
      };
    case DepositMethodActionTypes.DepositMethodsPageLoaded: {
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

export const getDepositMethodState = createFeatureSelector<DepositMethodState>('depositsMethod');

export const {
  selectAll,
  selectEntities,
  selectIds
} = adapter.getSelectors();
