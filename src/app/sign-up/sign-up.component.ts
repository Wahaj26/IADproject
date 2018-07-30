
import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/Router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  constructor(private user: UserService, private router: Router) { }

  forms = new FormGroup(
    {
      name: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      userName: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
      designation: new FormControl('', [Validators.required])
    });

  ngOnInit() {
  }

  userCreate() {
    if (this.forms.valid) {
      this.user.createUser(this.forms.value)
        .subscribe(result => {
          console.log('ye baat h k', result.status);
          const r = result.json();
          localStorage.setItem('loginedUser', this.forms.value.name);
          localStorage.setItem('loginedUserId', this.forms.value.userName);
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
