import { Injectable } from '@angular/core';
import { Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LogsService {

  constructor() { }

  getLogsList(): Observable<LogMainServer[]>{
    const logs = of(LogMainServer);
    return logs;
  }

}
