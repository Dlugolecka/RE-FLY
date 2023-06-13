import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

interface IUser {
  login: string;
  name: string;
  password: string;
  repeatPassword: string;
  surname: string;
}

@Injectable({
  providedIn: 'root',
})
export class SignInService {
  user = null;
  user$: BehaviorSubject<any> = new BehaviorSubject(null);
  constructor() {}

  getUser(userCredentials: any) {
    const userDataBase = localStorage.getItem('userData');
    let userLogin = userCredentials.login;
    let userPassword = userCredentials.password;
    if (!userDataBase) {
      return;
    }
    const parsedUserDataBase = JSON.parse(userDataBase);
    if (
      userLogin === parsedUserDataBase.login &&
      userPassword === parsedUserDataBase.password
    ) {
      this.user = parsedUserDataBase;
      this.user$.next(this.user);
    }
  }

  isUserLoggedIn() {
    if (this.user) {
      return true;
    } else {
      return false;
    }
  }
}
