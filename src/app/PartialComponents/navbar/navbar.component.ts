import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  isUserLoggedIn: boolean = false;
  showOptions: boolean = false;
  user: any;

  constructor() { }

  ngOnInit(): void {
    this.user = JSON.parse(localStorage.getItem('user') || '{}');
    if(this.user!=null) {
      this.isUserLoggedIn = true;
    }
  }

  showOptionsList() {
    this.showOptions = !this.showOptions;
  }
}
