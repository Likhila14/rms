import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import {FormControl, FormGroup, FormBuilder, Validators} from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  myForm: FormGroup;
  constructor(private fb: FormBuilder , private auth: AuthService , private router: Router) { }
  
    ngOnInit(): void {
      this.myForm = this.fb.group({
       UserId: new FormControl('',Validators.required),
       Password : new FormControl('',[Validators.required,Validators.minLength(6)]),
        
      });
    }
    loginUser(){
      console.log(this.myForm.value);
    }
}