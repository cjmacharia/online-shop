import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserModule } from '@angular/platform-browser';
import { SidenavComponent } from './home/sidenav/sidenav.component';
import { CustomMaterialModule } from '../material';

@NgModule({

  declarations: [
    SidenavComponent
  ],
  imports: [
    CustomMaterialModule,
    FlexLayoutModule,
    BrowserModule
  ],
  exports: [
    SidenavComponent
  ]
})

export class HomeModule {}