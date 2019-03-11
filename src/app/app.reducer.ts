import { ActionReducerMap, createFeatureSelector, createSelector } from "@ngrx/store";
import * as fromAuth from './auth/auth.reducer';
import * as fromShared from './shared/ui.reducer';
import * as fromUser from './user/user.reducer';
export interface State {
  auth: fromAuth.State;
  ui: fromShared.UiState;
  categories: fromUser.HomeState
  products: fromUser.HomeState
}

export const reducers: ActionReducerMap<State> = {
  auth: fromAuth.authReducer,
  ui: fromShared.uiReducer,
  categories: fromUser.categoryReducer,
  products: fromUser.productsReducer
}

export const getUiState = createFeatureSelector<fromShared.UiState>('ui');
export const getIsLoading = createSelector(getUiState, fromShared.getIsloading);
export const getAuthState = createFeatureSelector<fromAuth.State> ('auth');
export const getIsAuthenticated = createSelector(getAuthState, fromAuth.getisAuthenticated);
export const getUserState = createFeatureSelector<fromShared.UiState>('user');