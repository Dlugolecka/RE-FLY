import { Component, OnInit } from '@angular/core';
import { FlyService } from './services/fly.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'RE-FLY';

  constructor(private flyServices: FlyService) {}
  ngOnInit(): void {
    this.flyServices.createFlyDateBase();
  }
}
