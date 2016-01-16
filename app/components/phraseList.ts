import {Component, NgZone} from 'angular2/core';
import {Phrase} from '../../app/models/phrase';
import {LanguageService} from '../../app/services/languageService';
import {SettingsService} from '../../app/services/settingsService';
import {PhraseService} from '../../app/services/phraseService';
import {Store} from '../../app/services/store';
import {SpeakService} from '../../app/services/speakService';

import {SelectLanguage} from '../Pipes/selectLanguage';

@Component({
  selector: 'phrase-list',
  pipes: [SelectLanguage],
  template: `
  <div>
    <div class="recogized-phrase">
      {{recogizedPhrase()}}
    </div>
  </div>

  <div class="phrases">
    <div class="phrase"
      (click)="tooglePhrase(phrase)"
      [ngClass]="{'phrase-selected': isPhraseSelected(phrase)}"
      *ngFor="#phrase of getPhrases() | SelectLanguage: 'languageId' : getSelectetLanguageId()">
      {{phrase.text}}
    </div>
  </div>
  `
})

export class PhraseList {
  constructor(
    private _zone: NgZone,
    private _ls: LanguageService,
    private _settings: SettingsService,
    private _phrases: PhraseService,
    private _store: Store,
    private _speakService: SpeakService

    ) {
      _speakService.listenInit(_zone, this);
    }

  private _recogizedPhrase = 'Say it...';

  private recogizedPhrase() {
     return this._recogizedPhrase;
  }

  private selectedPhrases = {};
  public allPhrases: Phrase[];

  private getSelectetLanguageId() {
    return this._ls.getSelectedLanguage();
  }
  private getPhrases() {
    return this._store.getAllPhrases();
  }

  recognition;
  tooglePhrase(phrase: Phrase) {
    this.selectedPhrases = {};
    this.selectedPhrases[phrase.text.toString()] = true;

    this._speakService.listen(phrase);
  }

  incommingPhraseCallback(incommingPhrase: String) {
    this._recogizedPhrase = incommingPhrase;
  }

  isPhraseSelected(phrase: Phrase) {
    return this.selectedPhrases[phrase.text.toString()];
  }
}
