import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { DailyGoalComponent } from './daily-goal.component';

describe('DailyGoalComponent', () => {
  let component: DailyGoalComponent;
  let fixture: ComponentFixture<DailyGoalComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DailyGoalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DailyGoalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
