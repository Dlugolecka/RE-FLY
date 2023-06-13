import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FlyService } from 'src/app/services/fly.service';
import { SignInService } from 'src/app/services/sign-in.service';
import { SignUpService } from 'src/app/services/sign-up.service';

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

  constructor(
    private signUpService: SignUpService,
    private signInService: SignInService,
    private router: Router,
    private flyService: FlyService
  ) {}

  ngOnInit(): void {
    // TODO: add password validation
    // this.form.valueChanges.subscribe((res) => {
    //   if (
    //     this.form.get('password')?.value &&
    //     this.form.get('repeatPassword')?.value &&
    //     this.form.get('password')?.value &&
    //     this.form.get('repeatPassword')?.value
    //   ) {
    //   }
    // });
  }

  onSignUp(): void {
    this.signUpService.registerUser(this.form.value);
    this.signInService.getUser(this.form.value);

    if (this.flyService.getFly()) {
      this.router.navigate(['/details']);
    } else {
      this.router.navigate(['/home']);
    }

    this.form.reset();
  }
}
