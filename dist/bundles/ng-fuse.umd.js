(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('fuse.js'), require('@angular/common'), require('@angular/forms')) :
    typeof define === 'function' && define.amd ? define('ng-fuse', ['exports', '@angular/core', 'fuse.js', '@angular/common', '@angular/forms'], factory) :
    (factory((global['ng-fuse'] = {}),global.ng.core,global.Fuse,global.ng.common,global.ng.forms));
}(this, (function (exports,core,Fuse,common,forms) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var NgFuseService = (function () {
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
                if (options === void 0) {
                    options = {};
                }
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
            { type: core.Injectable }
        ];
        /** @nocollapse */
        NgFuseService.ctorParameters = function () { return []; };
        return NgFuseService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var NgFusePipe = (function () {
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
                if (options === void 0) {
                    options = {};
                }
                return this.fuseService.search(collection, searchString, options);
            };
        NgFusePipe.decorators = [
            { type: core.Pipe, args: [{ name: "ngFuse" },] }
        ];
        /** @nocollapse */
        NgFusePipe.ctorParameters = function () {
            return [
                { type: NgFuseService }
            ];
        };
        return NgFusePipe;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var NgFuseModule = (function () {
        function NgFuseModule() {
        }
        NgFuseModule.decorators = [
            { type: core.NgModule, args: [{
                        declarations: [
                            NgFusePipe
                        ],
                        imports: [
                            common.CommonModule,
                            forms.FormsModule
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

    exports.NgFuseModule = NgFuseModule;
    exports.NgFuseService = NgFuseService;
    exports.NgFusePipe = NgFusePipe;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmctZnVzZS51bWQuanMubWFwIiwic291cmNlcyI6WyJuZzovL25nLWZ1c2Uvc3JjL25nZnVzZS5zZXJ2aWNlLnRzIiwibmc6Ly9uZy1mdXNlL3NyYy9uZ2Z1c2UucGlwZS50cyIsIm5nOi8vbmctZnVzZS9pbmRleC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCAqIGFzIEZ1c2UgZnJvbSAnZnVzZS5qcyc7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBOZ0Z1c2VTZXJ2aWNlIHtcclxuICAgIGRlZmF1bHRzOiBOZ0Z1c2VPcHRpb25zID0ge1xyXG4gICAgICAgIHNob3VsZFNvcnQ6IHRydWUsXHJcbiAgICAgICAgdGhyZXNob2xkOiAwLjQsXHJcbiAgICAgICAgbG9jYXRpb246IDAsXHJcbiAgICAgICAgZGlzdGFuY2U6IDEwMCxcclxuICAgICAgICBtYXhQYXR0ZXJuTGVuZ3RoOiAzMixcclxuICAgICAgICBtaW5NYXRjaENoYXJMZW5ndGg6IDEsXHJcbiAgICAgICAgbWluU2VhcmNoU3RyaW5nTGVuZ2h0OiAxXHJcbiAgICB9XHJcblxyXG4gICAgc2VhcmNoT3B0aW9uczogTmdGdXNlT3B0aW9ucyA9IHRoaXMuZGVmYXVsdHM7XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7IH07XHJcblxyXG4gICAgc2VhcmNoKGNvbGxlY3Rpb246IEFycmF5PE9iamVjdD4sIHNlYXJjaFN0cmluZzogc3RyaW5nLCBvcHRpb25zOiBOZ0Z1c2VPcHRpb25zID0ge30pIHtcclxuICAgICAgICBPYmplY3QuYXNzaWduKHRoaXMuc2VhcmNoT3B0aW9ucywgdGhpcy5kZWZhdWx0cywgb3B0aW9ucyk7XHJcblxyXG4gICAgICAgIGxldCByZXN1bHRzID0gW11cclxuICAgICAgICBpZiAoc2VhcmNoU3RyaW5nICYmIHNlYXJjaFN0cmluZy5sZW5ndGggPj0gdGhpcy5zZWFyY2hPcHRpb25zLm1pblNlYXJjaFN0cmluZ0xlbmdodCkge1xyXG4gICAgICAgICAgICBjb25zdCBmdXNlID0gbmV3IEZ1c2UoY29sbGVjdGlvbiwgdGhpcy5zZWFyY2hPcHRpb25zKTtcclxuICAgICAgICAgICAgcmVzdWx0cyA9IGZ1c2Uuc2VhcmNoKHNlYXJjaFN0cmluZyk7XHJcbiAgICAgICAgICAgIHJldHVybiByZXN1bHRzO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiBjb2xsZWN0aW9uO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgTmdGdXNlT3B0aW9ucyBleHRlbmRzIEZ1c2UuRnVzZU9wdGlvbnMge1xyXG4gICAgbWluU2VhcmNoU3RyaW5nTGVuZ2h0PzogMTtcclxufSIsImltcG9ydCB7IFBpcGUsIFBpcGVUcmFuc2Zvcm0gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgTmdGdXNlT3B0aW9ucywgTmdGdXNlU2VydmljZSB9IGZyb20gJy4vbmdmdXNlLnNlcnZpY2UnXHJcblxyXG5AUGlwZSh7IG5hbWU6IFwibmdGdXNlXCIgfSlcclxuZXhwb3J0IGNsYXNzIE5nRnVzZVBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGZ1c2VTZXJ2aWNlOiBOZ0Z1c2VTZXJ2aWNlKSB7IH1cclxuXHJcbiAgICB0cmFuc2Zvcm0oY29sbGVjdGlvbjogQXJyYXk8T2JqZWN0Piwgc2VhcmNoU3RyaW5nOiBzdHJpbmcsIG9wdGlvbnM6IE5nRnVzZU9wdGlvbnMgPSB7fSk6IGFueSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZnVzZVNlcnZpY2Uuc2VhcmNoKGNvbGxlY3Rpb24sIHNlYXJjaFN0cmluZywgb3B0aW9ucyk7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQgeyBGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuXHJcbmltcG9ydCB7IE5nRnVzZU9wdGlvbnMsIE5nRnVzZVNlcnZpY2UgfSBmcm9tICcuL3NyYy9uZ2Z1c2Uuc2VydmljZSc7XHJcbmltcG9ydCB7IE5nRnVzZVBpcGUgfSBmcm9tICcuL3NyYy9uZ2Z1c2UucGlwZSc7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG5cdGRlY2xhcmF0aW9uczogW1xyXG5cdFx0TmdGdXNlUGlwZVxyXG5cdF0sXHJcblx0aW1wb3J0czogW1xyXG5cdFx0Q29tbW9uTW9kdWxlLFxyXG5cdFx0Rm9ybXNNb2R1bGVcclxuXHRdLFxyXG5cdGV4cG9ydHM6IFtcclxuXHRcdE5nRnVzZVBpcGVcclxuXHRdLFxyXG5cdHByb3ZpZGVyczogW05nRnVzZVNlcnZpY2VdLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgTmdGdXNlTW9kdWxlIHsgfVxyXG5leHBvcnQgeyBOZ0Z1c2VPcHRpb25zLCBOZ0Z1c2VTZXJ2aWNlIH0gZnJvbSAnLi9zcmMvbmdmdXNlLnNlcnZpY2UnO1xyXG5leHBvcnQgeyBOZ0Z1c2VQaXBlIH0gZnJvbSAnLi9zcmMvbmdmdXNlLnBpcGUnO1xyXG4iXSwibmFtZXMiOlsiSW5qZWN0YWJsZSIsIlBpcGUiLCJOZ01vZHVsZSIsIkNvbW1vbk1vZHVsZSIsIkZvcm1zTW9kdWxlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7UUFpQkk7NEJBWjBCO2dCQUN0QixVQUFVLEVBQUUsSUFBSTtnQkFDaEIsU0FBUyxFQUFFLEdBQUc7Z0JBQ2QsUUFBUSxFQUFFLENBQUM7Z0JBQ1gsUUFBUSxFQUFFLEdBQUc7Z0JBQ2IsZ0JBQWdCLEVBQUUsRUFBRTtnQkFDcEIsa0JBQWtCLEVBQUUsQ0FBQztnQkFDckIscUJBQXFCLEVBQUUsQ0FBQzthQUMzQjtpQ0FFOEIsSUFBSSxDQUFDLFFBQVE7U0FFM0I7Ozs7Ozs7UUFFakIsOEJBQU07Ozs7OztZQUFOLFVBQU8sVUFBeUIsRUFBRSxZQUFvQixFQUFFLE9BQTJCO2dCQUEzQix3QkFBQTtvQkFBQSxZQUEyQjs7Z0JBQy9FLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMsUUFBUSxFQUFFLE9BQU8sQ0FBQyxDQUFDOztnQkFFMUQsSUFBSSxPQUFPLEdBQUcsRUFBRSxDQUFBO2dCQUNoQixJQUFJLFlBQVksSUFBSSxZQUFZLENBQUMsTUFBTSxJQUFJLElBQUksQ0FBQyxhQUFhLENBQUMscUJBQXFCLEVBQUU7O29CQUNqRixJQUFNLElBQUksR0FBRyxJQUFJLElBQUksQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO29CQUN0RCxPQUFPLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsQ0FBQztvQkFDcEMsT0FBTyxPQUFPLENBQUM7aUJBQ2xCO3FCQUFNO29CQUNILE9BQU8sVUFBVSxDQUFDO2lCQUNyQjthQUNKOztvQkEzQkpBLGVBQVU7Ozs7NEJBSFg7Ozs7Ozs7QUNBQTtRQU1JLG9CQUFvQixXQUEwQjtZQUExQixnQkFBVyxHQUFYLFdBQVcsQ0FBZTtTQUFLOzs7Ozs7O1FBRW5ELDhCQUFTOzs7Ozs7WUFBVCxVQUFVLFVBQXlCLEVBQUUsWUFBb0IsRUFBRSxPQUEyQjtnQkFBM0Isd0JBQUE7b0JBQUEsWUFBMkI7O2dCQUNsRixPQUFPLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLFVBQVUsRUFBRSxZQUFZLEVBQUUsT0FBTyxDQUFDLENBQUM7YUFDckU7O29CQVBKQyxTQUFJLFNBQUMsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFOzs7Ozt3QkFGQSxhQUFhOzs7eUJBRHJDOzs7Ozs7O0FDQUE7Ozs7b0JBT0NDLGFBQVEsU0FBQzt3QkFDVCxZQUFZLEVBQUU7NEJBQ2IsVUFBVTt5QkFDVjt3QkFDRCxPQUFPLEVBQUU7NEJBQ1JDLG1CQUFZOzRCQUNaQyxpQkFBVzt5QkFDWDt3QkFDRCxPQUFPLEVBQUU7NEJBQ1IsVUFBVTt5QkFDVjt3QkFDRCxTQUFTLEVBQUUsQ0FBQyxhQUFhLENBQUM7cUJBQzFCOzsyQkFuQkQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyJ9