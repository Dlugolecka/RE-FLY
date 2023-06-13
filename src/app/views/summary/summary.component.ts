import { Component, OnInit } from '@angular/core';
import { FlyService } from 'src/app/services/fly.service';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss'],
})
export class SummaryComponent implements OnInit {
  flyParameters: any = null;
  flyDetails: any = null;
  totalPrice: number = 0;

  constructor(private flyService: FlyService) {}

  ngOnInit(): void {
    this.flyParameters = this.flyService.getFly();
    this.flyDetails = this.flyService.getDetails();

    this.totalPrice =
      this.flyParameters.passangers.adult * 20 +
      this.flyParameters.passangers.kids * 15 +
      this.flyDetails.suitcase * 30;
  }
}
