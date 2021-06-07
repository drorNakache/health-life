import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { DailyEatingReportComponent } from './daily-eating-report.component';

describe('DailyEatingReportComponent', () => {
  let component: DailyEatingReportComponent;
  let fixture: ComponentFixture<DailyEatingReportComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DailyEatingReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DailyEatingReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
