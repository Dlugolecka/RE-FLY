import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FlyService {
  localstorageName: string = 'flyData';
  constructor() {}

  createFlyDateBase() {
    const data = null;
    const dataBase = localStorage.getItem(this.localstorageName);
    if (dataBase) {
    } else {
      localStorage.setItem(this.localstorageName, JSON.stringify(data));
    }
  }

  saveFly(data: any) {
    localStorage.setItem(this.localstorageName, JSON.stringify(data));
  }

  getFly() {
    let dataBase = localStorage.getItem(this.localstorageName);
    if (!dataBase) {
      return;
    }
    const parsedDataBase = JSON.parse(dataBase);
    return parsedDataBase;
  }

  deleteFly() {
    localStorage.clear();
  }
}
