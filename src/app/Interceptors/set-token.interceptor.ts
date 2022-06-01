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
    console.log(request);
    let url = 'http://localhost:8000';
    if((request.url != url + '/auth/create-student') && (request.url != url + '/auth/create-teacher') && (request.url != url + '/auth/create-token')) {
      const headers = new HttpHeaders().set("Authorization", "Bearer " + localStorage.getItem("Access_Token"));
      request = request.clone({
        headers: headers
      });
    }
    return next.handle(request);
  }
}
