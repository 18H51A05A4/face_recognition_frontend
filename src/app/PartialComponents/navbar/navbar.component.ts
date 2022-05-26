import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  isUserLoggedIn: boolean = true;
  showOptions: boolean = false;

  constructor() { }

  ngOnInit(): void { }

  showOptionsList() {
    this.showOptions = !this.showOptions;
  }
}
