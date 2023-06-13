import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
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

  constructor(private flyService: FlyService, private router: Router) {}

  ngOnInit(): void {
    this.fly = this.flyService.getFly();
    if (this.fly !== null) {
      this.limit = this.fly.passangers.adult + this.fly.passangers.kids;
    } else {
      this.router.navigate(['/home'], {});
    }
  }

  onSelect(seat: string) {
    if (this.limit === this.selected.length && !this.selected.includes(seat)) {
      return;
    }
    if (this.selected.includes(seat)) {
      this.selected = this.selected.filter((el) => el !== seat);
    } else {
      this.selected.push(seat);
      this.seatSelect.emit(this.selected);
    }
  }
}
