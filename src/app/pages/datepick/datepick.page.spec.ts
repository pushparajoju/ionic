import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatepickPage } from './datepick.page';

describe('DatepickPage', () => {
  let component: DatepickPage;
  let fixture: ComponentFixture<DatepickPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatepickPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatepickPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
