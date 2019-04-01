import { Component, OnInit, Output, EventEmitter, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import * as fromCategory from '../../user.reducer';
import * as Categories from '../../user.action';
import { categories } from '../../../interfaces/categories.model'
import { FirestoreService } from '../../../services/firestore.service';
import { products } from '../../../interfaces/products.model';
import { MatSidenav } from '@angular/material';
import { UiService } from '../../../shared/ui.service';
@Component({
  selector: 'sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {
  product: products[];
  @ViewChild('sidenav') sidenav: MatSidenav;
  categories$: Observable<categories[]> = this.store.select(fromCategory.getCategories)
  products$: Observable<products[]> = this.store.select(fromCategory.getProducts)
  constructor(private store: Store<fromCategory.HomeState>, private fireservice: FirestoreService, private sharedService: UiService ) { }

  ngOnInit() {
    this.store.dispatch(new Categories.LoadCartegories)
    this.store.dispatch(new Categories.LoadProducts)
  }

  onToggle() {
    this.sidenav.open();
  }

  // getCategory(fruits) {
  //   this.sharedService.getProductCategory(category);
  // }
  

}
