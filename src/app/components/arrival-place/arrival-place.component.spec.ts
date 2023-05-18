import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArrivalPaceComponent } from './arrival-place.component';

describe('ArrivalPaceComponent', () => {
  let component: ArrivalPaceComponent;
  let fixture: ComponentFixture<ArrivalPaceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ArrivalPaceComponent],
    });
    fixture = TestBed.createComponent(ArrivalPaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
