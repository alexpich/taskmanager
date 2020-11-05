import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Task } from '../../models/Task';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  tasks: Task[];
  data: any;

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.dataService.getData().subscribe((data) => {
      console.log(data);
    });
    this.tasks = this.dataService.getTasks();
  }
}
