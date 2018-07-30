import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/Router';
import { TaskService } from '../task.service';


@Component({
  selector: 'app-admin-view-task',
  templateUrl: './admin-view-task.component.html',
  styleUrls: ['./admin-view-task.component.css']
})
export class AdminViewTaskComponent implements OnInit {
  tasks: any;
  constructor(private _Activatedroute: ActivatedRoute, private task: TaskService, private router: Router) { }

  ngOnInit() {
    const pid = this._Activatedroute.snapshot.params['pid'];
    const eid = this._Activatedroute.snapshot.params['eid'];
    this.task.getTasks(pid, eid)
      .subscribe(res => {
        this.tasks = res;
        console.log('all object :', this.tasks);
      }, err => {
        console.log(err);
      });


  }

  deleteTask(proj_id, emp_id, id) {
    if (confirm('Are you sure to delete this task')) {
      console.log(id);
      this.task.deleteTask(id)
        .subscribe(res => {
          console.log('delete response :', res);

          console.log('before:', this.tasks);
          this.ngOnInit();
          console.log('after:', this.tasks);
        }, err => {
          console.log('error', err);
        });
    }

  }

}
