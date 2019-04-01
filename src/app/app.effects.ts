import { Injectable } from '@angular/core';
import { Actions, Effect, ofType} from '@ngrx/effects';
import { FirestoreService } from './services/firestore.service';
import * as userProducts from './user/user.action';
import { map, catchError, switchMap } from 'rxjs/operators';
import { EMPTY } from 'rxjs';
@Injectable()

export class appEffects {
  @Effect() 
    loadCategories$ = this.action.pipe(
      ofType(userProducts.LOAD_CATEGORIES),
      switchMap(() => this.firestoreService.getCategories()
    .pipe(map(categories => {
      return new userProducts.LoadCategoriesSuccess(categories)
    }),
      catchError(()=> EMPTY)))
    )
    @Effect()
    loadProducts$ = this.action.pipe(
      ofType(userProducts.LOAD_PRODUCTS),
      switchMap(() => this.firestoreService.getProducts()
      .pipe(map( products => {
        return new userProducts.LoadProductsSuccess(products)
      }
      )))

    )
  constructor(private action: Actions, private firestoreService: FirestoreService) {}
}