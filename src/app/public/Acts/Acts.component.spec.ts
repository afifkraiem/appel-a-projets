/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ActsComponent } from './Acts.component';

describe('ActsComponent', () => {
  let component: ActsComponent;
  let fixture: ComponentFixture<ActsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
