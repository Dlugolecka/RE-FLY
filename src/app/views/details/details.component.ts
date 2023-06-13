import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { FlyService } from 'src/app/services/fly.service';

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
  selectedSeats: string[] = [];

  constructor(
    public fb: FormBuilder,
    private router: Router,
    private flyService: FlyService
  ) {}
  ngOnInit() {
    this.form.valueChanges.subscribe((res) => {});
  }

  onSubmit() {
    const data = {
      suitcase: this.form.get('suitcase')?.value,
      seats: this.selectedSeats,
    };
    this.flyService.saveDetails(data);
    this.form.reset();
    this.router.navigate(['/summary'], {});
  }

  onSeatSelect(event: string[]) {
    this.selectedSeats = event;
  }
}
