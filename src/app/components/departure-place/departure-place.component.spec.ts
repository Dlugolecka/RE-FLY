import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeparturePlaceComponent } from './departure-place.component';

describe('FromWhereComponent', () => {
  let component: DeparturePlaceComponent;
  let fixture: ComponentFixture<DeparturePlaceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DeparturePlaceComponent],
    });
    fixture = TestBed.createComponent(DeparturePlaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
