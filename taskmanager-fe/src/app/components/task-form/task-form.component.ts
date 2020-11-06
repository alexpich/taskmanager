import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { TaskService } from '../../services/task.service';
import { Task } from '../../models/Task';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css'],
})
export class TaskFormComponent implements OnInit {
  task: Task;

  @Output() newTask: EventEmitter<Task> = new EventEmitter();

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {}

  addTask(title, status, category) {
    if (!title || !status || !category) {
      alert('Please make sure all fields are not missing.');
    } else {
      this.taskService
        .saveTask({ title, status, category } as Task)
        .subscribe((task) => {
          this.newTask.emit(task);
        });
    }
  }
}
