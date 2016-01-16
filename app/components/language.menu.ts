import {Component} from 'angular2/core';
import {Language, LANGUAGES} from '../../app/models/languages';
import {LanguageService} from '../../app/services/languageService';
import {SettingsService} from '../../app/services/settingsService';

@Component({
  selector: 'language-menu',
  template: `
  <div class="languages" *ngFor="#language of languages; #i=index">
    <div class="language"
      (click)="toogleLanguage(language.id)"
      [ngClass]="{'language-selected': isLanguageSelected(language.id)}">
      {{language.label}}
    </div>
  </div>
  `
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
