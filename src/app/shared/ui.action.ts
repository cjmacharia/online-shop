import { Action } from "@ngrx/store";

// readonly establiushed that type can only be assingned a value either during the initialisation of the class from within the class constructor . the 
// value of type cannot be modifed at any other time 

export const IS_LOADING = "[LOADING] start Loading"
export const STOP_LOADING = "[LOADING] stop Loading"

export class IsLoading implements Action {
  readonly type = IS_LOADING;
}

export class StopLoading implements Action {
  readonly type = STOP_LOADING;
}

export type UIActions = StopLoading | IsLoading;