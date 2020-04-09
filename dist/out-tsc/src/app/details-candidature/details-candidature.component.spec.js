import { async, TestBed } from '@angular/core/testing';
import { DetailsCandidatureComponent } from './details-candidature.component';
describe('DetailsCandidatureComponent', () => {
    let component;
    let fixture;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [DetailsCandidatureComponent]
        })
            .compileComponents();
    }));
    beforeEach(() => {
        fixture = TestBed.createComponent(DetailsCandidatureComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=details-candidature.component.spec.js.map