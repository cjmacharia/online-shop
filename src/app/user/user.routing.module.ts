import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import  { HomeComponent } from './home/home.component';
import  {  AuthGuard } from '../auth/auth.guard';
import { SidenavComponent } from './home/sidenav/sidenav.component'
const routes: Routes = [
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard] }
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