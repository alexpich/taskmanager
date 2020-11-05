import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../services/task.service';
import { Task } from '../../models/Task';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  tasks: Task[];
  data: any;

  constructor(private taskService: TaskService) {}

  ngOnInit() {
    this.taskService.getData().subscribe((data) => {
      console.log(data);
    });
    this.tasks = this.taskService.getTasks();
  }
}
