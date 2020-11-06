import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Task } from '../models/Task';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  tasksUrl: string = 'http://localhost:8080/task';

  tasks: Task[];

  constructor(private http: HttpClient) {}

  getTasks(): Observable<Task[]> {
    console.log('Fetching tasks.');
    return this.http.get<Task[]>(this.tasksUrl);
  }

  saveTask(task: Task): Observable<Task> {
    console.log('Saving task.');
    return this.http.post<Task>(this.tasksUrl, task, httpOptions);
  }
}
