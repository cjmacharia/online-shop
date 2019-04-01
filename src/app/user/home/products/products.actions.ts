import { Action } from '@ngrx/store'

export const ADD_PRODUCT = "[PRODUCTS] add produts to cart"
export const ADD_PRODUCT_SUCCESS = "[PRODUCTS] add produts to cart successfully"
export const ADD_PRODUCT_FAIL = "[PRODUCTS] add produts to cart failed"

export class AddProduct implements Action {
  readonly type = ADD_PRODUCT
}

export class AddProductSucess implements Action {
  readonly type = ADD_PRODUCT_SUCCESS
  constructor(public payload: any) {}
}

export class AddProductFail implements Action {
  readonly type = ADD_PRODUCT_FAIL
  constructor(public payload: any) {}
}
 export type productActions = AddProduct | AddProductSucess | AddProductFail

 