import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { WeatherService } from 'src/app/services/weather.service';

@Component({
  selector: 'app-choice-of-place',
  templateUrl: './choice-of-place.component.html',
  styleUrls: ['./choice-of-place.component.scss'],
})
export class ChoiceOfPlaceComponent implements OnInit {
  form: FormGroup<{
    departure: FormControl;
    arrival: FormControl;
    startDate: FormControl;
    endDate: FormControl;
    passangers: FormGroup;
  }> = this.fb.group({
    departure: this.fb.control('', Validators.required),
    arrival: this.fb.control('', Validators.required),
    startDate: this.fb.control('', Validators.required),
    endDate: this.fb.control('', Validators.required),
    passangers: this.fb.group({
      adult: this.fb.control(1, Validators.required),
      kids: this.fb.control(0),
    }),
  });

  departureCity: string = '';
  arrivalCity: string = '';

  constructor(public fb: FormBuilder, private weatherService: WeatherService) {}

  ngOnInit(): void {
    this.form.valueChanges.subscribe((res) => {
      console.log('form', res);
      console.log('departure', this.form.get('departure')?.value);
      if (this.departureCity !== this.form.get('departure')?.value) {
        this.departureCity = this.form.get('departure')?.value;
        this.weatherService.departure$.next(this.departureCity);
      }

      if (this.arrivalCity !== this.form.get('departure')?.value) {
        this.arrivalCity = this.form.get('arrival')?.value;
        this.weatherService.arrival$.next(this.arrivalCity);
      }
    });
  }
}
