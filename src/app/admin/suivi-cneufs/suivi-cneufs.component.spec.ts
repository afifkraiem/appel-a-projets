import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuiviCneufsComponent } from './suivi-cneufs.component';

describe('SuiviCneufsComponent', () => {
  let component: SuiviCneufsComponent;
  let fixture: ComponentFixture<SuiviCneufsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuiviCneufsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuiviCneufsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
