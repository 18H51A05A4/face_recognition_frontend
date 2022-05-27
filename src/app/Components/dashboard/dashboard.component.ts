import { AppServicesService } from './../../Services/app-services.service';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  myAttendance: any[] = [];
  classes: any[] = [];
  user: any;
  @ViewChild('meetLink') meetLink: ElementRef<HTMLElement>;

  constructor(private _appService: AppServicesService) { }

  ngOnInit(): void {
    this.user = JSON.parse(localStorage.getItem('user') || '{}');
    this._appService.getUser().subscribe(user => {
      console.log(user);
    });

    this._appService.getTodaysStudentClasses().subscribe(classes => {
      console.log(classes);
      this.classes = classes;
    });

    this._appService.getSpecificClassStudentsAttendance().subscribe(attendance => {
      console.log(attendance);
      this.myAttendance = attendance;
    });
  }
}
