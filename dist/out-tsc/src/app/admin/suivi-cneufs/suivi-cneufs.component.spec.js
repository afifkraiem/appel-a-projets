import { async, TestBed } from '@angular/core/testing';
import { SuiviCneufsComponent } from './suivi-cneufs.component';
describe('SuiviCneufsComponent', () => {
    let component;
    let fixture;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [SuiviCneufsComponent]
        })
            .compileComponents();
    }));
    beforeEach(() => {
        fixture = TestBed.createComponent(SuiviCneufsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=suivi-cneufs.component.spec.js.map