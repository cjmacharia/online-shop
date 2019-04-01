import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FruitsComponent } from './fruits/fruits.component';
import { DairyComponent } from './dairy/dairy.component';
import { CustomMaterialModule } from 'src/app/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserModule } from '@angular/platform-browser';
import { StoreFeatureModule, StoreModule } from '@ngrx/store';
import { productsReducer } from './products.reducer';
import { EffectsModule } from '@ngrx/effects';
import { productEffect } from './products.effects';
import { ShoppingQuantityComponent } from './shopping-quantity/shopping-quantity.component';
import { FruitComponent } from './fruits/fruit/fruit.component';

@NgModule({
  declarations: [FruitsComponent, DairyComponent, ShoppingQuantityComponent, FruitComponent],
  imports: [
    CustomMaterialModule,
    FlexLayoutModule,
    BrowserModule,
    CommonModule,
    StoreModule.forFeature('productDetails', productsReducer),
    EffectsModule.forFeature([productEffect])
  ],
    exports: [FruitsComponent]
})
export class ProductsModule { }
