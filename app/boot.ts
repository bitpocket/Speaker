import {bootstrap}    from 'angular2/platform/browser'

import {MainApp} from './components/main.app'
import {LanguageService} from '../app/services/languageService';
import {SettingsService} from '../app/services/settingsService';
import {PhraseService} from '../app/services/phraseService';
import {SpeakService} from '../app/services/speakService';
import {Store} from '../app/services/store';

bootstrap(MainApp, [
  LanguageService,
  Store,
  SettingsService,
  PhraseService,
  SpeakService
]);
