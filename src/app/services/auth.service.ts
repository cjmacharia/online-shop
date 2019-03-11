import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { Store } from '@ngrx/store';
import { authModel } from '../interfaces/user.model';
import * as fromRoot from '../app.reducer';
import * as UIActions from '../shared/ui.action';
import { Router } from '@angular/router';
import * as AuthActions from '../auth/auth.actions';
import { UiService } from '../shared/ui.service';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private afAuth: AngularFireAuth,
  private store: Store<{ui: fromRoot.State}>,
private UiService: UiService,
private router: Router) {
  }

  checkAuth() {
    this.afAuth.authState.subscribe(user => {
      if (user) {
        this.store.dispatch(new AuthActions.setAuthenticated());
        this.router.navigate(['/home'])
      } else {
        
        this.store.dispatch(new AuthActions.setUnAuthenticated());
        this.router.navigate(['/register'])
      }
    })
  }

  registerUser(authData: authModel) {
    this.store.dispatch(new UIActions.IsLoading());
    this.afAuth.auth.createUserWithEmailAndPassword(authData.email, authData.password).then(result => {
      this.UiService.showSnackBar('reg susseful', null, 2000)
      this.store.dispatch(new UIActions.StopLoading());
    }).catch(err => {
      this.store.dispatch(new UIActions.StopLoading());
      this.UiService.showSnackBar(err.message, null, 2000)
    })
  }

  loginUser(authData: authModel) {
    console.log(authData)
    this.store.dispatch(new UIActions.IsLoading());
    this.afAuth.auth.signInWithEmailAndPassword(
      authData.email, authData.password).then(result => {
        this.store.dispatch(new UIActions.IsLoading());
      }).catch(err => {
        this.store.dispatch(new UIActions.StopLoading());
        this.UiService.showSnackBar(err.message, null, 2000)
      })
  }

  Logout(){ 
    this.afAuth.auth.signOut();
  }

}
