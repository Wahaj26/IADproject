import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/Router';
import { ActivatedRoute } from '@angular/Router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AbstractControl, ValidationErrors } from '@angular/forms';
import { TaskService } from '../task.service';
import { IMyDpOptions } from 'mydatepicker';

@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.css']
})
export class CreateTaskComponent implements OnInit {

  constructor(private task: TaskService, private router: Router, private _Activatedroute: ActivatedRoute) { }
  public myDatePickerOptions: IMyDpOptions = {
    // other options...
    dateFormat: 'dd.mm.yyyy',
  };

  forms = new FormGroup({
    // tslint:disable-next-line
    task: new FormControl('', [Validators.required]),
    deadline: new FormControl('', [Validators.required]),
    status: new FormControl('', [Validators.required])
  });


  ngOnInit() { }

  createTask() {
    const pid = this._Activatedroute.snapshot.params['pid'];
    const eid = this._Activatedroute.snapshot.params['eid'];
    const oid = localStorage.getItem('loginedUserId');
    if (oid) {
      const obj = {
        form: this.forms.value,
        proj_id: pid,
        emp_id: eid,
        owner_id: oid
      };
      this.task.createTask(obj)
        .subscribe(result => {
          this.router.navigate(['/adminViewTask', pid, eid]);
        }, error => {
          const msg = error.error.msg;
          console.log('error', msg);
        }
        );
    } else {
      this.router.navigate(['/signin']);

    }
  }
}
