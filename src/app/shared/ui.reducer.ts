import { UIActions, IS_LOADING, STOP_LOADING} from './ui.action';
export interface UiState {
  isLoading: boolean;
}

const intialState: UiState = {
  isLoading: false
}

export function uiReducer(state = intialState, action: UIActions) {
  switch (action.type) {
    case IS_LOADING:
      return {
        isLoading: true
      };
    case STOP_LOADING: 
      return {
        isLoading: false
      }  
      default: {
        return state
      }

     
  }
}

export const getIsloading = (state: UiState) => state.isLoading;