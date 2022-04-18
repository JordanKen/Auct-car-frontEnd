// NGRX
import {createFeatureSelector} from '@ngrx/store';
import {createEntityAdapter, EntityAdapter, EntityState} from '@ngrx/entity';
// Actions
import {SettingActions, SettingActionTypes} from '../_actions/setting.actions';
// Models
import {Settings} from '../../../models/settings';

// tslint:disable-next-line:no-empty-interface
export interface SettingState extends EntityState<Settings> {
  listLoading: boolean;
  actionsloading: boolean;
  showInitWaitingMessage: boolean;
}

export const adapter: EntityAdapter<Settings> = createEntityAdapter<Settings>();

export const initialSettingsState: SettingState = adapter.getInitialState({
  listLoading: false,
  actionsloading: false,
  showInitWaitingMessage: true
});



export function SettingsReducer(state = initialSettingsState, action:  SettingActions): SettingState {
  switch (action.type) {
    case SettingActionTypes.AllSettingsRequested:
      return adapter.addMany(action.payload.settings, {
        ...initialSettingsState,
        listLoading: false,
        showInitWaitingMessage: false
      });
    case SettingActionTypes.SettingsPageToggleLoading:
      return {
        ...state, actionsloading: true
      };
    case SettingActionTypes.SettingsPageCancelled:
      return {
        ...state, listLoading: true
      };
    case SettingActionTypes.SettingsPageLoaded: {
      return adapter.addMany(action.payload.settings, {
        ...initialSettingsState,
        listLoading: false,
        showInitWaitingMessage: false
      });
    }
    case SettingActionTypes.SettingsSaved: {

      return adapter.addOne(action.payload.settings, {
        ...state, lastSavedSettingsId: action.payload.settings.id
      });
    }
    case SettingActionTypes.SettingsUpdated: {
      return adapter.updateOne(action.payload.partialsettings, state);
    }
    case SettingActionTypes.SettingsDeleted: {
      return adapter.removeOne(action.payload.id, state);
    }
    default:
      return state;
  }
}

export const getSettingState = createFeatureSelector<SettingState>('settings');

export const {
  selectAll,
  selectEntities,
  selectIds
} = adapter.getSelectors();
