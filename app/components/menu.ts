import {Component} from 'angular2/core';

import {LanguageMenu} from '../components/language.menu';

@Component({
  selector: 'menu',
  template: `
  <div id="second-row" class="row">
  <div class="col-md-3 box side-menu-left">
    <div class="menu-item menu-disabled">LEARN</div>
    <div class="menu-item menu-disabled">TEST</div>
    <div class="menu-item menu-disabled">COMPOSE</div>
  </div>

  <div class="col-md-6 box">
      <center>
        <language-menu>loading...</language-menu>
      </center>
  </div>

  <div class="col-md-3 box">
    <div class="side-menu-right">
      <div class="menu-item menu-disabled">LOGIN</div>
      <div class="menu-item menu-disabled">SETUP</div>
      <div class="menu-item menu-disabled">ABOUT</div>
    </div>
  </div>
</div>

  `
  ,
  directives: [
    LanguageMenu
  ]
})

export class Menu {
}
