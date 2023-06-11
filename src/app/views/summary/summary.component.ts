import { Component, OnInit } from '@angular/core';
import { FlyService } from 'src/app/services/fly.service';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss'],
})
export class SummaryComponent implements OnInit {
  flyParameters: any = null;

  constructor(private flyService: FlyService) {}

  ngOnInit(): void {
    this.flyParameters = this.flyService.getFly();
  }
}
