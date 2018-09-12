import * as Fuse from 'fuse.js';
export declare class NgFuseService {
    defaults: NgFuseOptions;
    searchOptions: NgFuseOptions;
    constructor();
    search(collection: Array<Object>, searchString: string, options?: NgFuseOptions): any[];
}
export interface NgFuseOptions extends Fuse.FuseOptions {
    minSearchStringLenght?: 1;
}
