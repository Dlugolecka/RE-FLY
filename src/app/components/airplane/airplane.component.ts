import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FlyService } from 'src/app/services/fly.service';

@Component({
  selector: 'app-airplane',
  templateUrl: './airplane.component.html',
  styleUrls: ['./airplane.component.scss'],
})
export class AirplaneComponent implements OnInit {
  seat: any;
  fly: any;
  limit: number = 0;
  selected: string[] = [];
  rows = Array(15)
    .fill(0)
    .map((x, i) => i);

  @Output() seatSelect = new EventEmitter<string[]>();

  constructor(private flyService: FlyService) {}

  ngOnInit(): void {
    this.fly = this.flyService.getFly();
    this.limit = this.fly.passangers.adult + this.fly.passangers.kids;
    console.log(this.limit);
  }

  onSelect(seat: string) {
    // console.log(`${rowName}${rowIndex + 1}`);
    if (this.limit === this.selected.length && !this.selected.includes(seat)) {
      return;
    }
    if (this.selected.includes(seat)) {
      this.selected = this.selected.filter((el) => el !== seat);
    } else {
      this.selected.push(seat);
      this.seatSelect.emit(this.selected);
    }
    console.log(this.selected);
  }
}
