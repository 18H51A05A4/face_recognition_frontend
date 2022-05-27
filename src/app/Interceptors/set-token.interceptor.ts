import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpHeaders
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class SetTokenInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const headers = new HttpHeaders().set("Authorization", "Bearer " + localStorage.getItem("Access_Token"));
    const req = request.clone({
      headers: headers
    });
    return next.handle(req);
  }
}
