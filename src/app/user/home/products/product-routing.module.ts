import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'
import { FruitsComponent } from './fruits/fruits.component';
import { DairyComponent } from './dairy/dairy.component';
import { AuthGuard } from '../../../auth/auth.guard';

const routes: Routes = [
  // { path: 'home/fruits', component: FruitsComponent,  },
  // {path: 'home/dairy', component: DairyComponent, }
]

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})

export class ProductsRoutingModule {}