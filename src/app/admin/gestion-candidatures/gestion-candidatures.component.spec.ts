import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionCandidaturesComponent } from './gestion-candidatures.component';

describe('GestionCandidaturesComponent', () => {
  let component: GestionCandidaturesComponent;
  let fixture: ComponentFixture<GestionCandidaturesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GestionCandidaturesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionCandidaturesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
