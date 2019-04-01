import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserModule } from '@angular/platform-browser';
import { SidenavComponent } from './home/sidenav/sidenav.component';
import { CustomMaterialModule } from '../material';
import { StoreModule } from '@ngrx/store';
import { categoryReducer } from './user.reducer';
import { ProductsComponent } from './home/products/products.component';
import { RouterModule } from '@angular/router';
import { ProductsModule } from './home/products/products.module';
@NgModule({

  declarations: [
    SidenavComponent,
    ProductsComponent
  ],
  imports: [
    ProductsModule,
    RouterModule,
    CustomMaterialModule,
    FlexLayoutModule,
    BrowserModule,
   StoreModule.forFeature('userDetails', categoryReducer)
  ],
  exports: [
    SidenavComponent,
    ProductsComponent
  ]
})

export class HomeModule {}