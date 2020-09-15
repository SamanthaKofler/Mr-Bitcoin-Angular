import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BitcoinService {

  constructor(private http: HttpClient) { }

  public getRate() {
    return this.http.get('https://blockchain.info/tobtc?currency=USD&value=1');
  }
  public getMarketPrice() {
    return this.http.get('https://api.blockchain.info/charts/market-price?timespan=1months&format=json&cors=true')
  }
  public getTradeVolume() {
    return this.http.get('https://api.blockchain.info/charts/trade-volume?timespan=1months&format=json&cors=true')
  }
  public getTotalBitcoins() {
    return this.http.get('https://api.blockchain.info/charts/total-bitcoins?timespan=6months&format=json&cors=true')
  }
  public getCurrMarketPrice() {
    return this.http.get('https://api.blockchain.info/charts/market-price?timespan=1months&format=json&cors=true')
  }
}
