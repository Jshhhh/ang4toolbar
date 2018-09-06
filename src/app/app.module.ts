import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { pageNav } from './tools/pageNav.component';

@NgModule({
  declarations: [
    AppComponent,
    pageNav
  ],
  imports: [
    BrowserModule,
    NgbModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
