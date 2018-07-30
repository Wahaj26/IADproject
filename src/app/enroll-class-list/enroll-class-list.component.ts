import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../project.service';
import { Router } from '@angular/Router';

@Component({
  selector: 'app-enroll-class-list',
  templateUrl: './enroll-class-list.component.html',
  styleUrls: ['./enroll-class-list.component.css']
})
export class EnrollClassListComponent implements OnInit {

  projects: any;
  constructor(private project: ProjectService, private router: Router) { }

  ngOnInit() {
    const currentlyLogined = localStorage.getItem('loginedUserId');
    this.project.getEnrolledProjects(currentlyLogined)
      .subscribe(res => {
        this.projects = res;
        console.log('rep dsa', this.projects);
      }, err => {
        console.log(err);
      });
  }

  myenrollprojects(pid) {
    const eid = localStorage.getItem('loginedUserId');
    this.router.navigate(['/employeeViewTask', pid, eid]);

  }

}
