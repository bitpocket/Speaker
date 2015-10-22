/// <reference path="../../node_modules/underscore/underscore.d.ts"/>
import {Component, bootstrap, FORM_DIRECTIVES, NgFor, NgZone, NgClass} from 'angular2/angular2';
//import {zone} from 'zone/lib/zone';
import {Phrase} from './phrase';
import {Language, EN, DE, PL} from './languages';

@Component({
  selector: 'phrases-list',
  template:
  //{{phrases}}
  `
  <div>
    <div class="recogized-phrase">
      {{recogizedPhrase}}
    </div>
  </div>

  <div class="phrases">
    <div class="phrase"
      (click)="tooglePhrase(phrase)"
      [ng-class]="{'phrase-selected': isPhraseSelected(phrase)}"
      *ng-for="#phrase of phrases; #i=index">
      {{phrase.text}}
    </div>
  </div>
  `,
  directives: [FORM_DIRECTIVES, NgFor, NgClass]
})

export class phrasesListComponent {
  public recogizedPhrase: string;
  private selectedPhrases = {};
  public allPhrases: Phrase[] = [
      {   text: "I'd just like a word with you, if I might.",
          language: EN },
      {   text: "God always had the final word.",
          language: EN },
      {   text: "Dass ein eigenes Zuhause durch nichts zu ersetzen ist.",
          language: DE },
      {   text: "wiadereczko z wodą",
          language: PL }
  ];

  public phrases: Phrase[] = this.allPhrases;

  // public getPhrases():Phrase[] {
  //     return this.phrases;
  // }

  // zone: NgZone;
  // constructor(zone:NgZone) {
  //    this.zone = zone;
  //  }

  public setLanguage(lang: Language) {
    //var that = this;


    // this.phrases = _.filter(this.allPhrases, function(p) {
    //           return p.language === lang.code;
    //       });

    // Zone.bindPromiseFn(
    //   {
    // this.zone.run(() => {
    //   that.phrases = _.filter(that.allPhrases, function(p) {
    //             return p.language === lang.code;
    //         });
    // }
    //);


      //}
          // );
          //Zone.afterTask();
      //Zone.apply();

    // var that = this;
    // this.zone.run(() => {
    //   console.log('place change');
    //
    //   var a = _.filter(this.allPhrases, function(p) {
    //           return p.language === lang.code;
    //       });
    //
    //
    //
    //   that.phrases = that.allPhrases;
    //   //zone.afterTask();
    //   });
  }

  tooglePhrase(phrase: Phrase) {
    this.selectedPhrases = {};
    this.selectedPhrases[phrase.text] = true;
    //phrase.text = 'some';
    //this.phrases.pop
  }

  isPhraseSelected(phrase: Phrase) {
    return this.selectedPhrases[phrase.text];
  }
}

bootstrap(phrasesListComponent);
