// NGRX
import {createFeatureSelector, createSelector} from '@ngrx/store';
// State
import {SettingState} from '../_reducers/setting.reducers';

export const selectSettingState = createFeatureSelector<SettingState>('settings');

export const selectSettingById = (settingId: number) => createSelector(
  selectSettingState,
  settingsState => settingsState.entities[settingId]
);
export const selectSettingsPageLoading = createSelector(
  selectSettingState,
  settingsState => {
    return settingsState.listLoading;
  }
);

export const selectSettingsActionLoading = createSelector(
  selectSettingState,
  settingsState => settingsState.actionsloading
);

export const selectSettingsShowInitWaitingMessage = createSelector(
  selectSettingState,
  settingsState => settingsState.showInitWaitingMessage
);
