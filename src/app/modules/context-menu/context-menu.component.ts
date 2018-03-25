import { Component, OnInit } from '@angular/core';
import { ContextMenuService } from './context-menu.service';

@Component({
  selector: 'context-menu',
  templateUrl: './context-menu.component.html',
  styleUrls: ['./context-menu.component.css'],
  host: {
    '(document:click)': 'clickedOutSide($event)'
  }
})
export class ContextMenuComponent {

  isShown: boolean = false;

  links = []

  menuClickHandler: Function;

  mouseLocation: {
    left: number,
    top: number
  } = {
      left: 0,
      top: 0
    }

  constructor(private _contextMenuService: ContextMenuService) {
    _contextMenuService.show.subscribe(e => this.showMenu(e.event, e.links, e.menuClickHandler))
  }

  // the css for the container div
  get locationCss() {
    return {
      'position': 'fixed',
      'display': this.isShown ? 'block' : 'none',
      left: this.mouseLocation.left + 'px',
      top: this.mouseLocation.top + 'px',
    };
  }

  showMenu(evt, links, menuClickHandler) {
    this.isShown = true;
    this.mouseLocation = {
      left: evt.clientX,
      top: evt.clientY
    }
    this.links = links;
    this.menuClickHandler = menuClickHandler;
  }

  clickedOutSide(event) {
    this.isShown = false;
  }

  menuClicked(item) {
    this.menuClickHandler(item);
  }

}
