/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { DialogDataDialog } from './dialog-view.component';

describe('DialogViewComponent', () => {
  let component: DialogDataDialog;
  let fixture: ComponentFixture<DialogDataDialog>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogDataDialog ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogDataDialog);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
