import { Component, OnInit } from '@angular/core';
import {AuthService} from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginFormObj = {
    email: '',
    password: ''
  };

  signUpFormObj = {
    firstName: '',
    lastName: '',
    email: '',
    password: ''
  };


  constructor(public auth: AuthService) { }

  loginSubmit() {
    this.auth.login(this.loginFormObj.email, this.loginFormObj.password)
        .subscribe(data => {
          console.log(data);
        });
  }

  signUpSubmit() {
    this.auth.signUp(this.signUpFormObj.firstName, this.signUpFormObj.password, this.signUpFormObj.email, this.signUpFormObj.password)
        .subscribe(data => {
          console.log(data);
        });
  }



  ngOnInit() {
  }

}
