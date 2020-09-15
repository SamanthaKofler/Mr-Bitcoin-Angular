import { Component, OnInit } from '@angular/core';
import { ContactService } from 'src/app/services/contact.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Contact } from '../../models/contact.model';
import { Location } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'contact-edit-page',
  templateUrl: './contact-edit-page.component.html',
  styleUrls: ['./contact-edit-page.component.scss']
})
export class ContactEditPageComponent implements OnInit {

  contactToEdit: Contact = new Contact;

  constructor(
    private contactService: ContactService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private location: Location
  ) { }


  saveContact(ev) {
    ev.preventDefault();
    console.log(this.contactToEdit)
    this.contactService.saveContact(this.contactToEdit)
    this.close();
  }
  close() {
    this.location.back();
  }
    removeContact(id) {
    this.contactService.deleteContact(id);
    this.router.navigate(['/contact']);
  }
  loadContact(id) {
    // const id = this.activatedRoute.snapshot.params.id;
    this.contactService.getContactById(id)
      .subscribe(contact => this.contactToEdit = { ...contact })
  }
  ngOnInit(): void {
    //like watch: subscribe to changes in params
    this.activatedRoute.params.subscribe(params => {
      this.loadContact(params.id)
    })
  }

}
