// NGRX
import {createFeatureSelector} from '@ngrx/store';
import {createEntityAdapter, EntityAdapter, EntityState} from '@ngrx/entity';
// Actions
import {CurrencyActions, CurrencyActionTypes,} from '../_actions/currencies.actions';
// Models
import {Currencies} from "../../../models/currencies";

// tslint:disable-next-line:no-empty-interface
export interface CurrencyState extends EntityState<Currencies> {
  listLoading: boolean;
  actionsloading: boolean;
  showInitWaitingMessage: boolean;
}

export const adapter: EntityAdapter<Currencies> = createEntityAdapter<Currencies>();

export const initialCurrenciesState: CurrencyState = adapter.getInitialState({
  listLoading: false,
  actionsloading: false,
  showInitWaitingMessage: true
});



export function currenciesReducer(state = initialCurrenciesState, action: CurrencyActions): CurrencyState {
  switch (action.type) {
    case CurrencyActionTypes.AllCurrenciesRequested:
      return adapter.addMany(action.payload.currencies, {
        ...initialCurrenciesState,
        listLoading: false,
        showInitWaitingMessage: false
      });
    case CurrencyActionTypes.CurrenciesPageToggleLoading:
      return {
        ...state, actionsloading: true
      };
    case CurrencyActionTypes.CurrenciesPageCancelled:
      return {
        ...state, listLoading: true
      };
    case CurrencyActionTypes.CurrenciesPageLoaded: {
      return adapter.addMany(action.payload.currencies, {
        ...initialCurrenciesState,
        listLoading: false,
        showInitWaitingMessage: false
      });
    }
    case CurrencyActionTypes.CurrencyCreate: {
      return adapter.addOne(action.payload.currencies, {
        ...state, lastCreatedCurrencyId: action.payload.currencies.id
      });
    }


    default:
      return state;
  }
}

export const getDepositState = createFeatureSelector<CurrencyState>('deposits');

export const {
  selectAll,
  selectEntities,
  selectIds
} = adapter.getSelectors();
