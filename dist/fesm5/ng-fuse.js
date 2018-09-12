import { Injectable, Pipe, NgModule } from '@angular/core';
import * as Fuse from 'fuse.js';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
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
    NgFuseService.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    NgFuseService.ctorParameters = function () { return []; };
    return NgFuseService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var NgFusePipe = /** @class */ (function () {
    function NgFusePipe(fuseService) {
        this.fuseService = fuseService;
    }
    /**
     * @param {?} collection
     * @param {?} searchString
     * @param {?=} options
     * @return {?}
     */
    NgFusePipe.prototype.transform = /**
     * @param {?} collection
     * @param {?} searchString
     * @param {?=} options
     * @return {?}
     */
    function (collection, searchString, options) {
        if (options === void 0) { options = {}; }
        return this.fuseService.search(collection, searchString, options);
    };
    NgFusePipe.decorators = [
        { type: Pipe, args: [{ name: "ngFuse" },] }
    ];
    /** @nocollapse */
    NgFusePipe.ctorParameters = function () { return [
        { type: NgFuseService }
    ]; };
    return NgFusePipe;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var NgFuseModule = /** @class */ (function () {
    function NgFuseModule() {
    }
    NgFuseModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [
                        NgFusePipe
                    ],
                    imports: [
                        CommonModule,
                        FormsModule
                    ],
                    exports: [
                        NgFusePipe
                    ],
                    providers: [NgFuseService],
                },] }
    ];
    return NgFuseModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

