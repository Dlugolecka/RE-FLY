import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChoiceOfPlaceComponent } from './choice-of-place.component';

describe('ChoiceOfPlaceComponent', () => {
  let component: ChoiceOfPlaceComponent;
  let fixture: ComponentFixture<ChoiceOfPlaceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChoiceOfPlaceComponent]
    });
    fixture = TestBed.createComponent(ChoiceOfPlaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
