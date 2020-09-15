import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Contact } from 'src/app/models/contact.model';

@Component({
  selector: 'contact-preview',
  templateUrl: './contact-preview.component.html',
  styleUrls: ['./contact-preview.component.scss']
})
export class ContactPreviewComponent implements OnInit {

  
  @Input() contact: Contact;
  @Output() contactSelected = new EventEmitter();
  
  setCurrContact(contact) {
    this.contactSelected.emit(contact);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
