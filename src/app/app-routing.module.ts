import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LogsListComponent} from './logs-list/logs-list.component';
import {LogsDetailComponent} from './logs-detail/logs-detail.component';

const routes: Routes = [
  { path: '', redirectTo: 'logs-list', pathMatch: 'full' },
  { path: 'logs-list', component: LogsListComponent },
  { path: 'logs-detail/:id', component: LogsDetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot((routes))],
  exports: [RouterModule]
})

export class AppRoutingModule {}
