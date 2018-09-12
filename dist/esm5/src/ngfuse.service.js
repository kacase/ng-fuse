/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import * as Fuse from 'fuse.js';
var NgFuseService = /** @class */ (function () {
    function NgFuseService() {
        this.defaults = {
            shouldSort: true,
            threshold: 0.4,
            location: 0,
            distance: 100,
            maxPatternLength: 32,
            minMatchCharLength: 1,
            minSearchStringLenght: 1
        };
        this.searchOptions = this.defaults;
    }
    ;
    /**
     * @param {?} collection
     * @param {?} searchString
     * @param {?=} options
     * @return {?}
     */
    NgFuseService.prototype.search = /**
     * @param {?} collection
     * @param {?} searchString
     * @param {?=} options
     * @return {?}
     */
    function (collection, searchString, options) {
        if (options === void 0) { options = {}; }
        Object.assign(this.searchOptions, this.defaults, options);
        /** @type {?} */
        var results = [];
        if (searchString && searchString.length >= this.searchOptions.minSearchStringLenght) {
            /** @type {?} */
            var fuse = new Fuse(collection, this.searchOptions);
            results = fuse.search(searchString);
            return results;
        }
        else {
            return collection;
        }
    };
    ;
    NgFuseService.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    NgFuseService.ctorParameters = function () { return []; };
    return NgFuseService;
}());
export { NgFuseService };
if (false) {
    /** @type {?} */
    NgFuseService.prototype.defaults;
    /** @type {?} */
    NgFuseService.prototype.searchOptions;
}
/**
 * @record
 */
export function NgFuseOptions() { }
/** @type {?|undefined} */
NgFuseOptions.prototype.minSearchStringLenght;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmdmdXNlLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy1mdXNlLyIsInNvdXJjZXMiOlsic3JjL25nZnVzZS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sS0FBSyxJQUFJLE1BQU0sU0FBUyxDQUFDOztJQWdCNUI7d0JBWjBCO1lBQ3RCLFVBQVUsRUFBRSxJQUFJO1lBQ2hCLFNBQVMsRUFBRSxHQUFHO1lBQ2QsUUFBUSxFQUFFLENBQUM7WUFDWCxRQUFRLEVBQUUsR0FBRztZQUNiLGdCQUFnQixFQUFFLEVBQUU7WUFDcEIsa0JBQWtCLEVBQUUsQ0FBQztZQUNyQixxQkFBcUIsRUFBRSxDQUFDO1NBQzNCOzZCQUU4QixJQUFJLENBQUMsUUFBUTtLQUUzQjtJQUFBLENBQUM7Ozs7Ozs7SUFFbEIsOEJBQU07Ozs7OztJQUFOLFVBQU8sVUFBeUIsRUFBRSxZQUFvQixFQUFFLE9BQTJCO1FBQTNCLHdCQUFBLEVBQUEsWUFBMkI7UUFDL0UsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQyxRQUFRLEVBQUUsT0FBTyxDQUFDLENBQUM7O1FBRTFELElBQUksT0FBTyxHQUFHLEVBQUUsQ0FBQTtRQUNoQixFQUFFLENBQUMsQ0FBQyxZQUFZLElBQUksWUFBWSxDQUFDLE1BQU0sSUFBSSxJQUFJLENBQUMsYUFBYSxDQUFDLHFCQUFxQixDQUFDLENBQUMsQ0FBQzs7WUFDbEYsSUFBTSxJQUFJLEdBQUcsSUFBSSxJQUFJLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztZQUN0RCxPQUFPLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsQ0FBQztZQUNwQyxNQUFNLENBQUMsT0FBTyxDQUFDO1NBQ2xCO1FBQUMsSUFBSSxDQUFDLENBQUM7WUFDSixNQUFNLENBQUMsVUFBVSxDQUFDO1NBQ3JCO0tBQ0o7SUFBQSxDQUFDOztnQkEzQkwsVUFBVTs7Ozt3QkFIWDs7U0FJYSxhQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgKiBhcyBGdXNlIGZyb20gJ2Z1c2UuanMnO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgTmdGdXNlU2VydmljZSB7XHJcbiAgICBkZWZhdWx0czogTmdGdXNlT3B0aW9ucyA9IHtcclxuICAgICAgICBzaG91bGRTb3J0OiB0cnVlLFxyXG4gICAgICAgIHRocmVzaG9sZDogMC40LFxyXG4gICAgICAgIGxvY2F0aW9uOiAwLFxyXG4gICAgICAgIGRpc3RhbmNlOiAxMDAsXHJcbiAgICAgICAgbWF4UGF0dGVybkxlbmd0aDogMzIsXHJcbiAgICAgICAgbWluTWF0Y2hDaGFyTGVuZ3RoOiAxLFxyXG4gICAgICAgIG1pblNlYXJjaFN0cmluZ0xlbmdodDogMVxyXG4gICAgfVxyXG5cclxuICAgIHNlYXJjaE9wdGlvbnM6IE5nRnVzZU9wdGlvbnMgPSB0aGlzLmRlZmF1bHRzO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkgeyB9O1xyXG5cclxuICAgIHNlYXJjaChjb2xsZWN0aW9uOiBBcnJheTxPYmplY3Q+LCBzZWFyY2hTdHJpbmc6IHN0cmluZywgb3B0aW9uczogTmdGdXNlT3B0aW9ucyA9IHt9KSB7XHJcbiAgICAgICAgT2JqZWN0LmFzc2lnbih0aGlzLnNlYXJjaE9wdGlvbnMsIHRoaXMuZGVmYXVsdHMsIG9wdGlvbnMpO1xyXG5cclxuICAgICAgICBsZXQgcmVzdWx0cyA9IFtdXHJcbiAgICAgICAgaWYgKHNlYXJjaFN0cmluZyAmJiBzZWFyY2hTdHJpbmcubGVuZ3RoID49IHRoaXMuc2VhcmNoT3B0aW9ucy5taW5TZWFyY2hTdHJpbmdMZW5naHQpIHtcclxuICAgICAgICAgICAgY29uc3QgZnVzZSA9IG5ldyBGdXNlKGNvbGxlY3Rpb24sIHRoaXMuc2VhcmNoT3B0aW9ucyk7XHJcbiAgICAgICAgICAgIHJlc3VsdHMgPSBmdXNlLnNlYXJjaChzZWFyY2hTdHJpbmcpO1xyXG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0cztcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gY29sbGVjdGlvbjtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIE5nRnVzZU9wdGlvbnMgZXh0ZW5kcyBGdXNlLkZ1c2VPcHRpb25zIHtcclxuICAgIG1pblNlYXJjaFN0cmluZ0xlbmdodD86IDE7XHJcbn0iXX0=