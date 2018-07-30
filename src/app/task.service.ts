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
export class TaskService {

  url = 'http://localhost:3000';


  constructor(private http: HttpClient) { }

  // get tasks of specific project & employee
  getTasks(pid: string, eid: string): Observable<any> {
    return this.http.get(this.url + '/tasks/admin/' + pid + '/' + eid, httpOptions).pipe(
      map(this.extractData));
  }

  // create task
  createTask(obj) {
    return this.http.post(this.url + '/tasks/create', obj);
  }

  // delete task
  deleteTask(tid: string) {
    return this.http.delete(this.url + '/tasks/deleteTask/' + tid, httpOptions);
  }

  // update task status
  updateTask(tid, data) {
    return this.http.put(this.url + '/tasks/updateTask/' + tid, data);
  }

  private extractData(res: Response) {
    const body = res;
    return body || {};
  }
}
