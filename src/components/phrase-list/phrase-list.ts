/// <reference path="../../../node_modules/underscore/underscore.d.ts"/>
import {Component, bootstrap, FORM_DIRECTIVES, NgFor, NgZone, NgClass} from 'angular2/angular2';
import {Phrase} from '../../app/models/phrase';
import {LanguageService} from '../../app/services/languageService';
import {SettingsService} from '../../app/services/settingsService';
import {PhraseService} from '../../app/services/phraseService';
import {Store} from '../../app/services/store';

@Component({
  selector: 'phrase-list',
  templateUrl: 'components/phrase-list/phrase-list.html',
  directives: [FORM_DIRECTIVES, NgFor, NgClass]
})

export class PhraseList {
  constructor(
    private _ls: LanguageService,
    private _settings: SettingsService,
    private _phrases: PhraseService,
    private _store: Store) {
  }

  //public recogizedPhrase: string;
  private selectedPhrases = {};
  public allPhrases: Phrase[];

  get phrases() {
    return this._store.getAllPhrasesByLanguage(this._ls.getSelectedLanguage());
  }

  tooglePhrase(phrase: Phrase) {
    this.selectedPhrases = {};
    this.selectedPhrases[phrase.text.toString()] = true;
  }

  isPhraseSelected(phrase: Phrase) {
    return this.selectedPhrases[phrase.text.toString()];
  }
}
