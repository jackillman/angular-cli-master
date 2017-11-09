import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

import { CheckService } from '../shared/check.service';


@Component({
  selector: 'login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  constructor(private router:Router, private user:CheckService) { }

  ngOnInit() {
  }
loginUser(loginForm:NgForm){
 // event.preventDefault();
  console.log(loginForm);
  let user = loginForm.form.value.user;
  let password = loginForm.form.value.pass;
  
 
 
  if(user == "admin" && password == "admin"){
    this.user.setUserLoggedIn();
   this.router.navigate(["dashboard"]);
  }
  
}
}
