import { async, TestBed } from '@angular/core/testing';
import { GestionCandidaturesComponent } from './gestion-candidatures.component';
describe('GestionCandidaturesComponent', () => {
    let component;
    let fixture;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [GestionCandidaturesComponent]
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
//# sourceMappingURL=gestion-candidatures.component.spec.js.map