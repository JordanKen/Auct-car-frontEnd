// NGRX
import {createFeatureSelector} from '@ngrx/store';
import {createEntityAdapter, EntityAdapter, EntityState} from '@ngrx/entity';
// Actions
import {CurrencyWithdrawalMethodActionTypes, CurrencyWithdrawalMethodActions} from '../_actions/currency_withdraw_method.actions';
// Models
import {Currency_withdrawal_methods} from '../../../models/currency_withdrawal_methods';
import {SettingActionTypes} from "../_actions/setting.actions";
// tslint:disable-next-line:no-empty-interface
export interface CurrencyWithdrawalMethodState extends EntityState<Currency_withdrawal_methods> {
  listLoading: boolean;
  actionsloading: boolean;
  showInitWaitingMessage: boolean;
}

export const adapter: EntityAdapter<Currency_withdrawal_methods> = createEntityAdapter<Currency_withdrawal_methods>();

export const initialCurrencyWithdrawalMethodsState: CurrencyWithdrawalMethodState = adapter.getInitialState({
  listLoading: false,
  actionsloading: false,
  showInitWaitingMessage: true
});



export function CurrencyWithdrawalMethodsReducer(state = initialCurrencyWithdrawalMethodsState, action:  CurrencyWithdrawalMethodActions): CurrencyWithdrawalMethodState {
  switch (action.type) {
    case CurrencyWithdrawalMethodActionTypes.AllCurrencyWithdrawalMethodsRequested:
      return adapter.addMany(action.payload.currency_withdrawal_methods, {
        ...initialCurrencyWithdrawalMethodsState,
        listLoading: false,
        showInitWaitingMessage: false
      });
    case CurrencyWithdrawalMethodActionTypes.CurrencyWithdrawalMethodsPageToggleLoading:
      return {
        ...state, actionsloading: true
      };
    case CurrencyWithdrawalMethodActionTypes.CurrencyWithdrawalMethodsPageCancelled:
      return {
        ...state, listLoading: true
      };
    case CurrencyWithdrawalMethodActionTypes.CurrencyWithdrawalMethodsPageLoaded: {
      return adapter.addMany(action.payload.currency_withdrawal_methods, {
        ...initialCurrencyWithdrawalMethodsState,
        listLoading: false,
        showInitWaitingMessage: false
      });
    }
    case CurrencyWithdrawalMethodActionTypes.CurrencyWithdrawalMethodsCreated: {

      return adapter.addOne(action.payload.currency_withdrawal_methods, {
        ...state, lastCurrencyWithdrawalMethodsId: action.payload.currency_withdrawal_methods.id
      });
    }
    case CurrencyWithdrawalMethodActionTypes.CurrencyWithdrawalMethodsUpdated: {
      return adapter.updateOne(action.payload.partialcurrencywithdrawalmethods, state);
    }
    case CurrencyWithdrawalMethodActionTypes.CurrencyWithdrawalMethodsDeleted: {
      return adapter.removeOne(action.payload.id, state);
    }
    default:
      return state;
  }
}

export const getCurrencyWithdrawalMethodState = createFeatureSelector<CurrencyWithdrawalMethodState>('currency_withdrawal_methods');

export const {
  selectAll,
  selectEntities,
  selectIds
} = adapter.getSelectors();
