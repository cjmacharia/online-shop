import { Component, OnInit } from '@angular/core';
import {  FormBuilder, Validators, FormGroup } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Store } from '@ngrx/store';
import * as fromRoot from '../../app.reducer';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  isLoading$: Observable<boolean>;
  constructor(private fb: FormBuilder, private authService: AuthService, private store: Store<fromRoot.State> ) { 
    this.loginForm = this.fb.group({
      'email': ['', Validators.required],
      'password': ['', Validators.required],
    })
  }

  ngOnInit() {
    this.isLoading$ = this.store.select(fromRoot.getIsLoading)
  }

  get email () {
    return this.loginForm.get('email');
  }
  get password () {
    return this.loginForm.get('password');
  }
  onSubmit() { 
    this.authService.loginUser(this.loginForm.value);
  }

}
