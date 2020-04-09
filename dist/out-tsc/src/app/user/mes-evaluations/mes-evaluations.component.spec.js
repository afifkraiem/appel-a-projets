import { async, TestBed } from '@angular/core/testing';
import { MesEvaluationsComponent } from './mes-evaluations.component';
describe('MesEvaluationsComponent', () => {
    let component;
    let fixture;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [MesEvaluationsComponent]
        })
            .compileComponents();
    }));
    beforeEach(() => {
        fixture = TestBed.createComponent(MesEvaluationsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=mes-evaluations.component.spec.js.map