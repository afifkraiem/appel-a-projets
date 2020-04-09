import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionCampagnesComponent } from './gestion-campagnes.component';

describe('GestionCampagnesComponent', () => {
  let component: GestionCampagnesComponent;
  let fixture: ComponentFixture<GestionCampagnesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GestionCampagnesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionCampagnesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
