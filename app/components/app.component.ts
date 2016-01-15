import {
Component, NgZone
} from 'angular2/core';

@Component({
  selector: 'my-app',
  template: `
    <h1>My First Angular 2 Beta.0 App</h1>
    <div><input [(ngModel)]="someVariable" placeholder="name"></div>
    <div (click)="listen('phrase')">
    Start timer
    </div>
    `
})
export class AppComponent {
  zone: NgZone;
  constructor(zone: NgZone) {
    this.zone = zone;
    this.listenInit();
  }

  public CallBackScope: String;
  public someVariable = 'Say it...';

  private recognition = null;
  private recognizing = false;
  private recogizedPhrase: String = '';

  isRecognizing() {
    return this.recognizing;
  };

  getRecogizedPhrase(): String {
    return this.recogizedPhrase || 'Say it ...';
  };

  listen(phrase) {
    if (this.isRecognizing()) {
      this.recognition.stop();
    }
    else {
      this.recognition.lang = phrase.languageId;
      this.recognition.start();
    }
  }

  listenInit() {
    if ('webkitSpeechRecognition' in window) {

      this.recognition = new webkitSpeechRecognition();
      this.recognition.continuous = false;
      this.recognition.interimResults = true;
      var that = this;

      this.recognition.onstart = function() {
        that.recognizing = true;
      };

      this.recognition.onerror = function(event) {
        that.recogizedPhrase = "There was a recognition error...";
      };

      this.recognition.onend = function() {
        that.recognizing = false;
      };

      this.recognition.onresult = function(event) {
        that.zone.run(() => {
          var interimTranscript = '';

          // Assemble the transcript from the array of results
          for (var i = event.resultIndex; i < event.results.length; ++i) {
            var confid = event.results[i][0].confidence,
              confidFix = parseFloat((Math.round(confid * 100) / 100).toFixed()).toFixed(2);

            if (event.results[i].isFinal) {
              that.recogizedPhrase = event.results[i][0].transcript + ' (' + confidFix + ')';
              that.recognition.stop();
              that.recognizing = false;
              console.log(that.recogizedPhrase);
              that.someVariable = that.recogizedPhrase.toString();
            } else {
              that.recogizedPhrase = event.results[i][0].transcript + ' (' + confidFix + ')';
              console.log(that.recogizedPhrase);
              that.someVariable = that.recogizedPhrase.toString();
            }
          }
        });

      };
    }
  }



  //-----------------

  // public someVariable = 'sdf';
  // public counter = 0;
  //
  // timerFunction(context) {
  //   context.counter++;
  //   context.someVariable = context.counter.toString();
  //   setTimeout(() => {
  //     context.timerFunction(context)
  //   }, 500);
  // }
  //
  // onClick() {
  //   var that = this;
  //   setTimeout(() => {
  //     that.timerFunction(that)
  //   }, 500);
  // }



}