export { NgFuseModule, NgFuseService, NgFusePipe };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmctZnVzZS5qcy5tYXAiLCJzb3VyY2VzIjpbIm5nOi8vbmctZnVzZS9zcmMvbmdmdXNlLnNlcnZpY2UudHMiLCJuZzovL25nLWZ1c2Uvc3JjL25nZnVzZS5waXBlLnRzIiwibmc6Ly9uZy1mdXNlL2luZGV4LnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0ICogYXMgRnVzZSBmcm9tICdmdXNlLmpzJztcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIE5nRnVzZVNlcnZpY2Uge1xyXG4gICAgZGVmYXVsdHM6IE5nRnVzZU9wdGlvbnMgPSB7XHJcbiAgICAgICAgc2hvdWxkU29ydDogdHJ1ZSxcclxuICAgICAgICB0aHJlc2hvbGQ6IDAuNCxcclxuICAgICAgICBsb2NhdGlvbjogMCxcclxuICAgICAgICBkaXN0YW5jZTogMTAwLFxyXG4gICAgICAgIG1heFBhdHRlcm5MZW5ndGg6IDMyLFxyXG4gICAgICAgIG1pbk1hdGNoQ2hhckxlbmd0aDogMSxcclxuICAgICAgICBtaW5TZWFyY2hTdHJpbmdMZW5naHQ6IDFcclxuICAgIH1cclxuXHJcbiAgICBzZWFyY2hPcHRpb25zOiBOZ0Z1c2VPcHRpb25zID0gdGhpcy5kZWZhdWx0cztcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHsgfTtcclxuXHJcbiAgICBzZWFyY2goY29sbGVjdGlvbjogQXJyYXk8T2JqZWN0Piwgc2VhcmNoU3RyaW5nOiBzdHJpbmcsIG9wdGlvbnM6IE5nRnVzZU9wdGlvbnMgPSB7fSkge1xyXG4gICAgICAgIE9iamVjdC5hc3NpZ24odGhpcy5zZWFyY2hPcHRpb25zLCB0aGlzLmRlZmF1bHRzLCBvcHRpb25zKTtcclxuXHJcbiAgICAgICAgbGV0IHJlc3VsdHMgPSBbXVxyXG4gICAgICAgIGlmIChzZWFyY2hTdHJpbmcgJiYgc2VhcmNoU3RyaW5nLmxlbmd0aCA+PSB0aGlzLnNlYXJjaE9wdGlvbnMubWluU2VhcmNoU3RyaW5nTGVuZ2h0KSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGZ1c2UgPSBuZXcgRnVzZShjb2xsZWN0aW9uLCB0aGlzLnNlYXJjaE9wdGlvbnMpO1xyXG4gICAgICAgICAgICByZXN1bHRzID0gZnVzZS5zZWFyY2goc2VhcmNoU3RyaW5nKTtcclxuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdHM7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIGNvbGxlY3Rpb247XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBOZ0Z1c2VPcHRpb25zIGV4dGVuZHMgRnVzZS5GdXNlT3B0aW9ucyB7XHJcbiAgICBtaW5TZWFyY2hTdHJpbmdMZW5naHQ/OiAxO1xyXG59IiwiaW1wb3J0IHsgUGlwZSwgUGlwZVRyYW5zZm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBOZ0Z1c2VPcHRpb25zLCBOZ0Z1c2VTZXJ2aWNlIH0gZnJvbSAnLi9uZ2Z1c2Uuc2VydmljZSdcclxuXHJcbkBQaXBlKHsgbmFtZTogXCJuZ0Z1c2VcIiB9KVxyXG5leHBvcnQgY2xhc3MgTmdGdXNlUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgZnVzZVNlcnZpY2U6IE5nRnVzZVNlcnZpY2UpIHsgfVxyXG5cclxuICAgIHRyYW5zZm9ybShjb2xsZWN0aW9uOiBBcnJheTxPYmplY3Q+LCBzZWFyY2hTdHJpbmc6IHN0cmluZywgb3B0aW9uczogTmdGdXNlT3B0aW9ucyA9IHt9KTogYW55IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5mdXNlU2VydmljZS5zZWFyY2goY29sbGVjdGlvbiwgc2VhcmNoU3RyaW5nLCBvcHRpb25zKTtcclxuICAgIH1cclxufSIsImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7IEZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5cclxuaW1wb3J0IHsgTmdGdXNlT3B0aW9ucywgTmdGdXNlU2VydmljZSB9IGZyb20gJy4vc3JjL25nZnVzZS5zZXJ2aWNlJztcclxuaW1wb3J0IHsgTmdGdXNlUGlwZSB9IGZyb20gJy4vc3JjL25nZnVzZS5waXBlJztcclxuXHJcbkBOZ01vZHVsZSh7XHJcblx0ZGVjbGFyYXRpb25zOiBbXHJcblx0XHROZ0Z1c2VQaXBlXHJcblx0XSxcclxuXHRpbXBvcnRzOiBbXHJcblx0XHRDb21tb25Nb2R1bGUsXHJcblx0XHRGb3Jtc01vZHVsZVxyXG5cdF0sXHJcblx0ZXhwb3J0czogW1xyXG5cdFx0TmdGdXNlUGlwZVxyXG5cdF0sXHJcblx0cHJvdmlkZXJzOiBbTmdGdXNlU2VydmljZV0sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBOZ0Z1c2VNb2R1bGUgeyB9XHJcbmV4cG9ydCB7IE5nRnVzZU9wdGlvbnMsIE5nRnVzZVNlcnZpY2UgfSBmcm9tICcuL3NyYy9uZ2Z1c2Uuc2VydmljZSc7XHJcbmV4cG9ydCB7IE5nRnVzZVBpcGUgfSBmcm9tICcuL3NyYy9uZ2Z1c2UucGlwZSc7XHJcbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtJQWlCSTt3QkFaMEI7WUFDdEIsVUFBVSxFQUFFLElBQUk7WUFDaEIsU0FBUyxFQUFFLEdBQUc7WUFDZCxRQUFRLEVBQUUsQ0FBQztZQUNYLFFBQVEsRUFBRSxHQUFHO1lBQ2IsZ0JBQWdCLEVBQUUsRUFBRTtZQUNwQixrQkFBa0IsRUFBRSxDQUFDO1lBQ3JCLHFCQUFxQixFQUFFLENBQUM7U0FDM0I7NkJBRThCLElBQUksQ0FBQyxRQUFRO0tBRTNCOzs7Ozs7O0lBRWpCLDhCQUFNOzs7Ozs7SUFBTixVQUFPLFVBQXlCLEVBQUUsWUFBb0IsRUFBRSxPQUEyQjtRQUEzQix3QkFBQSxFQUFBLFlBQTJCO1FBQy9FLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMsUUFBUSxFQUFFLE9BQU8sQ0FBQyxDQUFDOztRQUUxRCxJQUFJLE9BQU8sR0FBRyxFQUFFLENBQUE7UUFDaEIsSUFBSSxZQUFZLElBQUksWUFBWSxDQUFDLE1BQU0sSUFBSSxJQUFJLENBQUMsYUFBYSxDQUFDLHFCQUFxQixFQUFFOztZQUNqRixJQUFNLElBQUksR0FBRyxJQUFJLElBQUksQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1lBQ3RELE9BQU8sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxDQUFDO1lBQ3BDLE9BQU8sT0FBTyxDQUFDO1NBQ2xCO2FBQU07WUFDSCxPQUFPLFVBQVUsQ0FBQztTQUNyQjtLQUNKOztnQkEzQkosVUFBVTs7Ozt3QkFIWDs7Ozs7OztBQ0FBO0lBTUksb0JBQW9CLFdBQTBCO1FBQTFCLGdCQUFXLEdBQVgsV0FBVyxDQUFlO0tBQUs7Ozs7Ozs7SUFFbkQsOEJBQVM7Ozs7OztJQUFULFVBQVUsVUFBeUIsRUFBRSxZQUFvQixFQUFFLE9BQTJCO1FBQTNCLHdCQUFBLEVBQUEsWUFBMkI7UUFDbEYsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxVQUFVLEVBQUUsWUFBWSxFQUFFLE9BQU8sQ0FBQyxDQUFDO0tBQ3JFOztnQkFQSixJQUFJLFNBQUMsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFOzs7O2dCQUZBLGFBQWE7O3FCQURyQzs7Ozs7OztBQ0FBOzs7O2dCQU9DLFFBQVEsU0FBQztvQkFDVCxZQUFZLEVBQUU7d0JBQ2IsVUFBVTtxQkFDVjtvQkFDRCxPQUFPLEVBQUU7d0JBQ1IsWUFBWTt3QkFDWixXQUFXO3FCQUNYO29CQUNELE9BQU8sRUFBRTt3QkFDUixVQUFVO3FCQUNWO29CQUNELFNBQVMsRUFBRSxDQUFDLGFBQWEsQ0FBQztpQkFDMUI7O3VCQW5CRDs7Ozs7Ozs7OzsifQ==