import { Injectable } from '@angular/core';
import { Http } from '@angular/http';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  url = 'http://localhost:3000';
  constructor(private http: Http) { }

  createUser(data) {
    return this.http.post(this.url + '/users/signup', data);
  }

  LoginUser(data) {
    return this.http.post(this.url + '/users/signin', data);
  }
}
