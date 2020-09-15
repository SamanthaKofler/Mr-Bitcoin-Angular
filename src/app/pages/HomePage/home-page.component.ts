import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { BitcoinService } from '../../services/bitcoin.service';
import { UtilsService } from '../../services/utils.service';
import { Router } from '@angular/router';

@Component({
  selector: 'home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  user;
  currRate;
  currMarketPrice;
  
  get movesToShow() {
    return this.user.moves.slice(0, 3);
  }

  constructor(
    private userService: UserService,
    private bitcoinService: BitcoinService,
    private utilService: UtilsService,
    private router: Router
  ) { }

  getRate() {
    this.currRate = this.bitcoinService.getRate()
      .subscribe(res => this.currRate = res);
  }

  getCurrMarketPrice() {
      this.bitcoinService.getMarketPrice()
        .subscribe((res: any) => { this.currMarketPrice = res.values[res.values.length-1].y })
  }

  ngOnInit(): void {
    this.user = this.userService.getUser();
    if (!this.user) this.router.navigate(['/signup'])
    this.getRate();
    this.getCurrMarketPrice();
  }

}
