import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/Router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AbstractControl, ValidationErrors } from '@angular/forms';
@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})

export class SignInComponent implements OnInit {

  constructor(private user: UserService, private router: Router) { }
  forms: FormGroup;

  ngOnInit() {
    this.createForm();
  }
  get userName() {
    return this.forms.get('userName');
  }
  get password() {
    return this.forms.get('password');
  }

  private createForm() {
    this.forms = new FormGroup({
      // tslint:disable-next-line
      userName: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required])
    });
  }

  Login() {
    if (this.forms.valid) {
      this.user.LoginUser(this.forms.value)
        .subscribe(result => {
          const r = result.json();
          console.log('name : ', r.userInfo.name);
          console.log('login succesfuly ', r.userInfo.name);
          document.getElementById('inpass').style.display = 'none';
          localStorage.setItem('loginedUser', r.userInfo.name);
          localStorage.setItem('loginedUserId', r.userInfo.userName);
          localStorage.setItem('isLogin', 'true');
          this.router.navigate(['/dashboard']);
        }, error => {
          const e = error.json();
          console.error('NICE ERROR', e.msg);
          document.getElementById('inpass').innerHTML = e.msg;
        }
        );
    } else {
      console.log('null  values');
    }
  }
}
