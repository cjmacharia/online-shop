import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { AuthService } from '../services/auth.service';
import * as fromRoot from '../app.reducer';
import * as fromCategory from '../user/user.reducer';
import { Observable } from 'rxjs';
import { categories } from '../interfaces/categories.model';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {
  isAuth$: Observable<boolean>;
  categories$:Observable<categories[]>;
  @Output() closeSidenav = new EventEmitter<void>();
  constructor(private store: Store<fromRoot.State>, private auth: AuthService) { }

  ngOnInit() {
    this.isAuth$ = this.store.select(fromRoot.getIsAuthenticated);
    this.categories$ = this.store.select(fromCategory.getCategories)
  }

  onClose() {
    this.closeSidenav.emit()
  }

}
