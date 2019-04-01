import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { Store } from '@ngrx/store';
import * as fromCategory from '../user/user.reducer';
import * as fromProducts from '../user/home/products/products.reducer';
import { map } from 'rxjs/operators';
import { products } from '../interfaces/products.model';
@Injectable({
  providedIn: 'root'
})
export class UiService {
  product: products[];
  constructor(private snackBar: MatSnackBar, private store: Store<fromCategory.HomeState>) { }

  showSnackBar(message, action, duration) {
    this.snackBar.open(message, action, {duration: duration});
  }
  getProductCategory(category) {
    return this.store.select(fromCategory.getProducts)
    .pipe(
      map(products => products.filter(product => product.category === category)))
  }

  getFruitType(fruit) {
    return this.store.select(fromProducts.getCartProducts)
    .pipe(
      map(products => products.filter(product => product.name === fruit)))
  }
}
