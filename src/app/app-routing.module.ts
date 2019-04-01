import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthRoutingModule } from './auth/auth-routing.module';
import { UserRoutingModule } from './user/user.routing.module';
import { ProductsRoutingModule } from './user/home/products/product-routing.module';

const routes: Routes = [
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    ProductsRoutingModule,
    UserRoutingModule,
  AuthRoutingModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
