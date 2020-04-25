import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  loginUser(username: String, password: String){
    if(username == "admin" && password == "123456"){
      localStorage.setItem("login", "true")
      return true
    }
    return false
  }

  logout(){
    localStorage.removeItem("login")
  }

  loggedIn(): boolean {
    return localStorage.getItem("login") !== null
  }

}
