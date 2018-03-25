import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ContextMenuModule } from './modules/context-menu/context-menu.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ContextMenuModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
