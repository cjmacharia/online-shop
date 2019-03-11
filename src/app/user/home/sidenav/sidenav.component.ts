import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import * as fromCategory from '../../user.reducer';
import * as Categories from '../../user.action';
import { categories } from '../../../interfaces/categories.model'
@Component({
  selector: 'sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {
  movies$: Observable<categories[]> = this.store.select(fromCategory.getCategories)
  constructor(private store: Store<fromCategory.HomeState>) { }

  ngOnInit() {
    this.store.dispatch(new Categories.LoadCartegories)
    this.movies$.subscribe(cats => {
      console.log(cats)
    })
  }

}
