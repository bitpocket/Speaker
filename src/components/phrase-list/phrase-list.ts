import {Component, bootstrap, FORM_DIRECTIVES, NgFor, NgZone, NgClass} from 'angular2/angular2';
import {Phrase} from '../../app/models/phrase';
import {LanguageService} from '../../app/services/languageService';
import {SettingsService} from '../../app/services/settingsService';
import {PhraseService} from '../../app/services/phraseService';
import {Store} from '../../app/services/store';
import {SpeakService} from '../../app/services/speakService';

@Component({
  selector: 'phrase-list',
  templateUrl: 'components/phrase-list/phrase-list.html',
  directives: [FORM_DIRECTIVES, NgFor, NgClass],
  //bind:{
  //  'allPhrases'}

  //changeDetection :ChangeDetectionStrategy.OnPush
  //changeDetection:ChangeDetectionStrategy.OnPush
  //changeDetection:changeDetectionStrategy.OnPush
  //ChangeDetectionStrategy: CheckOnce
})

export class PhraseList {
  constructor(
    private _ls: LanguageService,
    private _settings: SettingsService,
    private _phrases: PhraseService,
    private _store: Store,
    private _ngZone: NgZone,
    private _speakService: SpeakService  ) {

  }

  private _recogizedPhrase : number = 0;// = 'Say it...';
  get recogizedPhrase(){
    return this._recogizedPhrase;
  //  return this._speakService.getRecogizedPhrase();
  }

  private selectedPhrases = {};
  public allPhrases: Phrase[];

  get phrases() {
    //return 'fgsdfg';//this._recogizedPhrase;
    return this._store.getAllPhrasesByLanguage(this._ls.getSelectedLanguage());
  }

  // _increaseProgress(){//doneCallback) {
  //   this._recogizedPhrase = 10;
  //   //console.log(`Current progress: ${this._recogizedPhrase}%`);
  //
  //   //if (this._recogizedPhrase < 100) {
  //     var that = this;
  //     window.setTimeout(function(){that._increaseProgress2(/*doneCallback*/);}, 10);
  //
  // //  } else {
  //     //doneCallback();
  //   //}
  // }
  // _increaseProgress3(){
  //   this._recogizedPhrase = 222;
  // }
  // _increaseProgress2() {
  //   this._recogizedPhrase = 111;
  //   var that = this;
  //   window.setTimeout(function(){that._increaseProgress3()}, 10);
  //
  //   // window.setTimeout(function(){
  //   //   this._recogizedPhrase += 1;
  //   // }, 10);
  // }
  recognition;
  tooglePhrase(phrase: Phrase) {
    this.selectedPhrases = {};
    this.selectedPhrases[phrase.text.toString()] = true;

    var context = this;

    //
    // Problem 1 - detection change not working
    //

//    this._ngZone.run(function() {
      context.recognition = new webkitSpeechRecognition();
      context.recognition.continuous = false;
      context.recognition.interimResults = true;

      context.recognition.onresult = function(event) {
        for (var i = event.resultIndex; i < event.results.length; ++i) {
          context._recogizedPhrase += 1;
          console.log(event.results[i][0].transcript);
        }
      };

      context.recognition.lang = phrase.languageId;
      context.recognition.start();
  //  });

  //
  // Problem 2 - detection change is working
  //

    //var that = this;
    window.setTimeout(function(){
      context._recogizedPhrase = 555;
      console.log(555);
    }, 2000);

  }

  //
  // Problem 3 - zones should not working well
  //

  //  ZONES
  // In Angular 1 you have to tell the framework that it needs to run this check by doing scope.$apply.
  // You don’t need to worry about it in Angular 2. Angular 2 uses Zone.js to know when this check is required.,
  // This means that you do not need to call scope.$apply to integrate with third-party libraries.


  // //public that = this;
  // _final(inc:number){
  //    this._recogizedPhrase = inc;
  //    console.log(inc);
  // }
  //
  // testcallback(inc:number ) {
  //   this._recogizedPhrase = inc;
  //   var that = this;
  //   window.setTimeout(function(){that._final(inc)}, 10);
  //
  //   // this._recogizedPhrase = inc;//'testhrase';
  //   // console.log(inc);
  //   // this._increaseProgress2();
  // }

  incommingPhraseCallback(incommingPhrase: String) {
    //this._recogizedPhrase = incommingPhrase;
  }

  isPhraseSelected(phrase: Phrase) {
    return this.selectedPhrases[phrase.text.toString()];
  }
}
