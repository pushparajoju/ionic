import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActionShtPage } from './action-sht.page';

describe('ActionShtPage', () => {
  let component: ActionShtPage;
  let fixture: ComponentFixture<ActionShtPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActionShtPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActionShtPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
