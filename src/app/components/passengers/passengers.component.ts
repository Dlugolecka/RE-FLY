import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import {
  MomentDateAdapter,
  MAT_MOMENT_DATE_ADAPTER_OPTIONS,
} from '@angular/material-moment-adapter';
import {
  DateAdapter,
  MAT_DATE_FORMATS,
  MAT_DATE_LOCALE,
} from '@angular/material/core';

import * as _moment from 'moment';

const moment = _moment;

const MY_FORMATS = {
  parse: {
    dateInput: 'DD MM YYYY',
  },
  display: {
    dateInput: 'DD MM YYYY',
    monthYearLabel: 'MMM YYYY',
    dateA11yLabel: 'DD MM YYYY',
    monthYearA11yLabel: 'MMMM YYYY',
  },
};

@Component({
  selector: 'app-passengers',
  templateUrl: './passengers.component.html',
  styleUrls: ['./passengers.component.scss'],
  providers: [
    {
      provide: DateAdapter,
      useClass: MomentDateAdapter,
      deps: [MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS],
    },
    { provide: MAT_DATE_FORMATS, useValue: MY_FORMATS },
  ],
})
export class PassengersComponent implements OnInit {
  @Input() form: FormGroup = new FormGroup({});

  isMenuVisible = false;
  minDate: any;

  ngOnInit(): void {
    this.minDate = moment().format('DD.MM.YYYY');
    console.log('minDate: ', this.minDate);
  }

  showPassengers() {
    this.isMenuVisible = !this.isMenuVisible;
  }

  adult: any = 1;
  quantity: number = 0;
  i: number = 0;

  minusAdult() {
    if (this.i! >= 2) {
      this.i--;
      this.quantity = this.i;
      this.form.get('passangers')?.patchValue(this.quantity);
    }
  }

  plus() {
    if (this.i != 9) {
      this.adult = this.i++;
      this.quantity = this.i;
      this.form.get('passangers')?.patchValue(this.quantity);
    }
  }
}
