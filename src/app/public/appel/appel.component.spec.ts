/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AppelComponent } from './appel.component';

describe('AppelComponent', () => {
  let component: AppelComponent;
  let fixture: ComponentFixture<AppelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
