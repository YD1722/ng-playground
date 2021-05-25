import { Component, Inject } from '@angular/core';
import { Observable } from 'rxjs';
import {
  HTTP_INTERCEPTORS,
  HttpClient,
  HttpInterceptor,
  HttpRequest,
  HttpXhrBackend,
} from '@angular/common/http';
import { HttpInterceptorHandler } from './interceptors/HttpInterceptorHandler';
import { InterceptorOne, InterceptorTwo } from './interceptors/interceptors';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
})
export class AppComponent {
  response_1: Observable<any> | undefined;
  response_2: Observable<any> | undefined;
  title = 'ng-playground';

  constructor(
    private backend: HttpXhrBackend,
    private http: HttpClient,
    @Inject(HTTP_INTERCEPTORS) private interceptors: HttpInterceptor[]
  ) {}

  request() {
    const url = 'https://jsonplaceholder.typicode.com/posts/1';
    this.response_1 = this.http.get(url, { observe: 'body' });
  }

  requestUsingCustomHandlers() {
    const req = new HttpRequest(
      'GET',
      'https://jsonplaceholder.typicode.com/posts/1'
    );

    const handler_1 = new HttpInterceptorHandler(
      this.backend,
      new InterceptorOne()
    );

    const handler_2 = new HttpInterceptorHandler(
      handler_1,
      new InterceptorTwo()
    );

    this.response_2 = handler_2.handle(req);
  }
}
