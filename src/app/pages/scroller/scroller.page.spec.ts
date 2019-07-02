import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScrollerPage } from './scroller.page';

describe('ScrollerPage', () => {
  let component: ScrollerPage;
  let fixture: ComponentFixture<ScrollerPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScrollerPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScrollerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
