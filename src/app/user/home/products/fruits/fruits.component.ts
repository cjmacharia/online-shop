import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { UiService } from 'src/app/shared/ui.service';
import { FirestoreService } from 'src/app/services/firestore.service';
import * as fromRoot from 'src/app/app.reducer';
import * as cartProducts from '../products.actions'

@Component({
  selector: 'app-fruits',
  templateUrl: './fruits.component.html',
  styleUrls: ['./fruits.component.css']
})
export class FruitsComponent implements OnInit {
  fruits;
  constructor(private store: Store<fromRoot.State>, private sharedService: UiService, private firebaseService: FirestoreService) { }
  ngOnInit() {
    this.store.dispatch(new cartProducts.AddProduct)
    this.sharedService.getProductCategory('fruits').subscribe(
      product => {
        this.fruits = product;
      }
    )
  }

}
