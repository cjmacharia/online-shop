import { ActionReducerMap, createFeatureSelector, createSelector } from "@ngrx/store";
import * as fromAuth from './auth/auth.reducer';
import * as fromShared from './shared/ui.reducer';
export interface State {
  auth: fromAuth.State;
  ui: fromShared.UiState;
}

export const reducers: ActionReducerMap<State> = {
  auth: fromAuth.authReducer,
  ui: fromShared.uiReducer,
}

export const getUiState = createFeatureSelector<fromShared.UiState>('ui');
export const getIsLoading = createSelector(getUiState, fromShared.getIsloading);
export const getAuthState = createFeatureSelector<fromAuth.State> ('auth');
export const getIsAuthenticated = createSelector(getAuthState, fromAuth.getisAuthenticated);