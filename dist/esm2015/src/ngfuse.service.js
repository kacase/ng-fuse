/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import * as Fuse from 'fuse.js';
export class NgFuseService {
    constructor() {
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
    search(collection, searchString, options = {}) {
        Object.assign(this.searchOptions, this.defaults, options);
        /** @type {?} */
        let results = [];
        if (searchString && searchString.length >= this.searchOptions.minSearchStringLenght) {
            /** @type {?} */
            const fuse = new Fuse(collection, this.searchOptions);
            results = fuse.search(searchString);
            return results;
        }
        else {
            return collection;
        }
    }
    ;
}
NgFuseService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
NgFuseService.ctorParameters = () => [];
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmdmdXNlLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy1mdXNlLyIsInNvdXJjZXMiOlsic3JjL25nZnVzZS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sS0FBSyxJQUFJLE1BQU0sU0FBUyxDQUFDO0FBR2hDLE1BQU07SUFhRjt3QkFaMEI7WUFDdEIsVUFBVSxFQUFFLElBQUk7WUFDaEIsU0FBUyxFQUFFLEdBQUc7WUFDZCxRQUFRLEVBQUUsQ0FBQztZQUNYLFFBQVEsRUFBRSxHQUFHO1lBQ2IsZ0JBQWdCLEVBQUUsRUFBRTtZQUNwQixrQkFBa0IsRUFBRSxDQUFDO1lBQ3JCLHFCQUFxQixFQUFFLENBQUM7U0FDM0I7NkJBRThCLElBQUksQ0FBQyxRQUFRO0tBRTNCO0lBQUEsQ0FBQzs7Ozs7OztJQUVsQixNQUFNLENBQUMsVUFBeUIsRUFBRSxZQUFvQixFQUFFLFVBQXlCLEVBQUU7UUFDL0UsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQyxRQUFRLEVBQUUsT0FBTyxDQUFDLENBQUM7O1FBRTFELElBQUksT0FBTyxHQUFHLEVBQUUsQ0FBQTtRQUNoQixFQUFFLENBQUMsQ0FBQyxZQUFZLElBQUksWUFBWSxDQUFDLE1BQU0sSUFBSSxJQUFJLENBQUMsYUFBYSxDQUFDLHFCQUFxQixDQUFDLENBQUMsQ0FBQzs7WUFDbEYsTUFBTSxJQUFJLEdBQUcsSUFBSSxJQUFJLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztZQUN0RCxPQUFPLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsQ0FBQztZQUNwQyxNQUFNLENBQUMsT0FBTyxDQUFDO1NBQ2xCO1FBQUMsSUFBSSxDQUFDLENBQUM7WUFDSixNQUFNLENBQUMsVUFBVSxDQUFDO1NBQ3JCO0tBQ0o7SUFBQSxDQUFDOzs7WUEzQkwsVUFBVSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0ICogYXMgRnVzZSBmcm9tICdmdXNlLmpzJztcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIE5nRnVzZVNlcnZpY2Uge1xyXG4gICAgZGVmYXVsdHM6IE5nRnVzZU9wdGlvbnMgPSB7XHJcbiAgICAgICAgc2hvdWxkU29ydDogdHJ1ZSxcclxuICAgICAgICB0aHJlc2hvbGQ6IDAuNCxcclxuICAgICAgICBsb2NhdGlvbjogMCxcclxuICAgICAgICBkaXN0YW5jZTogMTAwLFxyXG4gICAgICAgIG1heFBhdHRlcm5MZW5ndGg6IDMyLFxyXG4gICAgICAgIG1pbk1hdGNoQ2hhckxlbmd0aDogMSxcclxuICAgICAgICBtaW5TZWFyY2hTdHJpbmdMZW5naHQ6IDFcclxuICAgIH1cclxuXHJcbiAgICBzZWFyY2hPcHRpb25zOiBOZ0Z1c2VPcHRpb25zID0gdGhpcy5kZWZhdWx0cztcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHsgfTtcclxuXHJcbiAgICBzZWFyY2goY29sbGVjdGlvbjogQXJyYXk8T2JqZWN0Piwgc2VhcmNoU3RyaW5nOiBzdHJpbmcsIG9wdGlvbnM6IE5nRnVzZU9wdGlvbnMgPSB7fSkge1xyXG4gICAgICAgIE9iamVjdC5hc3NpZ24odGhpcy5zZWFyY2hPcHRpb25zLCB0aGlzLmRlZmF1bHRzLCBvcHRpb25zKTtcclxuXHJcbiAgICAgICAgbGV0IHJlc3VsdHMgPSBbXVxyXG4gICAgICAgIGlmIChzZWFyY2hTdHJpbmcgJiYgc2VhcmNoU3RyaW5nLmxlbmd0aCA+PSB0aGlzLnNlYXJjaE9wdGlvbnMubWluU2VhcmNoU3RyaW5nTGVuZ2h0KSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGZ1c2UgPSBuZXcgRnVzZShjb2xsZWN0aW9uLCB0aGlzLnNlYXJjaE9wdGlvbnMpO1xyXG4gICAgICAgICAgICByZXN1bHRzID0gZnVzZS5zZWFyY2goc2VhcmNoU3RyaW5nKTtcclxuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdHM7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIGNvbGxlY3Rpb247XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBOZ0Z1c2VPcHRpb25zIGV4dGVuZHMgRnVzZS5GdXNlT3B0aW9ucyB7XHJcbiAgICBtaW5TZWFyY2hTdHJpbmdMZW5naHQ/OiAxO1xyXG59Il19