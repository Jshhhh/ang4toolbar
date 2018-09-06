import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { pageNav } from './tools/pageNav.component';
import { dropDown } from './tools/dropDown.component';

@NgModule({
  declarations: [
    AppComponent,
    pageNav,
    dropDown
  ],
  imports: [
    BrowserModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
