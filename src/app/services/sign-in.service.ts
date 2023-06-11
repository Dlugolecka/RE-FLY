import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SignInService {
  user = null;
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
      console.log('user:', this.user);
    }
  }
}
