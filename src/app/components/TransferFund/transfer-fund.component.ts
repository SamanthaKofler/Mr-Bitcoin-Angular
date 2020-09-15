import { Component, OnInit, Input } from '@angular/core';
import { Contact } from 'src/app/models/contact.model';
import { Move } from '../../models/move.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'transfer-fund',
  templateUrl: './transfer-fund.component.html',
  styleUrls: ['./transfer-fund.component.scss']
})
export class TransferFundComponent implements OnInit {

  amount;
  @Input() contact:Contact;
  constructor(private userService: UserService) { }

  ngOnInit(): void {
  }

  transfer(ev) {
    // const amount = ev.target[0].value;
    const move = new Move(this.contact._id, this.contact.name, Date.now(), +this.amount);
    this.userService.doTransfer(move);
    this.amount = null;
  }

}
