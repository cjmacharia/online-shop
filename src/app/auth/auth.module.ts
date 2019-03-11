import { NgModule } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { CustomMaterialModule } from '../material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    CustomMaterialModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    BrowserModule
  ],
  exports:[]
})

export class AuthModule{ }