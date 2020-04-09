import { async, TestBed } from '@angular/core/testing';
import { GestionActualitesComponent } from './gestion-actualites.component';
describe('GestionActualitesComponent', () => {
    let component;
    let fixture;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [GestionActualitesComponent]
        })
            .compileComponents();
    }));
    beforeEach(() => {
        fixture = TestBed.createComponent(GestionActualitesComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=gestion-actualites.component.spec.js.map