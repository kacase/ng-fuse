/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Pipe } from '@angular/core';
import { NgFuseService } from './ngfuse.service';
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
export { NgFusePipe };
if (false) {
    /** @type {?} */
    NgFusePipe.prototype.fuseService;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmdmdXNlLnBpcGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy1mdXNlLyIsInNvdXJjZXMiOlsic3JjL25nZnVzZS5waXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsSUFBSSxFQUFpQixNQUFNLGVBQWUsQ0FBQztBQUNwRCxPQUFPLEVBQWlCLGFBQWEsRUFBRSxNQUFNLGtCQUFrQixDQUFBOztJQUszRCxvQkFBb0IsV0FBMEI7UUFBMUIsZ0JBQVcsR0FBWCxXQUFXLENBQWU7S0FBSzs7Ozs7OztJQUVuRCw4QkFBUzs7Ozs7O0lBQVQsVUFBVSxVQUF5QixFQUFFLFlBQW9CLEVBQUUsT0FBMkI7UUFBM0Isd0JBQUEsRUFBQSxZQUEyQjtRQUNsRixNQUFNLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsVUFBVSxFQUFFLFlBQVksRUFBRSxPQUFPLENBQUMsQ0FBQztLQUNyRTs7Z0JBUEosSUFBSSxTQUFDLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRTs7OztnQkFGQSxhQUFhOztxQkFEckM7O1NBSWEsVUFBVSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBpcGUsIFBpcGVUcmFuc2Zvcm0gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgTmdGdXNlT3B0aW9ucywgTmdGdXNlU2VydmljZSB9IGZyb20gJy4vbmdmdXNlLnNlcnZpY2UnXHJcblxyXG5AUGlwZSh7IG5hbWU6IFwibmdGdXNlXCIgfSlcclxuZXhwb3J0IGNsYXNzIE5nRnVzZVBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGZ1c2VTZXJ2aWNlOiBOZ0Z1c2VTZXJ2aWNlKSB7IH1cclxuXHJcbiAgICB0cmFuc2Zvcm0oY29sbGVjdGlvbjogQXJyYXk8T2JqZWN0Piwgc2VhcmNoU3RyaW5nOiBzdHJpbmcsIG9wdGlvbnM6IE5nRnVzZU9wdGlvbnMgPSB7fSk6IGFueSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZnVzZVNlcnZpY2Uuc2VhcmNoKGNvbGxlY3Rpb24sIHNlYXJjaFN0cmluZywgb3B0aW9ucyk7XHJcbiAgICB9XHJcbn0iXX0=