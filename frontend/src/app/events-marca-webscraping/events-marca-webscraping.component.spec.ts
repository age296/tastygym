/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { EventsMarcaWebscrapingComponent } from './events-marca-webscraping.component';

describe('EventsMarcaWebscrapingComponent', () => {
  let component: EventsMarcaWebscrapingComponent;
  let fixture: ComponentFixture<EventsMarcaWebscrapingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventsMarcaWebscrapingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventsMarcaWebscrapingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
