import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, retry } from 'rxjs';
import { UserModel } from '../Models/user-model';

@Injectable({
  providedIn: 'root'
})
export class AppServicesService {

  private _url: string = 'https://5663-2401-4900-4824-9f2d-da3-2333-c885-bd2e.in.ngrok.io';

  constructor(private _http: HttpClient) { }

  createStudent(user: UserModel): Observable<any> {
    return this._http.post<any>(this._url + '/auth/create-student', user);
  }

  createFaculty(user: UserModel): Observable<any> {
    return this._http.post<any>(this._url + '/auth/create-teacher', user);
  }

  checkUser(user: any): Observable<any> {
    return this._http.post<any>(this._url + '/auth/create-token', user);
  }

  createClass(classObj: any): Observable<any> {
    return this._http.post<any>(this._url + '/attendance/create-class', classObj);
  }

  getUser(): Observable<any> {
    return this._http.get<any>(this._url + '/attendance/get-user-details');
  }
}
