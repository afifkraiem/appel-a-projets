import { async, TestBed } from '@angular/core/testing';
import { SuiviCneufComponent } from './suivi-cneuf.component';
describe('SuiviCneufComponent', () => {
    let component;
    let fixture;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [SuiviCneufComponent]
        })
            .compileComponents();
    }));
    beforeEach(() => {
        fixture = TestBed.createComponent(SuiviCneufComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=suivi-cneuf.component.spec.js.map