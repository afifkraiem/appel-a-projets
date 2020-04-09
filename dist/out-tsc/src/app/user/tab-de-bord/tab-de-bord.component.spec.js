import { async, TestBed } from '@angular/core/testing';
import { TabDeBordComponent } from './tab-de-bord.component';
describe('TabDeBordComponent', () => {
    let component;
    let fixture;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [TabDeBordComponent]
        })
            .compileComponents();
    }));
    beforeEach(() => {
        fixture = TestBed.createComponent(TabDeBordComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=tab-de-bord.component.spec.js.map