import { async, TestBed } from '@angular/core/testing';
import { GestionEvaluationsComponent } from './gestion-evaluations.component';
describe('GestionEvaluationsComponent', () => {
    let component;
    let fixture;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [GestionEvaluationsComponent]
        })
            .compileComponents();
    }));
    beforeEach(() => {
        fixture = TestBed.createComponent(GestionEvaluationsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=gestion-evaluations.component.spec.js.map