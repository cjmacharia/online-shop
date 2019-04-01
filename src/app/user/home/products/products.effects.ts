import { Injectable } from '@angular/core';
import { Actions, Effect, ofType} from '@ngrx/effects';
import { FirestoreService } from 'src/app/services/firestore.service';
import * as productActions from '../products/products.actions';
import { switchMap, map, catchError } from 'rxjs/operators';
import { EMPTY } from 'rxjs';

@Injectable()
export class productEffect {
  constructor(private action: Actions, private firestoreService: FirestoreService) {}
  @Effect()
  saveShoppingCart$ = this.action.pipe(ofType(productActions.ADD_PRODUCT),
  switchMap(() => this.firestoreService.getShoppingCarts()
.pipe(map(products => {
  return new productActions.AddProductSucess(products)
}),
  catchError(()=> EMPTY)))
)

}