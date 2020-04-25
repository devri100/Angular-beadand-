import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {EmployeeService} from "../../services/employee.service";
import {FormBuilder, FormControl, Validators} from "@angular/forms";
import {Employee} from "../../models/Employee";

@Component({
    selector: 'app-details',
    templateUrl: 'details.component.html',
    styles: []
})
export class DetailsComponent implements OnInit {

    employee: Employee = null
    form
    id = null

    constructor(private route: ActivatedRoute,
                private employeeService: EmployeeService,
                private formBuilder: FormBuilder,
                private router: Router) {
    }

    ngOnInit(): void {
        this.route.paramMap.subscribe(params => {
            if(params.has("id")) {
                this.id =  +params.get("id")
                this.employeeService.getEmployees().subscribe(employees => {
                    this.employee = employees.find(e => e.id == this.id)
                    this.form = this.formBuilder.group(this.employee)
                })
            } else {
                this.employee = new Employee()
                this.form = this.formBuilder.group(this.employee)
            }
        })
    }

    save(data){
        if(!this.form.invalid) {
            if (this.id !== null) {
                this.employeeService.updateEmployee(data as Employee)
            } else {
                this.employeeService.insertEmployee(data as Employee)
            }
            this.router.navigate(["list"])
        }
    }

}
