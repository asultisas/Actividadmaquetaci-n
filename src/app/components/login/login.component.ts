import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";
import { UserModel } from '../../models/User.model';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: UserModel = new UserModel();

  constructor(
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.user.name="",
    this.user.password=""
  }

submit(){
  this.router.navigate['/Index']
}

  sendData(){
    //console.log("formulario: ", form)
    console.log("name :",this.user.name);
    console.log("password :",this.user.password);
  }

}
