import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Contact } from 'src/app/models/contact.model';

@Component({
  selector: 'contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.scss']
})
export class ContactListComponent implements OnInit {


  @Input() contacts : Contact[];

  @Output() contactSelected = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  setCurrContact(contact) {
    this.contactSelected.emit(contact);
  }

}
