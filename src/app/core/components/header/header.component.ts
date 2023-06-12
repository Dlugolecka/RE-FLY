import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SignInService } from 'src/app/services/sign-in.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  user: any = null;
  constructor(private router: Router, private signInService: SignInService) {}

  ngOnInit(): void {
    this.signInService.user$.subscribe((user) => {
      this.user = user;
    });
  }

  goToRegistration() {
    this.router.navigate(['/logon'], {
      queryParams: { showRegistration: true },
    });
  }
  goToLogin() {
    this.router.navigate(['/logon'], {
      queryParams: { showRegistration: false },
    });
  }

  goToHome() {
    this.router.navigate(['/home'], {});
  }

  logOut() {
    this.signInService.user$.next(null);
    this.goToHome();
  }
}
