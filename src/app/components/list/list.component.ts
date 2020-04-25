import { Component, OnInit } from '@angular/core';
import { Employee } from "../../models/Employee";
import { EmployeeService } from "../../services/employee.service";

@Component({
  selector: 'app-list',
  templateUrl: 'list.component.html',
  styles: []
})
export class ListComponent implements OnInit {

  employees:Employee[];

  constructor(private employeeService: EmployeeService) { }

  ngOnInit(): void {
    this.employeeService.getEmployees().subscribe(employees => {
      this.employees = employees
    })
  }

  onRestore(){
    this.employeeService.downloadEmployees()
  }

  onDelete(employee: Employee): void{
    this.employeeService.deleteEmployee(employee)
  }

  onEdit(employee: Employee): void{

  }

}
