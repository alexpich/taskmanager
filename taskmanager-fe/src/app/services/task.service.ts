import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Task } from '../models/Task';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  tasks: Task[];
  data: Observable<any>;

  constructor() {
    this.tasks = [
      {
        title: 'Learn piano',
        status: 'In progress',
        category: 'Music',
      },
      {
        title: 'Do 200 push ups',
        status: 'In progress',
        category: 'Fitness',
      },
      {
        title: 'Email Kathy',
        status: 'In progress',
        category: 'Work',
      },
    ];
  }

  getData() {
    this.data = new Observable((observer) => {
      setTimeout(() => {
        observer.next(1);
      }, 1000);
      setTimeout(() => {
        observer.next(2);
      }, 2000);
    });
    return this.data;
  }

  getTasks(): Task[] {
    console.log('Fetching tasks.');
    return this.tasks;
  }
}
