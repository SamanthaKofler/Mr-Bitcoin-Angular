import { Component, OnInit } from '@angular/core';
import { ContactService } from '../../services/contact.service';
import { Contact } from '../../models/contact.model';

@Component({
  selector: 'contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.scss']
})
export class ContactPageComponent implements OnInit {

  contacts = [];
  // currContact : Contact = null;
  filterBy = { term: '' }

  get contactsToShow() {
    var contacts = [...this.contacts];
    var filter = this.filterBy;
    contacts = contacts.filter(contact => contact.name.toLowerCase().includes(filter.term.toLowerCase()));
    return contacts;
  }

  // dependency injection - not working with service directly, but creating a new instance of the class "contactservice"
  constructor(private contactService: ContactService) { }


  setFilter(filterBy) {
    this.filterBy = filterBy;
  }

  ngOnInit(): void {
    this.contactService.loadContacts(this.filterBy);
    this.contactService.contacts$.subscribe(contacts => this.contacts.push(...contacts));
  }

}
