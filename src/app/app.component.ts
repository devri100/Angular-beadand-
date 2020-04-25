import {Component, OnInit} from '@angular/core';
import { AuthService} from "./services/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styles: []
})
export class AppComponent {
  title = "Hello"

  constructor(private authService: AuthService,
              private router: Router) {

  }

  loggedIn() {
    return this.authService.loggedIn()
  }

  logout(){
    this.authService.logout()
    this.router.navigate(["/login"])
  }
}
