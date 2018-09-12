/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Pipe } from '@angular/core';
import { NgFuseService } from './ngfuse.service';
export class NgFusePipe {
    /**
     * @param {?} fuseService
     */
    constructor(fuseService) {
        this.fuseService = fuseService;
    }
    /**
     * @param {?} collection
     * @param {?} searchString
     * @param {?=} options
     * @return {?}
     */
    transform(collection, searchString, options = {}) {
        return this.fuseService.search(collection, searchString, options);
    }
}
NgFusePipe.decorators = [
    { type: Pipe, args: [{ name: "ngFuse" },] }
];
/** @nocollapse */
NgFusePipe.ctorParameters = () => [
    { type: NgFuseService }
];
if (false) {
    /** @type {?} */
    NgFusePipe.prototype.fuseService;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmdmdXNlLnBpcGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy1mdXNlLyIsInNvdXJjZXMiOlsic3JjL25nZnVzZS5waXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsSUFBSSxFQUFpQixNQUFNLGVBQWUsQ0FBQztBQUNwRCxPQUFPLEVBQWlCLGFBQWEsRUFBRSxNQUFNLGtCQUFrQixDQUFBO0FBRy9ELE1BQU07Ozs7SUFFRixZQUFvQixXQUEwQjtRQUExQixnQkFBVyxHQUFYLFdBQVcsQ0FBZTtLQUFLOzs7Ozs7O0lBRW5ELFNBQVMsQ0FBQyxVQUF5QixFQUFFLFlBQW9CLEVBQUUsVUFBeUIsRUFBRTtRQUNsRixNQUFNLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsVUFBVSxFQUFFLFlBQVksRUFBRSxPQUFPLENBQUMsQ0FBQztLQUNyRTs7O1lBUEosSUFBSSxTQUFDLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRTs7OztZQUZBLGFBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE5nRnVzZU9wdGlvbnMsIE5nRnVzZVNlcnZpY2UgfSBmcm9tICcuL25nZnVzZS5zZXJ2aWNlJ1xyXG5cclxuQFBpcGUoeyBuYW1lOiBcIm5nRnVzZVwiIH0pXHJcbmV4cG9ydCBjbGFzcyBOZ0Z1c2VQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBmdXNlU2VydmljZTogTmdGdXNlU2VydmljZSkgeyB9XHJcblxyXG4gICAgdHJhbnNmb3JtKGNvbGxlY3Rpb246IEFycmF5PE9iamVjdD4sIHNlYXJjaFN0cmluZzogc3RyaW5nLCBvcHRpb25zOiBOZ0Z1c2VPcHRpb25zID0ge30pOiBhbnkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmZ1c2VTZXJ2aWNlLnNlYXJjaChjb2xsZWN0aW9uLCBzZWFyY2hTdHJpbmcsIG9wdGlvbnMpO1xyXG4gICAgfVxyXG59Il19