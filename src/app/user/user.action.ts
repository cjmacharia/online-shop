import { Action } from '@ngrx/store';

export const LOAD_CATEGORIES = "[CATEGORIES] load categories"
export const LOAD_CATEGORIES_SUCCESS = "[CATEGORIES] categories loaded successfully "
export const LOAD_CATEGORIES_FAIL = "[CATEGORIES] categories not loaded"

export const LOAD_PRODUCTS = "[PRODUCTS] load products"
export const LOAD_PRODUCTS_SUCCESS = "[PRODUCTS] products loaded successfully "
export const LOAD_PRODUCTS_FAIL = "[PRODUCTS] products not loaded"

export class LoadCartegories implements Action {
  readonly type = LOAD_CATEGORIES
}

export class LoadCategoriesSuccess implements Action {
  readonly type = LOAD_CATEGORIES_SUCCESS

  constructor(public payload: any) {}
}

export class LoadCategoriesFail implements Action {
  readonly type = LOAD_CATEGORIES_FAIL
  constructor(public payload: any) {}

}
export class LoadProducts implements Action {
  readonly type = LOAD_PRODUCTS
}

export class LoadProductsSuccess implements Action {
  readonly type = LOAD_PRODUCTS_SUCCESS
  constructor(public payload: any) {}
}

export class LoadProductsFail implements Action {
  readonly type = LOAD_PRODUCTS_FAIL
  constructor(public payload: any) {}

}

export type categoryActions = LoadCartegories | LoadCategoriesSuccess| LoadCategoriesFail;

export type productsAction = LoadProducts | LoadProductsSuccess | LoadProductsFail