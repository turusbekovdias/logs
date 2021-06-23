import { Component, OnInit } from '@angular/core';
import { LogMainServer } from '../models/log-main-server';
import {LogsService} from '../services/logs.service';

@Component({
  selector: 'app-logs-list',
  templateUrl: './logs-list.component.html',
  styleUrls: ['./logs-list.component.css']
})
export class LogsListComponent implements OnInit {

  logs?: LogMainServer[];

  constructor(private logsService: LogsService) { }

  ngOnInit(): void {
    this.logsService.getLogsList().subscribe(logs => this.logs = logs);
  }

}
