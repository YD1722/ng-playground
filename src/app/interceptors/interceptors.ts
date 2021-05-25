import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class InterceptorOne implements HttpInterceptor {
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const modified = req.clone({ setHeaders: { 'Custom-Header-1': '1' } });
    return next.handle(modified);
  }
}

@Injectable()
export class InterceptorTwo implements HttpInterceptor {
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const modified = req.clone({ setHeaders: { 'Custom-Header-2': '2' } });
    return next.handle(modified);
  }
}
