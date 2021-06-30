import { Component, OnInit } from '@angular/core';
import {LogsService} from '../services/logs.service';

@Component({
  selector: 'app-logs-list',
  templateUrl: './logs-list.component.html',
  styleUrls: ['./logs-list.component.css']
})
export class LogsListComponent implements OnInit {

  logs: any;

  constructor(private logsService: LogsService) { }

  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    this.logsService.getAll()
      .subscribe(
        data => {
          this.logs = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

}
