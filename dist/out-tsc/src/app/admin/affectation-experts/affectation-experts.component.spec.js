import { async, TestBed } from '@angular/core/testing';
import { AffectationExpertsComponent } from './affectation-experts.component';
describe('AffectationExpertsComponent', () => {
    let component;
    let fixture;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [AffectationExpertsComponent]
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
//# sourceMappingURL=affectation-experts.component.spec.js.map