import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-logon',
  templateUrl: './logon.component.html',
  styleUrls: ['./logon.component.scss'],
})
export class LogonComponent implements OnInit {
  defaultView: boolean = true;
  showRegistration: boolean = false;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((res) => {
      console.log(res);
      this.showRegistration = JSON.parse(res['showRegistration']);
    });
  }

  onSwitchMode() {
    setTimeout(() => (this.showRegistration = !this.showRegistration), 100);
    this.defaultView = !this.defaultView;
  }
}
