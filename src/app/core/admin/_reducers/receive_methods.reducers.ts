// NGRX
import {createFeatureSelector} from '@ngrx/store';
import {createEntityAdapter, EntityAdapter, EntityState} from '@ngrx/entity';
// Actions
import {WithdrawalMethodActions, WithdrawalMethodsActionTypes} from '../_actions/receive_method.actions';
// Models
import {Withdrawal_methods} from '../../../models/withdrawal_methods';

// tslint:disable-next-line:no-empty-interface
export interface WithdrawMethodState extends EntityState<Withdrawal_methods> {
  listLoading: boolean;
  actionsloading: boolean;
  showInitWaitingMessage: boolean;
}

export const adapter: EntityAdapter<Withdrawal_methods> = createEntityAdapter<Withdrawal_methods>();

export const initialDepositsState: WithdrawMethodState = adapter.getInitialState({
  listLoading: false,
  actionsloading: false,
  showInitWaitingMessage: true
});



export function withdrawMethodReducer(state = initialDepositsState, action: WithdrawalMethodActions): WithdrawMethodState {
  switch (action.type) {
    case WithdrawalMethodsActionTypes.AllWithdrawal_methodsRequested:
      return adapter.addMany(action.payload.withdraw_method, {
        ...initialDepositsState,
        listLoading: false,
        showInitWaitingMessage: false
      });
    case WithdrawalMethodsActionTypes.Withdrawal_methodsPageToggleLoading:
      return {
        ...state, actionsloading: true
      };

    case WithdrawalMethodsActionTypes.Withdrawal_methodsPageLoaded: {
      return adapter.addMany(action.payload.withdraw_method, {
        ...initialDepositsState,
        listLoading: false,
        showInitWaitingMessage: false
      });
    }
    default:
      return state;
  }
}

export const getDepositState = createFeatureSelector<WithdrawMethodState>('withdraw_methods');

export const {
  selectAll,
  selectEntities,
  selectIds
} = adapter.getSelectors();
