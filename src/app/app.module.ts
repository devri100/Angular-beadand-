import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule} from "@angular/common/http";

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ListComponent} from './components/list/list.component';
import {DetailsComponent} from './components/details/details.component';
import {AuthService} from "./services/auth.service";
import {EmployeeService} from "./services/employee.service";
import {AuthGuard} from "./guards/auth.guard";
import { LoginComponent } from './components/login/login.component';
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
    declarations: [
        AppComponent,
        ListComponent,
        DetailsComponent,
        LoginComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        ReactiveFormsModule
    ],
    providers: [AuthService, EmployeeService, AuthGuard],
    bootstrap: [AppComponent]
})
export class AppModule {
}
