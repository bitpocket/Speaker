import {Component} from 'angular2/core';

import {TopHeader} from '../components//top.header';
// import {Menu} from '../menu/menu';
// import {MainContent} from '../main-content/main-content';

@Component({
  selector: 'my-app',
  template: `
  Main
  <div class="container">
    <top-header></top-header>
    <menu></menu>
    <main-content></main-content>
  </div>
    `,
    directives: [
      TopHeader
      // Menu,
      // MainContent
    ]
})

export class MainApp {
}
