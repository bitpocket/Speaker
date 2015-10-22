import {Component} from 'angular2/angular2';
import {PhraseList} from '../phrase-list/phrase-list';

@Component({
  selector: 'main-content',
  templateUrl: 'components/main-content/main-content.html',
  directives: [PhraseList]
})

export class MainContent {
}
