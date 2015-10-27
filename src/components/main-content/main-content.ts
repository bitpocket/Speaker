import {Component} from 'angular2/angular2';
import {PhraseList} from '../phrase-list/phrase-list';

@Component({
  selector: 'main-content',
  templateUrl: 'components/main-content/main-content.html',
  directives: [PhraseList]
})

export class MainContent {
  onUpdate(event) {
    this.SomeValue = event.value;
    console.log(event.value);
  }
  
  SomeValue = '__';
}
