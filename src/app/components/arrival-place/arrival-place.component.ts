import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { WeatherService } from 'src/app/services/weather.service';

@Component({
  selector: 'app-arrival-place',
  templateUrl: './arrival-place.component.html',
  styleUrls: ['./arrival-place.component.scss'],
})
export class ArrivalPaceComponent implements OnInit {
  @Input() form: FormGroup = new FormGroup({});
  @Input('cities') possibleCities: string[] = [];

  cities: string[] = [];

  constructor(private weatherService: WeatherService) {}

  ngOnInit(): void {
    this.weatherService.departure$.subscribe(
      (selectedDepartureCity: string) => {
        this.cities = this.possibleCities.filter(
          (city: string) => city !== selectedDepartureCity
        );
      }
    );
  }

  hidden() {
    // console.log(
    //   'miejsce wylotu - porownanie',
    //   this.form.get('departure')?.value
    // );
    // console.log(
    //   'miejsce przylotu - porownanie',
    //   this.form.get('arrival')?.value
    // );
  }
}
