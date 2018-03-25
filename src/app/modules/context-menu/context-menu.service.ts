import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class ContextMenuService {
    public show: Subject<{ event: MouseEvent, links: any[], menuClickHandler: Function }> = new Subject<{ event: MouseEvent, links: any[], menuClickHandler: Function }>()
}