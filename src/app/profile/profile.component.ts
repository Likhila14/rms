import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
public user: any;
public fname:any;
public lname:any;
public uid:any;
public dob:any;
public pass:any;
public email:any;
public phone:any;
public gen:any; 
  constructor(private auth: AuthService) {

   }

  ngOnInit(): void { 
    this.fname = this.auth.fname ;
    this.lname =  this.auth.lname ;
    this.uid =  this.auth.uid ;
    this.phone =  this.auth.phone;
    this.dob =  this.auth.dob;
    this.pass  =  this.auth.pass;
    this.email =  this.auth.email;
    this.gen =  this.auth.gen;
    console.log(this.auth.fname);
    console.log("hi");
  }

}
