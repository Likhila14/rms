import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public user: any;
  public fname:any;
  public lname:any;
  public uid:any;
  public dob:any;
  public pass:any;
  public email:any;
  public phone:any;
  public gen:any; 
  constructor() { }
}
