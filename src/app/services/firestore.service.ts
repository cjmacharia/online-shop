import { Injectable } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore'
import * as fromRoot from 'src/app/app.reducer';
import * as fromProducts from '../user/home/products/products.reducer';
import * as cartProducts from '../user/home/products/products.actions'
import { Store } from '@ngrx/store';
import { Subscription} from 'rxjs'
import { map } from 'rxjs/operators';
import { products } from '../interfaces/products.model';
@Injectable({
  providedIn: 'root'
})
export class FirestoreService {
  subs: Subscription;
  constructor(public db: AngularFirestore, private store: Store<fromRoot.State>) { 
  }

  getCategories() {
    return  this.db.collection('categories').valueChanges();
  }

  getProducts() {
    return this.db.collection('products').valueChanges();
  }
 
  createShoppingCart(product: products) {
    return this.db.collection('shopping-cart').add(product).then(() => {
      this.store.dispatch(new cartProducts.AddProduct)
    })
    }

  getShoppingCarts() {
    return this.db.collection('shopping-cart').valueChanges();
  }
  ngOnDestroy () {
    this.subs.unsubscribe();
}
}
