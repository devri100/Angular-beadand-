import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Employee} from "../models/Employee";
import { Observable, BehaviorSubject } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class EmployeeService {
    employeeUrl = "https://jsonplaceholder.typicode.com/users"

    private employees = new BehaviorSubject<Employee[]>(null)

    constructor(private http: HttpClient) {
    }

    getEmployees(): Observable<Employee[]> {
        let stored:Employee[] = this.getEmployeesFromLocalStorage()
        if(stored === null) {
            this.downloadEmployees()
        } else {
            this.employees.next(stored)
        }

        return this.employees as Observable<Employee[]>
    }

    private getEmployeesFromLocalStorage(): Employee[] {
        return JSON.parse(localStorage.getItem("employees"))
    }

    downloadEmployees(): void {
        console.log("Letöltés...")
        this.http.get<Employee[]>(this.employeeUrl).subscribe(response => {
            localStorage.setItem("employees", JSON.stringify(response))
            this.employees.next(response)
        })
    }

    deleteEmployee(employee: Employee): void {
        let newEmployees = this.getEmployeesFromLocalStorage().filter(e => e.id !== employee.id)
        localStorage.setItem("employees", JSON.stringify(newEmployees))
        this.employees.next(newEmployees)
    }

    updateEmployee(employee: Employee): void {
        let newEmployees = this.getEmployeesFromLocalStorage()
        let index = newEmployees.findIndex(e => e.id === employee.id)
        newEmployees[index] = employee
        localStorage.setItem("employees", JSON.stringify(newEmployees))
        // this.employees.next(newEmployees)
    }

    insertEmployee(employee: Employee): void {
        let newEmployees = this.getEmployeesFromLocalStorage()
        employee.id = newEmployees[newEmployees.length - 1].id + 1
        newEmployees.push(employee)
        localStorage.setItem("employees", JSON.stringify(newEmployees))
    }


}
