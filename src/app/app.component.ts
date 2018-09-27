import { Component } from '@angular/core';
import { pageNav } from './tools/pageNav.component';
import { dropDown } from './tools/dropDown.component';
import { pageAlign } from './tools/pageAlign.component';
import { zoom } from './tools/zoom.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent {
  tools: Array<any> = [
    {
        display: "dropDown",
        component: dropDown
    },
    {
      display: "pageAlign",
      component: pageAlign
    },
    {
      display: "pageNav",
      component: pageNav
    },
    {
      display: "zoom",
      component: zoom
    }
  ]
}
