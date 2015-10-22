import {bootstrap} from 'angular2/angular2';
import {MainApp} from './main-app/main-app';
import {LanguageService} from '../app/services/languageService';
import {SettingsService} from '../app/services/settingsService';
import {PhraseService} from '../app/services/phraseService';

import {MainContent} from './main-content/main-content';
import {Store} from '../app/services/store';

export function main() {
  bootstrap(MainApp, [MainContent, LanguageService, Store, SettingsService, PhraseService]);
}
