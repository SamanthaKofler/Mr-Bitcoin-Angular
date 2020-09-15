import { Component, OnInit } from '@angular/core';
import { BitcoinService } from 'src/app/services/bitcoin.service';
import { Color } from 'ng2-charts';

@Component({
  selector: 'trade-volume-chart',
  templateUrl: './trade-volume-chart.component.html',
  styleUrls: ['./trade-volume-chart.component.scss']
})
export class TradeVolumeChartComponent implements OnInit {

  constructor(private bitcoinService: BitcoinService) { }
  public lineChartOptions = {
    responsive: true
  };
  public lineChartLabels;
  public lineChartType = 'line';
  public lineChartLegend = true;
  public lineChartData = [
    { data: [], label: 'Trade Volume'},
  ];
  public lineChartColors: Color[] = [
    {
      borderColor: 'rgb(21, 172, 159)',
      backgroundColor: 'rgba(21, 172, 159, 0.275)',
    },
  ];
  getDataX() {
    this.bitcoinService.getTradeVolume()
      .subscribe((res: any) => {
        this.lineChartLabels = res.values.map(valueObj => {
          var date = new Date(valueObj.x * 1000)
          return date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear();
        }
        )
      })
  }
  getDataY() {
    this.bitcoinService.getTradeVolume()
      .subscribe((res: any) => { this.lineChartData[0].data = res.values.map(valueObj => valueObj.y) });
  }
  ngOnInit(): void {
    this.getDataX();
    this.getDataY();

  }

}
