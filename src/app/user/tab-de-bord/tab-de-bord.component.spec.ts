import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabDeBordComponent } from './tab-de-bord.component';

describe('TabDeBordComponent', () => {
  let component: TabDeBordComponent;
  let fixture: ComponentFixture<TabDeBordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabDeBordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabDeBordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
