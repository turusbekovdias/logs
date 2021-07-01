import { Component, OnInit } from '@angular/core';
import {LogsService} from '../services/logs.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-logs-list',
  templateUrl: './logs-list.component.html',
  styleUrls: ['./logs-list.component.css']
})
export class LogsListComponent implements OnInit {

  logs: any;

  constructor(private logsService: LogsService,
              private router: Router) { }

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

  doConsole(index: number) {
    console.log(index);
    this.router.navigate(['/logs-detail/'+ this.logs[index].id])
  }

}
