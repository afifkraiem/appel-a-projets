import { async, TestBed } from '@angular/core/testing';
import { GestionCampagnesComponent } from './gestion-campagnes.component';
describe('GestionCampagnesComponent', () => {
    let component;
    let fixture;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [GestionCampagnesComponent]
        })
            .compileComponents();
    }));
    beforeEach(() => {
        fixture = TestBed.createComponent(GestionCampagnesComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=gestion-campagnes.component.spec.js.map