import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

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
      adult: this.fb.control('', Validators.required),
      kids: this.fb.control(''),
    }),
  });

  constructor(public fb: FormBuilder) {}

  ngOnInit(): void {
    this.form.valueChanges.subscribe((res) => {
      console.log('form', res);
    });
  }
}
