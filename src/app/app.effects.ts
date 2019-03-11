import { Injectable } from '@angular/core';
import { Actions, Effect, ofType} from '@ngrx/effects';
import { FirestoreService } from './services/firestore.service';
import * as Categories from './user/user.action';
import { map, mergeMap, catchError, switchMap } from 'rxjs/operators';
import { EMPTY, Observable } from 'rxjs';
@Injectable()

export class appEffects {
  @Effect() 
    loadCategories$ = this.action.pipe(
      ofType(Categories.LOAD_CATEGORIES),
      mergeMap(() => this.firestoreService.getCategories()
    .pipe(map(categories => {
      return new Categories.LoadCategoriesSuccess(categories)
    }),
      catchError(()=> EMPTY)))
    )
  constructor(private action: Actions, private firestoreService: FirestoreService) {}
}