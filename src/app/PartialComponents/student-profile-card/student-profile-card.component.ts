import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student-profile-card',
  templateUrl: './student-profile-card.component.html',
  styleUrls: ['./student-profile-card.component.css']
})
export class StudentProfileCardComponent implements OnInit {

  user: any;

  constructor() { }

  ngOnInit(): void {
    this.user = JSON.parse(localStorage.getItem('user') || '{}');
  }
}
