import {Component, bootstrap, FORM_DIRECTIVES, NgFor, NgClass} from 'angular2/angular2';
import {Language, LANGUAGES} from '../../app/models/languages';
import {LanguageService} from '../../app/services/languageService';
import {SettingsService} from '../../app/services/settingsService';

@Component({
  selector: 'language-menu',
  templateUrl: 'components/language-menu/language-menu.html',
  directives: [FORM_DIRECTIVES, NgFor, NgClass]
})

export class LanguageMenu {
  constructor(private _langService: LanguageService, private _settings: SettingsService) {
    this.toogleLanguage(_settings.getDefaultLanguageId());
  }

  get languages() {
    return this._langService.languages;
  }

  toogleLanguage(languageId: String) {
    this._langService.toogleLanguage(languageId);
  }

  isLanguageSelected(languageId: String) {
    return this._langService.isLanguageSelected(languageId);
  }
}
