import { Component } from '@angular/core';
const toolConfig = require('./toolConfig.json');
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent {
  tools: object = toolConfig;
}
