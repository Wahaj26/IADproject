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
export class ProjectService {
  url = 'http://localhost:3000';

  constructor(private http: HttpClient) { }
  createProject(obj) {
    return this.http.post(this.url + '/projects/createProject', obj);
  }


// my own projects
  getProjects(owner_id: string): Observable<any> {
    return this.http.get(this.url + '/projects/myProjects/' + owner_id, httpOptions).pipe(
      map(this.extractData));
  }

  // my enrolled projects
  getEnrolledProjects(emp_id: string): Observable<any> {
    return this.http.get(this.url + '/projects/enrolledProjects/' + emp_id, httpOptions).pipe(
      map(this.extractData));
  }



  private extractData(res: Response) {
    const body = res;
    return body || {};
  }
}
