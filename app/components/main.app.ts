import {Component} from 'angular2/core';

import {TopHeader} from '../components/top.header';
import {Menu} from '../components/menu';
import {MainContent} from '../components/mainContent';

@Component({
  selector: 'my-app',
  template: `
  <div class="container">
    <top-header></top-header>
    <menu></menu>
    <main-content></main-content>
  </div>
    `,
    directives: [
      TopHeader,
      Menu,
      MainContent
    ]
})

export class MainApp {
}
