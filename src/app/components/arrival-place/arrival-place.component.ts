import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-arrival-place',
  templateUrl: './arrival-place.component.html',
  styleUrls: ['./arrival-place.component.scss'],
})
export class ArrivalPaceComponent {
  @Input() form: FormGroup = new FormGroup({});
}
