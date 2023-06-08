import { Component } from '@angular/core';

@Component({
  selector: 'app-logon',
  templateUrl: './logon.component.html',
  styleUrls: ['./logon.component.scss'],
})
export class LogonComponent {
  defaultView: boolean = true;
  showRegistration: boolean = false;

  onSwitchMode() {
    setTimeout(() => (this.showRegistration = !this.showRegistration), 100);
    this.defaultView = !this.defaultView;
  }
}
