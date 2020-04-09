import { async, TestBed } from '@angular/core/testing';
import { GestionDeliberationsComponent } from './gestion-deliberations.component';
describe('GestionDeliberationsComponent', () => {
    let component;
    let fixture;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [GestionDeliberationsComponent]
        })
            .compileComponents();
    }));
    beforeEach(() => {
        fixture = TestBed.createComponent(GestionDeliberationsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=gestion-deliberations.component.spec.js.map