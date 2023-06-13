import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FlyService {
  localstorageName: string = 'flyData';
  localstorageDetails: string = 'details';
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

  saveDetails(data: any) {
    localStorage.setItem(this.localstorageDetails, JSON.stringify(data));
  }

  getFly() {
    let dataBase = localStorage.getItem(this.localstorageName);
    if (!dataBase) {
      return;
    }
    const parsedDataBase = JSON.parse(dataBase);
    return parsedDataBase;
  }

  getDetails() {
    let dataBase = localStorage.getItem(this.localstorageDetails);
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
