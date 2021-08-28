import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import {FormControl, FormGroup, FormBuilder, Validators} from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  myForm: FormGroup;
  constructor(private fb: FormBuilder , private auth: AuthService , private router: Router) { }

  ngOnInit(): void {
    this.myForm = this.fb.group({
      FirstName:new FormControl('',Validators.required),
      LastName: new FormControl('',Validators.required),
      UserId: new FormControl('',Validators.required),
      Dob: new FormControl('',Validators.required),
      Password : new FormControl('',[Validators.required,Validators.minLength(6)]),
      CPassword : new FormControl('',[Validators.required,Validators.minLength(6)]),
      email: new FormControl('', [Validators.required,Validators.email]),
      phone: new FormControl('',Validators.required), 
      gender: new FormControl('',Validators.required), 
    });
  }

  registerUser(){
    console.log(this.myForm.value);
  }

}
