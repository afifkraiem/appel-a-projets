/* tslint:disable:no-unused-variable */
import { async, TestBed } from '@angular/core/testing';
import { CartographieComponent } from './Cartographie.component';
describe('CartographieComponent', () => {
    let component;
    let fixture;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [CartographieComponent]
        })
            .compileComponents();
    }));
    beforeEach(() => {
        fixture = TestBed.createComponent(CartographieComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=Cartographie.component.spec.js.map