import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.scss']
})
export class AppHeaderComponent implements OnInit {

  homeIsActive: boolean = true;
  contactsIsActive: boolean = false;
  statisticIsActive: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  activateHome() {
    this.homeIsActive = true;
    this.contactsIsActive = false;
    this.statisticIsActive = false;
  }
  activateContacts() {
    this.contactsIsActive = true;
    this.homeIsActive = false;
    this.statisticIsActive = false;
  }
  activateStatistic() {
    this.statisticIsActive = true;
    this.contactsIsActive = false;
    this.homeIsActive = false;
  }
}
