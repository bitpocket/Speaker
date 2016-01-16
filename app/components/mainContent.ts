import {Component} from 'angular2/core';
import {PhraseList} from '../components/phraseList';

@Component({
  selector: 'main-content',
  template: `
  <div class="row" id="second-row">
    <div class="col-md-3 box">
    </div>

    <div class="col-md-6 box">
      <div>
        <center>
          <phrase-list>loading... </phrase-list>
        </center>
      </div>
    </div>

    <div class="col-md-3 box">
    </div>
  </div>
  `,
  directives: [PhraseList]
})

export class MainContent {
}
