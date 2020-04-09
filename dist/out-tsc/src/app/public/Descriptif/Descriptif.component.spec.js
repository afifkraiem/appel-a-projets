/* tslint:disable:no-unused-variable */
import { async, TestBed } from '@angular/core/testing';
import { DescriptifComponent } from './Descriptif.component';
describe('DescriptifComponent', () => {
    let component;
    let fixture;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [DescriptifComponent]
        })
            .compileComponents();
    }));
    beforeEach(() => {
        fixture = TestBed.createComponent(DescriptifComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=Descriptif.component.spec.js.map