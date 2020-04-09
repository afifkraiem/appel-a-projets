import { TestBed } from '@angular/core/testing';
import { TokenStorageService } from './token-storage.service';
describe('TokenStorageService', () => {
    beforeEach(() => TestBed.configureTestingModule({}));
    it('should be created', () => {
        const service = TestBed.get(TokenStorageService);
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=token-storage.service.spec.js.map