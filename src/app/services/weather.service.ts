import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  Coordinates: any = {
    Warsaw: [52.23, 21.01],
    Roma: [52.23, 21.01],
    London: [52.23, 21.01],
  };

  departure$: Subject<string> = new Subject();
  arrival$: Subject<string> = new Subject();

  constructor(private http: HttpClient) {}

  getWeather(city: string): Observable<any> {
    const url: string = `https://api.open-meteo.com/v1/forecast?latitude=${this.Coordinates[city][0]}&longitude=${this.Coordinates[city][1]}&hourly=temperature_2m,rain,showers,snowfall,snow_depth,windspeed_10m&current_weather=true&forecast_days=1&timezone=Europe%2FBerlin`;
    return this.http.get(url);
  }
}
