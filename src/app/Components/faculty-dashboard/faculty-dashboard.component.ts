import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-faculty-dashboard',
  templateUrl: './faculty-dashboard.component.html',
  styleUrls: ['./faculty-dashboard.component.css']
})
export class FacultyDashboardComponent implements OnInit {

  // @ViewChild('getAttendance') getAttendance: any;

  showOverlay: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  getAttendance() {
    this.showOverlay = true;
  }

  closeModal() {
    this.showOverlay = false;
  }
}
