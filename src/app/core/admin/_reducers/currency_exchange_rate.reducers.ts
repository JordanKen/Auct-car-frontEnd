// NGRX
import {createFeatureSelector} from '@ngrx/store';
import {createEntityAdapter, EntityAdapter, EntityState} from '@ngrx/entity';
// Actions
import {
  CurrencyExchangeRatesMethodActions,
  CurrencyExchangeRatesMethodActionTypes
} from '../_actions/currency_exchange_rate.actions';
// Models
import {Currency_exchange_rates} from '../../../models/currency_exchange_rates';

// tslint:disable-next-line:no-empty-interface
export interface CurrencyExchangeRateState extends EntityState<Currency_exchange_rates> {
  listLoading: boolean;
  actionsloading: boolean;
  showInitWaitingMessage: boolean;
}

export const adapter: EntityAdapter<Currency_exchange_rates> = createEntityAdapter<Currency_exchange_rates>();

export const initialCountryState: CurrencyExchangeRateState = adapter.getInitialState({
  listLoading: false,
  actionsloading: false,
  showInitWaitingMessage: true
});



// tslint:disable-next-line:max-line-length
export function currencyExchangeRateReducer(state = initialCountryState, action: CurrencyExchangeRatesMethodActions): CurrencyExchangeRateState {
  switch (action.type) {
    case CurrencyExchangeRatesMethodActionTypes.AllCurrencyExchangeRatesRequested:
      return adapter.addMany(action.payload.CurrencyExchangeRates, {
        ...initialCountryState,
        listLoading: false,
        showInitWaitingMessage: false
      });
    case CurrencyExchangeRatesMethodActionTypes.CurrencyExchangeRatesCreated:
      return adapter.addOne(action.payload.CurrencyExchangeRate, {
        ...initialCountryState,
        listLoading: false,
        showInitWaitingMessage: false
      });
    case CurrencyExchangeRatesMethodActionTypes.CurrencyExchangeRatesPageToggleLoading:
      return {
        ...state, actionsloading: true
      };
    case CurrencyExchangeRatesMethodActionTypes.CurrencyExchangeRatesPageCancelled:
      return {
        ...state, listLoading: true
      };
    case CurrencyExchangeRatesMethodActionTypes.CurrencyExchangeRatesPageLoaded: {
      return adapter.addMany(action.payload.CurrencyExchangeRates, {
        ...initialCountryState,
        listLoading: false,
        showInitWaitingMessage: false
      });
    }
    default:
      return state;
  }
}

export const getCurrencyExchangeRateState = createFeatureSelector<CurrencyExchangeRateState>('CurrencyExchangeRate');

export const {
  selectAll,
  selectEntities,
  selectIds
} = adapter.getSelectors();
