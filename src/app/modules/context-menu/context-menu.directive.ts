import { Directive, Output, EventEmitter, Input } from '@angular/core';
import { ContextMenuService } from './context-menu.service';

@Directive({
    selector: '[rightClickMenu]',
    host: {
        '(contextmenu)': 'rightClick($event)'
    }
})
export class ContextMenuDirective {

    @Input()
    rightClickMenu: any[];

    @Output()
    onMenuClicked: EventEmitter<{ item: any }> = new EventEmitter<{ item: any }>();

    constructor(private _contextMenuService: ContextMenuService) { }

    rightClick(evt: MouseEvent) {
        evt.preventDefault();
        this._contextMenuService.show.next({ event: evt, links: this.rightClickMenu, menuClickHandler: (item) => { this.onMenuClicked.emit(item); } });
    }
}