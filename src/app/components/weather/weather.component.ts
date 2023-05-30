import { Component, OnInit } from '@angular/core';
import { filter } from 'rxjs';
import { WeatherService } from 'src/app/services/weather.service';
@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss'],
})
export class WeatherComponent implements OnInit {
  departureWeather: any = null;
  arrivalWeather: any = null;
  departureCity: string = '';
  arrivalCity: string = '';
  constructor(private weatherService: WeatherService) {}

  ngOnInit(): void {
    this.weatherService.departure$
      .pipe(filter((el) => !!el))
      .subscribe((city) => {
        console.log(city);
        this.weatherService.getWeather(city).subscribe((res) => {
          this.departureWeather = res['current_weather'];
          this.departureCity = city;
          console.log('weather', this.departureWeather);
        });
      });

    this.weatherService.arrival$
      .pipe(filter((el) => !!el))
      .subscribe((city) => {
        console.log(city);
        this.weatherService.getWeather(city).subscribe((res) => {
          this.arrivalWeather = res['current_weather'];
          this.arrivalCity = city;
          console.log('arr weather', this.arrivalWeather);
        });
      });
  }
}
