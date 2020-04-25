import { Component, OnInit } from '@angular/core';
import { FormBuilder } from "@angular/forms";
import { AuthService } from "../../services/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: 'login.component.html',
  styles: []
})
export class LoginComponent implements OnInit {

  loginForm

  constructor(private formBuilder: FormBuilder,
              private authService: AuthService,
              private router: Router) {
    this.loginForm = this.formBuilder.group({
      username: 'admin',
      password: '123456'
    })
  }

  ngOnInit(): void {

  }

  login(data): void {
    if(this.authService.loginUser(data.username, data.password)){
      this.router.navigate(["list"])
    }
  }

}
