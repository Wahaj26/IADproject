import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../project.service';
import { Router } from '@angular/Router';

@Component({
  selector: 'app-own-class-list',
  templateUrl: './own-class-list.component.html',
  styleUrls: ['./own-class-list.component.css']
})
export class OwnClassListComponent implements OnInit {
  projects: any;
  constructor(private project: ProjectService, private router: Router) { }

  ngOnInit() {
    const currentlyLogined = localStorage.getItem('loginedUserId');
    this.project.getProjects(currentlyLogined)
      .subscribe(res => {
        this.projects = res;
        console.log('rep dsa' , this.projects);
      }, err => {
        console.log(err);
      });
  }

}

