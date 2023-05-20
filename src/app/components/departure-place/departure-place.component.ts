import { Component, Input } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-departure-place',
  templateUrl: './departure-place.component.html',
  styleUrls: ['./departure-place.component.scss'],
})
export class DeparturePlaceComponent {
  @Input() form: FormGroup = new FormGroup({});
  selected = null;
}
