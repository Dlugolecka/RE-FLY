import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FlyService } from 'src/app/services/fly.service';
import { SignInService } from 'src/app/services/sign-in.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
})
export class SignInComponent {
  form = new FormGroup({
    login: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  });

  constructor(
    private signInService: SignInService,
    private router: Router,
    private flyService: FlyService
  ) {}

  onSignIn(): void {
    this.signInService.getUser(this.form.value);
    this.form.reset();

    if (this.flyService.getFly()) {
      this.router.navigate(['/details']);
    } else {
      this.router.navigate(['/home']);
    }
  }
}
