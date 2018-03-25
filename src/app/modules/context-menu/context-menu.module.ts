import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContextMenuComponent } from './context-menu.component';
import { ContextMenuDirective } from './context-menu.directive';
import { ContextMenuService } from './context-menu.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ContextMenuComponent, ContextMenuDirective],
  exports:[
    ContextMenuComponent,
    ContextMenuDirective
  ],
  providers:[ContextMenuService]
})
export class ContextMenuModule { }
