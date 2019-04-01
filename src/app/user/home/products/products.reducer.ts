import {AddProduct, ADD_PRODUCT, ADD_PRODUCT_SUCCESS, ADD_PRODUCT_FAIL,productActions, AddProductFail, AddProductSucess } from './products.actions';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import  { products } from 'src/app/interfaces/products.model';
import * as fromRoot from 'src/app/app.reducer';

export interface ProductState {
  Cartproducts: products[]
}

export interface State extends fromRoot.State {
  productDetails: ProductState
}

const intialState:ProductState = {
  Cartproducts: []
}

export function productsReducer(state = intialState, actions: productActions) {
  switch(actions.type) {
    case ADD_PRODUCT: 
    return {
      ...state
    }
    case ADD_PRODUCT_SUCCESS: 
    return {
      ...state,
      Cartproducts: actions.payload
    }
    case ADD_PRODUCT_FAIL:
    return {
      ...state,
    }
    default: {
      return state
    }
  }
}
export const getProductsState = createFeatureSelector<ProductState>('productDetails');
export const getCartProducts = createSelector(getProductsState, (state:ProductState) => state.Cartproducts);