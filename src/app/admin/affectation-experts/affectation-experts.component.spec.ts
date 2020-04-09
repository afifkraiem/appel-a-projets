import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AffectationExpertsComponent } from './affectation-experts.component';

describe('AffectationExpertsComponent', () => {
  let component: AffectationExpertsComponent;
  let fixture: ComponentFixture<AffectationExpertsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AffectationExpertsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AffectationExpertsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
