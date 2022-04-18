// NGRX
import {createFeatureSelector} from '@ngrx/store';
import {createEntityAdapter, EntityAdapter, EntityState} from '@ngrx/entity';
// Actions
import {CurrencyDepositMethodActionTypes, CurrencyDepositMethodActions} from '../_actions/currency_deposit_method.actions';
// Models
import {Currency_deposit_methods} from '../../../models/currency_deposit_methods';
import {CurrencyWithdrawalMethodActionTypes} from "../_actions/currency_withdraw_method.actions";
// tslint:disable-next-line:no-empty-interface
export interface CurrencyDepositMethodState extends EntityState<Currency_deposit_methods> {
  listLoading: boolean;
  actionsloading: boolean;
  showInitWaitingMessage: boolean;
}

export const adapter: EntityAdapter<Currency_deposit_methods> = createEntityAdapter<Currency_deposit_methods>();

export const initialCurrencyDepositMethodsState: CurrencyDepositMethodState = adapter.getInitialState({
  listLoading: false,
  actionsloading: false,
  showInitWaitingMessage: true
});



export function CurrencyDepositMethodsReducer(state = initialCurrencyDepositMethodsState, action:  CurrencyDepositMethodActions): CurrencyDepositMethodState {
  switch (action.type) {
    case CurrencyDepositMethodActionTypes.AllCurrencyDepositMethodsRequested:
      return adapter.addMany(action.payload.currency_deposit_methods, {
        ...initialCurrencyDepositMethodsState,
        listLoading: false,
        showInitWaitingMessage: false
      });
    case CurrencyDepositMethodActionTypes.CurrencyDepositMethodsPageToggleLoading:
      return {
        ...state, actionsloading: true
      };
    case CurrencyDepositMethodActionTypes.CurrencyDepositMethodsPageCancelled:
      return {
        ...state, listLoading: true
      };
    case CurrencyDepositMethodActionTypes.CurrencyDepositMethodsPageLoaded: {
      return adapter.addMany(action.payload.currency_deposit_methods, {
        ...initialCurrencyDepositMethodsState,
        listLoading: false,
        showInitWaitingMessage: false
      });
    }
    case CurrencyDepositMethodActionTypes.CurrencyDepositMethodsCreated: {

      return adapter.addOne(action.payload.currency_deposit_methods, {
        ...state, lastCurrencyDepositMethodsId: action.payload.currency_deposit_methods.id
      });
    }
    case CurrencyDepositMethodActionTypes.CurrencyDepositMethodsUpdated: {
      return adapter.updateOne(action.payload.partialcurrencydepositmethods, state);
    }
    case CurrencyDepositMethodActionTypes.CurrencyDepositMethodsDeleted: {
      return adapter.removeOne(action.payload.id, state);
    }
    default:
      return state;
  }
}

export const getCurrencyDepositMethodState = createFeatureSelector<CurrencyDepositMethodState>('currency_deposit_methods');

export const {
  selectAll,
  selectEntities,
  selectIds
} = adapter.getSelectors();
