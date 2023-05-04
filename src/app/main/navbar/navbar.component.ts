import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  constructor() {}

  sideNavOpened = false;

  ngOnInit(): void {}

  openSidenav() {
    this.sideNavOpened = true;
  }

  closeSidenav() {
    this.sideNavOpened = false;
  }
}
