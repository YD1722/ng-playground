import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { InterceptorTwo, InterceptorOne } from './interceptors/interceptors';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, CommonModule],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: InterceptorOne,
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: InterceptorTwo,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
