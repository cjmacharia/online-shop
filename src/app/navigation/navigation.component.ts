import { Component, OnInit } from '@angular/core';
import * as fromRoot from '../app.reducer';
import { Store } from '@ngrx/store';
import { AuthService } from '../services/auth.service';
@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  isAuth$;
  constructor(private store: Store<fromRoot.State>, private auth: AuthService) { }

  ngOnInit() {
    this.isAuth$ = this.store.select(fromRoot.getIsAuthenticated);
  }
  onClick() {
    this.auth.Logout()
  }

}
