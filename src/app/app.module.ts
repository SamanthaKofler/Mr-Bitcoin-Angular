import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ChartsModule } from 'ng2-charts';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactFilterComponent } from './components/ContactFilter/contact-filter.component';
import { ContactListComponent } from './components/ContactList/contact-list.component';
import { ContactPreviewComponent } from './components/ContactPreview/contact-preview.component';
import { ContactDetailsPageComponent } from './pages/ContactDetailsPage/contact-details-page.component';
import { ContactEditPageComponent } from './pages/ContactEditPage/contact-edit-page.component';
import { ContactPageComponent } from './pages/ContactPage/contact-page.component';
import { HomePageComponent } from './pages/HomePage/home-page.component';

import { UserService } from './services/user.service';
import { BitcoinService } from './services/bitcoin.service';
import { ContactService } from './services/contact.service';
import { StatisticPageComponent } from './pages/StatisticPage/statistic-page.component';
import { AppHeaderComponent } from './components/AppHeader/app-header.component';
import { SignUpComponent } from './pages/SignupPage/sign-up.component';
import { TransferFundComponent } from './components/TransferFund/transfer-fund.component';
import { MovesListComponent } from './components/MovesList/moves-list.component';
import { MarketPriceChartComponent } from './components/MarketPriceChart/market-price-chart.component';
import { TradeVolumeChartComponent } from './components/TradeVolumeChart/trade-volume-chart.component';
import { TotalBitcoinsChartComponent } from './components/TotalBitcoinsChart/total-bitcoins-chart.component';
import { AppFooterComponent } from './components/AppFooter/app-footer.component';
import { ContentLoaderComponent } from './components/ContentLoader/content-loader.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactFilterComponent,
    ContactListComponent,
    ContactPreviewComponent,
    ContactDetailsPageComponent,
    ContactEditPageComponent,
    ContactPageComponent,
    HomePageComponent,
    StatisticPageComponent,
    AppHeaderComponent,
    SignUpComponent,
    TransferFundComponent,
    MovesListComponent,
    MarketPriceChartComponent,
    TradeVolumeChartComponent,
    TotalBitcoinsChartComponent,
    AppFooterComponent,
    ContentLoaderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    ChartsModule
  ],
  providers: [
    UserService,
    BitcoinService,
    ContactService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
