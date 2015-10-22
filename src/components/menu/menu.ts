import {Component} from 'angular2/angular2';

import {LanguageMenu} from '../language-menu/language-menu';

@Component({
  selector: 'menu',
  templateUrl: 'components/menu/menu.html',
  directives: [
    LanguageMenu
  ]
})

export class Menu {
}
