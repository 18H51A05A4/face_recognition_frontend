import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, retry } from 'rxjs';
import { UserModel } from '../Models/user-model';

@Injectable({
  providedIn: 'root'
})
export class AppServicesService {

  private _url: string = 'https://1f7a-115-98-82-154.in.ngrok.io';

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

  getAllStudents(): Observable<any[]> {
    return this._http.get<any[]>(this._url + '/attendance/get-students');
  }

  getTodaysClasses(): Observable<any[]> {
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0');
    var yyyy = today.getFullYear();
    const date = yyyy + '-' + mm + '-' + dd;
    return this._http.post<any[]>(this._url + '/attendance/get-classes-teacher', {date});
  }

  getSpecificClassStudentsAttendance(): Observable<any[]> {
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0');
    var yyyy = today.getFullYear();
    const date = yyyy + '-' + mm + '-' + dd;
    return this._http.post<any[]>(this._url + '/attendance/get-attendance', {date});
  }

  getTodaysStudentClasses(): Observable<any[]> {
    return this._http.get<any[]>(this._url + '/attendance/get-classes-student');
  }
}
