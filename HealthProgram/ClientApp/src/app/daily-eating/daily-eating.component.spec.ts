import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DailyEatingComponent } from './daily-eating.component';

describe('DailyEatingComponent', () => {
  let component: DailyEatingComponent;
  let fixture: ComponentFixture<DailyEatingComponent>;

  beforeEach(async(() => {
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
