import { PipeTransform } from '@angular/core';
import { NgFuseOptions, NgFuseService } from './ngfuse.service';
export declare class NgFusePipe implements PipeTransform {
    private fuseService;
    constructor(fuseService: NgFuseService);
    transform(collection: Array<Object>, searchString: string, options?: NgFuseOptions): any;
}
