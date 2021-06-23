import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LogsListComponent } from './logs-list/logs-list.component';
import { LogsDetailComponent } from './logs-detail/logs-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    LogsListComponent,
    LogsDetailComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
