import {Component, bootstrap} from 'angular2/angular2';

import {TopHeader} from '../top-header/top-header';
import {Menu} from '../menu/menu';
import {MainContent} from '../main-content/main-content';

@Component({
  selector: 'main-app',
  templateUrl: 'components/main-app/main-app.html',
  directives: [
    TopHeader,
    Menu,
    MainContent
  ]
})

export class MainApp {
}
