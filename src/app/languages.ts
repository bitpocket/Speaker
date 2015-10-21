import {Component, bootstrap, FORM_DIRECTIVES, NgFor, NgClass} from 'angular2/angular2';

@Component({
  selector: 'languages-set',
  template:
  `
    <div class="languages" *ng-for="#language of languages">
      <div class="language"
          (click)="toogleLanguage(language)"
          [ng-class]="{'language-selected': isLanguageSelected(language)}">
          {{language.label}}
      </div>
    </div>
  `,
  directives: [FORM_DIRECTIVES, NgFor, NgClass]
})

class languagesSetComponent {
  private selectedLanguage : Language = null;
  private selectedLanguages = {};
  public languages = LANGUAGES;

  toogleLanguage(language: Language){
    this.selectedLanguages = {};
    this.selectedLanguages[language.code] = true;
    this.selectedLanguage = language;

    //TODO: select phrases
  }

  isLanguageSelected(language){
    return this.selectedLanguages[language.code];
  }
}

bootstrap(languagesSetComponent);

var CS = 'cs-CS',
    EN = 'en-US',
    ES = 'es-ES',
    DE = 'de-DE',
    IT = 'it-IT',
    PL = 'pl-PL',
    PT = 'pt-PT',
    SK = 'sk-SK';

class Language {
    label: string;
    code: string;
}

var LANGUAGES: Language[] = [
    { label: 'CS', code: CS },
    { label: 'EN', code: EN },
    { label: 'ES', code: ES },
    { label: 'DE', code: DE },
    { label: 'IT', code: IT },
    { label: 'PL', code: PL },
    { label: 'PT', code: PT },
    { label: 'SK', code: SK }];
