import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Observable } from 'rxjs';

export class HttpInterceptorHandler implements HttpHandler {
  constructor(
    private next: HttpHandler,
    private interceptor: HttpInterceptor
  ) {}

  handle(req: HttpRequest<any>): Observable<HttpEvent<any>> {
    // execute an interceptor and pass the reference to the next handler
    return this.interceptor.intercept(req, this.next);
  }
}
