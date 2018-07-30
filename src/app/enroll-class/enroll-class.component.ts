import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/Router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AbstractControl, ValidationErrors } from '@angular/forms';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-enroll-class',
  templateUrl: './enroll-class.component.html',
  styleUrls: ['./enroll-class.component.css']
})
export class EnrollClassComponent implements OnInit {

  constructor(private employee: EmployeeService, private router: Router) { }
  forms = new FormGroup({
    // tslint:disable-next-line
    proj_id: new FormControl('', [Validators.required]),
    key: new FormControl('', [Validators.required]),
  });

  ngOnInit() {
  }


  EnrollProject() {
    const empid = localStorage.getItem('loginedUserId');
    const empname = localStorage.getItem('loginedUser');
    if (empid && empname) {
      const obj = {
        form: this.forms.value,
        emp_id: empid,
        emp_name: empname
      };
      this.employee.createEmployees(obj)
        .subscribe(result => {
          const r = result;
          console.log('result', r);
          document.getElementById('inpass').style.display = 'none';
          this.router.navigate(['/enrollClassList']);
        }, error => {
          const msg = error.error.msg;
          console.log('error', msg);
          document.getElementById('inpass').innerHTML = msg;

        }
        );
    } else {
      this.router.navigate(['/signin']);

    }
  }
}
