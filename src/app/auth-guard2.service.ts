import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/Router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard2Service implements CanActivate {

  base_url: string;

  constructor(private router: Router) { }

  canActivate() {
    // Check to see if a user has a valid token
    if (this.isNotAuthenticated()) {
      // If they do, return true and allow the user to load app
      return true;
    }

    // If not, they redirect them to the login page
    this.router.navigate(['/dashboard']);
    return false;
  }

  isNotAuthenticated() {
    // get the auth token from localStorage
    const token = localStorage.getItem('isLogin');

    // check if token is set, then...
    if (token === 'false') {
      return true;
    }

    return false;
  }
}

