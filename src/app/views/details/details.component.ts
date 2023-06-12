import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})
export class DetailsComponent implements OnInit {
  form: FormGroup<{
    suitcase: FormControl;
  }> = this.fb.group({
    suitcase: this.fb.control('', Validators.required),
  });

  constructor(public fb: FormBuilder) {}
  ngOnInit() {
    this.form.valueChanges.subscribe((res) => {
      console.log(res);
    });
  }
}
