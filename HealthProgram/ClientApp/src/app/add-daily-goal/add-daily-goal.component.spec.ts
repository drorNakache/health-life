import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDailyGoalComponent } from './add-daily-goal.component';

describe('AddDailyGoalComponent', () => {
  let component: AddDailyGoalComponent;
  let fixture: ComponentFixture<AddDailyGoalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddDailyGoalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddDailyGoalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
