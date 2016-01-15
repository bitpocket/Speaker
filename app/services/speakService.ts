
export class SpeakService {
  constructor() {
    this.listenInit();
  }

  public CallBackScope;

  speak(phrase, CallBackScope) {
    this.CallBackScope = CallBackScope;
    var u = new SpeechSynthesisUtterance(),
        that = this;
    u.text = phrase.text;
    u.lang = phrase.languageId;
    u.rate = 1.0;
    u.onend = function() {
      that.listen(phrase);

    };
    speechSynthesis.speak(u);

    //recognizeCallback();
    //
    //this.recogizedPhrase = 'first test';
    //console.log('first test');
    // var that = this;
    // window.setTimeout(function() {
    //    //this.recogizedPhrase = 'next test';
    //    //console.log('next test');
    //   // detectChanges();
    //     that.CallBackScope.testcallback(777);
    //  }, 10);

    //
    // window.setTimeout(function() {
    // //  Zone.bindPromiseFn();
    //    this.recogizedPhrase = 'next test';
    //    console.log('next test');
    //   // detectChanges();
    //   // recognizeCallback()
    //  }, 10);
  }

  listen(phrase) {
    if (this.isRecognizing()) {
      this.recognition.stop();
    }
     else {
      this.recognition.lang = phrase.languageId;
      this.recognition.start();
    }
  }

  private recognition = null;
  private recognizing = false;
  private recogizedPhrase : String = '';

  isRecognizing() {
    return this.recognizing;
  };

  getRecogizedPhrase() :String {
    return this.recogizedPhrase || 'Say it ...';
  };

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
          } else {
            that.recogizedPhrase = event.results[i][0].transcript + ' (' + confidFix + ')';
            console.log(that.recogizedPhrase);
          }

          if (that.CallBackScope) {
            //that.CallBackScope._increaseProgress2();
            //that.CallBackScope.testcallback(that.CallBackScope._recogizedPhrase+1);
            //that.CallBackScope._recogizedPhrase += 1;
            that.CallBackScope.testcallback(888);// (that.recogizedPhrase);
          }
        }
      };

    }
  }
}
