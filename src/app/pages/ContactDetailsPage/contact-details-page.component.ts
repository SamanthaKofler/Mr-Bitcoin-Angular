import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Contact } from '../../models/contact.model';
import { ContactService } from 'src/app/services/contact.service';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'contact-details',
  templateUrl: './contact-details-page.component.html',
  styleUrls: ['./contact-details-page.component.scss']
})
export class ContactDetailsPageComponent implements OnInit {

  contact: Contact = null;

  get contactMoves() {
    const user = this.userService.getUser();
    return user.moves.filter(move => move.toId === this.contact._id);
  }

  constructor(
    private contactService: ContactService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private userService: UserService) { }


  
  loadContact() {
    const id = this.activatedRoute.snapshot.params.id;
      this.contactService.getContactById(id)
        .subscribe(contact => this.contact = contact)
  }

  ngOnInit(): void {
    this.loadContact();
  }

}
