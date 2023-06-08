import { Component } from '@angular/core';

@Component({
  selector: 'app-logon',
  templateUrl: './logon.component.html',
  styleUrls: ['./logon.component.scss'],
})
export class LogonComponent {
  showRegistration: boolean = false;

  onShowRegistration() {
    this.showRegistration = true;
  }
}
