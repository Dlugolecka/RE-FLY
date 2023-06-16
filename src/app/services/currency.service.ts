import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CurrencyService {
  constructor(private http: HttpClient) {}

  getUSD() {
    return this.http.get(
      'https://api.nbp.pl/api/exchangerates/rates/a/usd/?format=json/'
    );
  }
  getEURO() {
    return this.http.get(
      'https://api.nbp.pl/api/exchangerates/rates/a/eur/?format=json/'
    );
  }
}
