import {Component, bootstrap} from 'angular2/angular2';

import {TopHeader} from '../top-header/top-header';
import {Menu} from '../Menu/Menu';
import {Content} from '../content/content';


//import {TodoMain} from 'components/todo-main/todo-main';
//import {TodoFooter} from 'components/todo-footer/todo-footer';

@Component({
  selector: 'main-app',
  //templateUrl: System.baseURL + 'app/components/main-app/main-app.html'
  //C:\Git\Speaker\src\components\main-app\main-app.html
  templateUrl: 'components/main-app/main-app.html',

  directives: [
      TopHeader,
      Menu,
      Content
  ]

  // componentServices: [
  //   TopHeader
  // ]

})



export class MainApp {
}

//bootstrap(MainApp);
