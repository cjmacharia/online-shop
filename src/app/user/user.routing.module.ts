import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import  { HomeComponent } from './home/home.component';
import  {  AuthGuard } from '../auth/auth.guard';
import { SidenavComponent } from './home/sidenav/sidenav.component'
import { FruitsComponent } from './home/products/fruits/fruits.component';
import { DairyComponent } from './home/products/dairy/dairy.component';
const routes: Routes = [
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard], children: [
    {
      path: 'fruits', component: FruitsComponent,  
    },
      { path: 'dairy', component: DairyComponent,  },
  ]}
]
@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ],
})
export class UserRoutingModule {}