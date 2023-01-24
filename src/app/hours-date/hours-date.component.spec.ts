import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HoursDateComponent } from './hours-date.component';

describe('HoursDateComponent', () => {
  let component: HoursDateComponent;
  let fixture: ComponentFixture<HoursDateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HoursDateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HoursDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
