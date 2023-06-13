import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { FlyService } from 'src/app/services/fly.service';
import { SignInService } from 'src/app/services/sign-in.service';
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

  cities: string[] = ['Warsaw', 'London', 'Munich'];

  constructor(
    public fb: FormBuilder,
    private weatherService: WeatherService,
    private flyService: FlyService,
    private router: Router,
    private signInService: SignInService
  ) {}

  ngOnInit(): void {
    this.form.get('arrival')?.disable();

    this.form.valueChanges.subscribe((res) => {
      if (this.departureCity !== this.form.get('departure')?.value) {
        this.departureCity = this.form.get('departure')?.value;
        this.weatherService.departure$.next(this.departureCity);
        this.form.get('arrival')?.enable();
      }

      if (this.arrivalCity !== this.form.get('arrival')?.value) {
        this.arrivalCity = this.form.get('arrival')?.value;
        this.weatherService.arrival$.next(this.arrivalCity);
      }
    });
  }

  onSubmit() {
    this.flyService.saveFly(this.form.value);

    if (!this.signInService.isUserLoggedIn()) {
      this.router.navigate(['/logon'], {
        queryParams: { showRegistration: false },
      });
    } else {
      this.router.navigate(['/details']);
    }

    this.form.reset();
  }
}
