import * as tslib_1 from "tslib";
import { Pipe } from '@angular/core';
let SplitterPipe = class SplitterPipe {
    transform(text) {
        var the_test_spliter = new RegExp('\n', "g");
        if (text == null) {
            return '';
        }
        return text.split(the_test_spliter);
    }
};
SplitterPipe = tslib_1.__decorate([
    Pipe({
        name: 'splitter'
    })
], SplitterPipe);
export { SplitterPipe };
//# sourceMappingURL=splitter.pipe.js.map