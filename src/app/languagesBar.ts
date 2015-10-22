import {Component, bootstrap, FORM_DIRECTIVES, NgFor, NgZone, NgClass, EventEmitter} from 'angular2/angular2';
import {Language, LANGUAGES} from './languages';
import {phrasesListComponent} from './phrasesList';

@Component({
  selector: 'languages-set',
  template:
  // {{selectedLanguage.label}}
  // <div *ng-for="#e of elsements">
  //   {{e}}
  // </div>
  `
    <div class="languages" *ng-for="#language of languages">
      <div class="language"
          (click)="toogleLanguage(language)"
          [ng-class]="{'language-selected': isLanguageSelected(language)}">
          {{language.label}}
      </div>
    </div>
  `,
  directives: [FORM_DIRECTIVES, NgFor, NgClass],
  events: ['languageChange: languagechange']
})

export class languagesSetComponent {
  languageChange = new EventEmitter();

  //public elsements = [1, 2, 3];
  private selectedLanguage: Language;// = LANGUAGES[1];
  private selectedLanguages = {};
  public languages = LANGUAGES;
  private phrasesListComponent: phrasesListComponent;
  zone: NgZone;

  constructor(phrasesListComponent: phrasesListComponent, zone: NgZone) {
    this.phrasesListComponent = phrasesListComponent;
    this.zone = zone;
    this.toogleLanguage(this.languages[1]);
  }

  toogleLanguage(language: Language) {

    this.languageChange.next(language);

    //this.languages.concat([{ label: 'CS1', code: "sdf" }]);
    //this.elsements = [1,2];
    this.selectedLanguages = {};
    this.selectedLanguages[language.code] = true;
    this.selectedLanguage = language;
    //var that = this;
    //this.zone.run(() => {
      //this.phrasesListComponent.setLanguage(language);
    //}
  //  );

    //TODO: select phrases
  }

  isLanguageSelected(language) {
    return this.selectedLanguages[language.code];
  }
}

bootstrap(languagesSetComponent, [phrasesListComponent]);
