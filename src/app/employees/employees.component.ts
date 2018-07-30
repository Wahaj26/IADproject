import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/Router';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {
  employees: any;
  constructor(private _Activatedroute: ActivatedRoute, private employee: EmployeeService) { }

  ngOnInit() {
    const pid = this._Activatedroute.snapshot.params['pid'];
    this.employee.getEmployees(pid)
      .subscribe(res => {
        this.employees = res;
        console.log('rep dsa', this.employees);
      }, err => {
        console.log(err);
      });

  }

}
