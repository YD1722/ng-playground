import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppService } from './app.service';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { GrandChildComponent } from './grand-child/grand-child.component';
import { APP_REPORTER } from './report.token';
import { BrowserReporterService } from './report/browser-reporter.service';
import { UserReporterService } from './report/user-reporter.service';
import { GrandGrandChildComponent } from './grand-grand-child/grand-grand-child.component';

@NgModule({
  declarations: [
    AppComponent,
    ParentComponent,
    ChildComponent,
    GrandChildComponent,
    GrandGrandChildComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [
    AppService,
    { provide: APP_REPORTER, useExisting: BrowserReporterService, multi: true },
    { provide: APP_REPORTER, useExisting: UserReporterService, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
