// NGRX
import {createFeatureSelector} from '@ngrx/store';
import {createEntityAdapter, EntityAdapter, EntityState} from '@ngrx/entity';
// Actions
import {CountryActions, CountryActionTypes} from '../_actions/country.actions';
// Models
import {Country} from '../../../models/country';

// tslint:disable-next-line:no-empty-interface
export interface CountryState extends EntityState<Country> {
  listLoading: boolean;
  actionsloading: boolean;
  showInitWaitingMessage: boolean;
}

export const adapter: EntityAdapter<Country> = createEntityAdapter<Country>();

export const initialCountryState: CountryState = adapter.getInitialState({
  listLoading: false,
  actionsloading: false,
  showInitWaitingMessage: true
});



export function countryReducer(state = initialCountryState, action: CountryActions): CountryState {
  switch (action.type) {
    case CountryActionTypes.AllCountryRequested:
      return adapter.addMany(action.payload.country, {
        ...initialCountryState,
        listLoading: false,
        showInitWaitingMessage: false
      });
    case CountryActionTypes.CountryPageToggleLoading:
      return {
        ...state, actionsloading: true
      };
    case CountryActionTypes.CountryPageCancelled:
      return {
        ...state, listLoading: true
      };
    case CountryActionTypes.CountryPageLoaded: {
      return adapter.addMany(action.payload.country, {
        ...initialCountryState,
        listLoading: false,
        showInitWaitingMessage: false
      });
    }
    default:
      return state;
  }
}

export const getCountryState = createFeatureSelector<CountryState>('Country');

export const {
  selectAll
} = adapter.getSelectors();
