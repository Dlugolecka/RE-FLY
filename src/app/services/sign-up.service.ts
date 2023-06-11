import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SignUpService {
  localStorageName: string = 'userData';
  constructor() {}

  registerUser(user: any) {
    const userData = JSON.stringify(user);
    localStorage.setItem(this.localStorageName, userData);
  }
}
