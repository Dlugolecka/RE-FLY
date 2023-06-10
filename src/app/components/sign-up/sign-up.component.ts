import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent implements OnInit {
  form = new FormGroup({
    login: new FormControl('', Validators.required),
    name: new FormControl('', Validators.required),
    surname: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
    repeatPassword: new FormControl('', Validators.required),
  });

  samePassword: boolean = false;

  ngOnInit(): void {
    this.form.valueChanges.subscribe((res) => {
      if (
        this.form.get('password')?.value &&
        this.form.get('repeatPassword')?.value &&
        this.form.get('password')?.value &&
        this.form.get('repeatPassword')?.value
      ) {
      }
    });
  }

  onSignUp(): void {
    console.log(this.form.value);
  }
}
