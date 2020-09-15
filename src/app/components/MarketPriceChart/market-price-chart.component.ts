import { Component, OnInit } from '@angular/core';
import { BitcoinService } from 'src/app/services/bitcoin.service';
import { Color } from 'ng2-charts';


@Component({
  selector: 'market-price-chart',
  templateUrl: './market-price-chart.component.html',
  styleUrls: ['./market-price-chart.component.scss']
})
export class MarketPriceChartComponent implements OnInit {

  constructor(private bitcoinService: BitcoinService) { }
  public lineChartOptions = {
    responsive: true
  };
  public lineChartLabels;
  public lineChartType = 'line';
  public lineChartLegend = true;
  public lineChartData = [
    { data: [], label: 'Market Price'},
  ];
  public lineChartColors: Color[] = [
    {
      borderColor: 'orange',
      backgroundColor: 'rgba(255, 165, 0, 0.275)',
    },
  ];
  getDataX() {
    this.bitcoinService.getMarketPrice()
      .subscribe((res: any) => {
        this.lineChartLabels = res.values.map(valueObj => {
          var date = new Date(valueObj.x * 1000)
          return date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear()
        }
        )
      })
  }
  getDataY() {
    this.bitcoinService.getMarketPrice()
      .subscribe((res: any) => { this.lineChartData[0].data = res.values.map(valueObj => valueObj.y) })
  }
  ngOnInit(): void {
    this.getDataX();
    this.getDataY();

  }

}
