import { Component, OnInit, Input, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import * as cartProducts from '../../products.actions'
import * as fromRoot from 'src/app/app.reducer';
import * as fromProducts from '../../products.reducer';
import { products } from 'src/app/interfaces/products.model';
import { UiService } from '../../../../../shared/ui.service';
import { FirestoreService } from '../../../../../services/firestore.service';
import { map } from 'rxjs/operators';
import { EventEmitter } from 'events';
@Component({
  selector: 'app-fruit',
  templateUrl: './fruit.component.html',
  styleUrls: ['./fruit.component.css']
})
export class FruitComponent implements OnInit {
  @Input() fruit
  @Input() fruits :products[]
  // fruits: products[];
  cartProducts:  products[]
  @Output() inCart: EventEmitter = new EventEmitter();
  productExists: boolean;
  constructor(private store: Store<fromRoot.State>, private sharedService: UiService, private firebaseService: FirestoreService) { }

  ngOnInit() {
    // // this.store.select
    // this.sharedService.getProductCategory('fruits').subscribe(
    //   product => {
    //     this.fruits = product;
    //   }
    // )
    this.getProductsInCart(this.fruits)
  }
  // get the products that have been added to cart
  getProductsInCart(fruits) {
   this.store.select(fromProducts.getCartProducts)
   .subscribe(products => {

     this.cartProducts = products;
     products.forEach(product => {
      if(this.fruit.name === product.name){
        this.productExists = true;
      }
     })
   })
  }

  addToCart(data: products) {
    this.firebaseService.createShoppingCart(data)
    
  }
}
