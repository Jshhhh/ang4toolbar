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
        name: "dropDown",
        display: true,
        component: dropDown
    },
    {
      name: "pageAlign",
      display: true,
      component: pageAlign
    },
    {
      name: "pageNav",
      display: true,
      component: pageNav
    },
    {
      name: "zoom",
      display: true,
      component: zoom
    }
  ]
}
