import { AppServicesService } from './../../Services/app-services.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private _appService: AppServicesService) { }

  ngOnInit(): void {
    this._appService.getUser().subscribe(user => {
      console.log(user);
    });

    this._appService.getTodaysStudentClasses().subscribe(classes => {
      console.log(classes);
    });
  }
}
