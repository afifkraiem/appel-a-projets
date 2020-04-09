import { async, TestBed } from '@angular/core/testing';
import { EditCandidatureComponent } from './edit-candidature.component';
describe('EditCandidatureComponent', () => {
    let component;
    let fixture;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [EditCandidatureComponent]
        })
            .compileComponents();
    }));
    beforeEach(() => {
        fixture = TestBed.createComponent(EditCandidatureComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=edit-candidature.component.spec.js.map