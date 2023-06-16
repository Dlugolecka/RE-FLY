import { Component, OnInit } from '@angular/core';
import { forkJoin } from 'rxjs';
import { CurrencyService } from 'src/app/services/currency.service';
import { FlyService } from 'src/app/services/fly.service';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss'],
})
export class SummaryComponent implements OnInit {
  flyParameters: any = null;
  flyDetails: any = null;
  totalPrice: number = 0;
  totalPriceUSD: number = 0;
  totalPriceEURO: number = 0;

  constructor(
    private flyService: FlyService,
    private currencyService: CurrencyService
  ) {}

  ngOnInit(): void {
    this.flyParameters = this.flyService.getFly();
    this.flyDetails = this.flyService.getDetails();

    this.totalPrice =
      this.flyParameters.passangers.adult * 40 +
      this.flyParameters.passangers.kids * 30 +
      this.flyDetails.suitcase * 20;

    this.currencyUSD();
    this.currencyEURO();
  }
  currencyUSD() {
    this.currencyService.getUSD().subscribe((data: any) => {
      return (this.totalPriceUSD = data.rates[0].mid * this.totalPrice);
    });
  }

  currencyEURO() {
    this.currencyService.getEURO().subscribe((data: any) => {
      console.log(data);
      return (this.totalPriceEURO = data.rates[0].mid * this.totalPrice);
    });
  }
}
