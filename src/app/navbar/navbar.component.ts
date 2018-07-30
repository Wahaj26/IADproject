import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }


  Logout() {
    localStorage.removeItem('loginedUser');
    localStorage.removeItem('loginedUserId');
    localStorage.setItem('isLogin', 'false');
  }
}
