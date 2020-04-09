import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MesCandidaturesComponent } from './mes-candidatures.component';

describe('MesCandidaturesComponent', () => {
  let component: MesCandidaturesComponent;
  let fixture: ComponentFixture<MesCandidaturesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MesCandidaturesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MesCandidaturesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
