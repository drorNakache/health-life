import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { DailyEatingComponent } from './daily-eating.component';

describe('DailyEatingComponent', () => {
  let component: DailyEatingComponent;
  let fixture: ComponentFixture<DailyEatingComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DailyEatingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DailyEatingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
