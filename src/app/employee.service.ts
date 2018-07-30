import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { Http } from '@angular/http';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  url = 'http://localhost:3000';


  constructor(private http: HttpClient) { }

  // gel empoyees of specific project
  getEmployees(pid: string): Observable<any> {
    return this.http.get(this.url + '/employees/' + pid, httpOptions).pipe(
      map(this.extractData));
  }

  // create employees
  createEmployees(obj) {
    return this.http.post(this.url + '/employees/create', obj);
  }
  private extractData(res: Response) {
    const body = res;
    return body || {};
  }
}
