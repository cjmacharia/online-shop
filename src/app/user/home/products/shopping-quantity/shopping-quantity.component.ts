import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'shopping-quantity',
  templateUrl: './shopping-quantity.component.html',
  styleUrls: ['./shopping-quantity.component.css']
})
export class ShoppingQuantityComponent implements OnInit {
  @Input('product') products
  constructor() { }

  ngOnInit() {
  }

}
