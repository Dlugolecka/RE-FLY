import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
} from '@angular/router';
import { Observable } from 'rxjs';
import { SignInService } from 'src/app/services/sign-in.service';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private readonly signInService: SignInService) {}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    if (this.signInService.isUserLoggedIn()) {
      return true;
    } else {
      return false;
    }
  }
}
