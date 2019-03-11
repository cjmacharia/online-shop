import { Component, OnInit } from '@angular/core';
import {  FormBuilder, Validators, FormGroup, FormControl, FormGroupDirective, NgForm } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material';
import { AuthService } from '../../services/auth.service';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import * as fromRoot from '../../app.reducer';

export class MyErrorStateMatcher implements  ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const invalidCtrl = !!(control && control.invalid && control.parent.dirty);
    const invalidParent = !!(control && control.parent && control.parent.invalid && control.parent.dirty);
    return (invalidCtrl || invalidParent);
  }
}
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
 matcher = new MyErrorStateMatcher();
 registerForm: FormGroup;
  isLoading$: Observable<boolean>;

  constructor(private fb: FormBuilder, private authService: AuthService, private store: Store<fromRoot.State> ) { 
    this.registerForm = this.fb.group({
      'name': [''],
      'email': ['', Validators.required],
      'password': ['', Validators.required],
      'cPassword': ['', Validators.required],
  
    }, {validator: this.checkPassword})
  }

  ngOnInit() {
    this.isLoading$ = this.store.select(fromRoot.getIsLoading);
  }

  get name () {
    return this.registerForm.get('name');
  }
  get email () {
    return this.registerForm.get('email');
  }
  get password () {
    return this.registerForm.get('password');
  }
  get cPassword () {
    return this.registerForm.get('cPassword');
  }
checkPassword(group: FormGroup) {
  let pass = group.controls.password.value;
  let cPass = group.controls.cPassword.value;
  return pass === cPass? null : {notSame: true}

}

 onSubmit() { 
   this.authService.registerUser(this.registerForm.value);
 }
}
