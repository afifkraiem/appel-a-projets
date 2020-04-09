import { async, TestBed } from '@angular/core/testing';
import { MesCandidaturesComponent } from './mes-candidatures.component';
describe('MesCandidaturesComponent', () => {
    let component;
    let fixture;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [MesCandidaturesComponent]
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
//# sourceMappingURL=mes-candidatures.component.spec.js.map