import { Component, OnInit } from '@angular/core';
import {LogsService} from '../services/logs.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-logs-detail',
  templateUrl: './logs-detail.component.html',
  styleUrls: ['./logs-detail.component.css']
})
export class LogsDetailComponent implements OnInit {

  id: any;

  constructor(
    private logsService: LogsService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    console.log(this.id);
  }

}
