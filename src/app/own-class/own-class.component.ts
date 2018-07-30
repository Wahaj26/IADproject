import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../project.service';
import { Router } from '@angular/Router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AbstractControl, ValidationErrors } from '@angular/forms';

@Component({
  selector: 'app-own-class',
  templateUrl: './own-class.component.html',
  styleUrls: ['./own-class.component.css']
})
export class OwnClassComponent implements OnInit {

  constructor(private project: ProjectService, private router: Router) { }

  forms = new FormGroup({
    // tslint:disable-next-line
    name: new FormControl('', [Validators.required]),
    proj_id: new FormControl('', [Validators.required]),
    key: new FormControl('', [Validators.required]),
  });

  ngOnInit() {
  }

  CreateProject() {
    const userID = localStorage.getItem('loginedUserId');
    const obj = {
      form: this.forms.value,
      ui: userID
    };
    this.project.createProject(obj)
      .subscribe(result => {
        const r = result;
        document.getElementById('inpass').style.display = 'none';
        this.router.navigate(['/ownClassList']);
      }, error => {
        const e = error.json();
        console.error('NICE ERROR', e.msg);
        document.getElementById('inpass').innerHTML = e.msg;

      }
      );

  }
}
