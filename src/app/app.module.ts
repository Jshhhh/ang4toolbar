import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { LocationStrategy, PathLocationStrategy } from '@angular/common';

import { AppComponent } from './app.component';
import { pageNav } from './tools/pageNav.component';
import { dropDown } from './tools/dropDown.component';
import { pageAlign } from './tools/pageAlign.component';
import { zoom } from './tools/zoom.component';

@NgModule({
  declarations: [AppComponent,
    pageNav,
    dropDown,
    pageAlign,
    zoom],
  imports: [
    BrowserModule
  ],
  providers: [{
    provide: LocationStrategy,
    useClass: PathLocationStrategy
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
