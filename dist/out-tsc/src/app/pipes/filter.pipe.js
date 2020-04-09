import * as tslib_1 from "tslib";
import { Pipe } from '@angular/core';
let FilterPipe = class FilterPipe {
    transform(items, filter, defaultFilter) {
        if (!filter) {
            return items;
        }
        if (!Array.isArray(items)) {
            return items;
        }
        if (filter && Array.isArray(items)) {
            const filterKeys = Object.keys(filter);
            if (defaultFilter) {
                return items.filter(item => filterKeys.reduce((x, keyName) => (x && new RegExp(filter[keyName], 'gi').test(item[keyName])) || filter[keyName] === '', true));
            }
            else {
                return items.filter(item => {
                    return filterKeys.some((keyName) => {
                        return new RegExp(filter[keyName], 'gi').test(item[keyName]) || filter[keyName] === '';
                    });
                });
            }
        }
    }
};
FilterPipe = tslib_1.__decorate([
    Pipe({
        name: 'filter'
    })
], FilterPipe);
export { FilterPipe };
//# sourceMappingURL=filter.pipe.js.map