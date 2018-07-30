import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/Router';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-employee-view-task',
  templateUrl: './employee-view-task.component.html',
  styleUrls: ['./employee-view-task.component.css']
})
export class EmployeeViewTaskComponent implements OnInit {
  tasks: any;
  constructor(private _Activatedroute: ActivatedRoute, private task: TaskService, private router: Router) { }


  ngOnInit() {
    const pid = this._Activatedroute.snapshot.params['pid'];
    const eid = this._Activatedroute.snapshot.params['eid'];
    this.task.getTasks(pid, eid)
      .subscribe(res => {
        this.tasks = res;
      }, err => {
        console.log(err);
      });

  }
  updateTaskStatus(tid) {
    const status = (<HTMLInputElement>document.getElementById(tid)).value;
    console.log('idd', status);
    const data = {
      status: status
    };
    this.task.updateTask(tid, data)
      .subscribe(res => {
        console.log('status updates :', res);
        this.ngOnInit();
      }, err => {
        console.log('error', err);
      });

  }
}
