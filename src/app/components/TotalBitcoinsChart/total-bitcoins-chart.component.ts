import { Component, OnInit } from '@angular/core';
import { BitcoinService } from 'src/app/services/bitcoin.service';
import { Color } from 'ng2-charts';

@Component({
  selector: 'total-bitcoins-chart',
  templateUrl: './total-bitcoins-chart.component.html',
  styleUrls: ['./total-bitcoins-chart.component.scss']
})
export class TotalBitcoinsChartComponent implements OnInit {
  constructor(private bitcoinService: BitcoinService) { }
  public lineChartOptions = {
    responsive: true
  };
  public lineChartLabels;
  public lineChartType = 'line';
  public lineChartLegend = true;
  public lineChartData = [
    { data: [], label: 'Total Circulating Bitcoins' },
  ];
  public lineChartColors: Color[] = [
    {
      borderColor: 'rgb(177, 140, 245)',
      backgroundColor: 'rgba(177, 140, 245, 0.275)',
    },
  ];
  getDataX() {
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    this.bitcoinService.getTotalBitcoins()
      .subscribe((res: any) => {
        var pickedData = res.values.filter((valueObj, idx) => {
          return idx % 300 === 0;
        })
        this.lineChartLabels = pickedData.map(val => {
          var date = new Date(val.x * 1000);
          return months[date.getMonth()];
        })
      })
  }
  getDataY() {
    this.bitcoinService.getTotalBitcoins()
      .subscribe((res: any) => {
        var pickedData = res.values.filter((valueObj, idx) => {
          return idx % 300 === 0;
        })
        this.lineChartData[0].data = pickedData.map(valueObj => valueObj.y)
      })
  }
  ngOnInit(): void {
    this.getDataX();
    this.getDataY();
  }

}
