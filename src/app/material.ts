import { NgModule } from '@angular/core';
import {
  MatButtonModule, MatCardModule, MatDialogModule, MatInputModule, MatTableModule,
  MatToolbarModule, MatMenuModule,MatIconModule, MatProgressSpinnerModule,MatSnackBarModule,MatSidenavModule,MatListModule, MatTabsModule
} from '@angular/material';
@NgModule({
  imports: [
  MatToolbarModule,
  MatListModule,
  MatButtonModule, 
  MatCardModule,
  MatTabsModule,
  MatInputModule,
  MatDialogModule,
  MatTableModule,
  MatMenuModule,
  MatIconModule,
  MatProgressSpinnerModule,
  MatSnackBarModule,
  MatSidenavModule
  ],
  exports: [
   MatToolbarModule, 
   MatButtonModule, 
   MatCardModule, 
   MatListModule,
   MatTabsModule,
   MatInputModule, 
   MatDialogModule, 
   MatTableModule, 
   MatMenuModule,
   MatIconModule,
   MatProgressSpinnerModule,
   MatSnackBarModule,
   MatSidenavModule
   ],
})
export class CustomMaterialModule { }