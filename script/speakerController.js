angular.module('app', [])
  .controller('speakerContrller', speakerContrller);

function speakerContrller($scope) {
  var CS = 'cs-CS',
    EN = 'en-GB',
    ES = 'es-ES',
    DE = 'de-DE',
    IT = 'it-IT',
    PL = 'pl-PL',
    PT = 'pt-PT',
    SK = 'sk-SK';

  $scope.languages = [{
    label: 'CS',
    code: CS
  }, {
    label: 'EN',
    code: EN
  }, {
    label: 'ES',
    code: ES
  }, {
    label: 'DE',
    code: DE
  }, {
    label: 'IT',
    code: IT
  }, {
    label: 'PL',
    code: PL
  }, {
    label: 'PT',
    code: PT
  }, {
    label: 'SK',
    code: SK
  }];

  $scope.selectedLanguages = {};
  $scope.toogleLanguage = function(language) {
    $scope.selectedLanguages = {};
    $scope.selectedLanguages[language.code] = true;
    $scope.selectedLanguage = language;

    $scope.phrases = _.filter($scope.allPhrases, function(p) {
      return p.language === $scope.selectedLanguage.code;
    });
  };

  $scope.isLanguageSelected = function(language) {
    return $scope.selectedLanguages[language.code];
  };

  $scope.phrases = [];

  $scope.allPhrases = [{
      text: "The show lets us see the very familiar through fresh eyes.",
      language: EN
    }, {
      text: "The show taps into something that has been recurring theme in my life.",
      language: EN
    }, {
      text: "I was quit excited, actually, genuinely.",
      language: EN
    }, {
      text: "I have maybe oppened a bonnet couple of times.",
      language: EN
    }, {
      text: "Guests reaction vary from genuine enthisiasm, to absolute loathing: 'I couldn't bear it'",
      language: EN
    }, {
      text: "He tried changing baby's nappy and awarded the experience a maximum ten out of ten.",
      language: EN
    }, {
      text: "The pain of tottering around in high heels.",
      language: EN
    }, {
      text: "The programmer's appeal lies in his charm and humor.",
      language: EN
    }, {
      text: "You want to refactor line-of-business (LOB) application to make it more robust and scalable as well as to increase performance.",
      language: EN
    }, {
      text: "... having tap-dancing lessons, wearing extremely high heels.", //wysokie obcasy
      language: EN
    }, {
      text: "He encourage his guests to undertake chellenges such as constructing flat-pack furniture.",
      language: EN
    }, {
      text: "Not extraordinary things but mundane and fairly trivial activities.", // przyziemne, dosc-calkiem
      language: EN
    }, {
      text: "So where are you staying at the moment?",
      language: EN
    }, {
      text: "Who are you living with ?",
      language: EN
    }, {
      text: "What made you decide to come to the city in the first place?",
      language: EN
    }, {
      text: "Have you any idea how long you want to stay here?",
      language: EN
    }, {
      text: "Do you mind me asking if you’re in a relationship?",
      language: EN
    }, {
      text: "What are you like in the mornings?",
      language: EN
    }, {
      text: "Auxiliary verbs usually accompany a main verb.",
      language: EN
    }, {
      text: "Do you thing you will spend weekends here or offen go away? ???",
      language: EN
    }, {
      text: "What ware last flatmates like ???",
      language: EN
    }, {
      text: "sensible, really down to earth,",
      language: EN
    }, {
      text: "and we just clicked.",
      language: EN
    }, {
      text: "I felt very awkward about it.",
      language: EN
    }, {
      text: "I was very anxious.",
      language: EN
    }, {
      text: "I was really thrilled.",
      language: EN
    },

  ];

  function speak(phrase, callBack) {
    $scope.recogizedPhrase = 'listen ...';
    var u = new SpeechSynthesisUtterance();
    var voices = window.speechSynthesis.getVoices();
    u.voice = voices.filter(function(voice) {
      return voice.name == 'Google UK English Male';
    })[0];
    u.text = phrase.text;
    u.lang = phrase.language;
    u.rate = 1.0;
    u.onend = callBack;
    speechSynthesis.speak(u);
  }

  function listen(phrase) {
    if ($scope.recognizing) {
      recognition.stop();
      $scope.recognizing = false;
    } else {
      $scope.recogizedPhrase = 'say it ...';
      recognition.lang = phrase.language;
      recognition.start();
    }
  }

  $scope.selectedPhrases = {};
  $scope.tooglePhrase = function(phrase) {
    $scope.selectedPhrases = {};
    $scope.selectedPhrases[phrase.text] = true;
    $scope.selectedPhrase = phrase;
    speak(phrase, function() {
      listen(phrase);
    });
  };

  $scope.isPhraseSelected = function(phrase) {
    return $scope.selectedPhrases[phrase.text];
  };

  $scope.recognizing = false;
  $scope.recogizedPhrase = 'click phrase, listen, and repeat ...';

  $scope.isRecognizing = function() {
    return $scope.recognizing;
  };

  var recognition = null,
    listenInit = function() {
      if ('webkitSpeechRecognition' in window) {

        recognition = new webkitSpeechRecognition();
        recognition.continuous = false;
        recognition.interimResults = true;
        recognition.lang = 'en-US';

        recognition.onstart = function() {
          $scope.recognizing = true;
          $scope.$apply();
        };
        recognition.onerror = function(event) {
          $scope.recogizedPhrase = "There was a recognition error...";
          $scope.$apply();
        };
        recognition.onend = function() {
          $scope.recognizing = false;
          $scope.$apply();
        };
        recognition.onresult = function(event) {
          var interimTranscript = '';
          // Assemble the transcript from the array of results
          for (var i = event.resultIndex; i < event.results.length; ++i) {
            var confid = event.results[i][0].confidence,
              confidFix = parseFloat(Math.round(confid * 100) / 100).toFixed(2);

            if (event.results[i].isFinal) {
              $scope.recogizedPhrase = event.results[i][0].transcript + ' (' + confidFix + ')';
              recognition.stop();
              $scope.recognizing = false;
              console.log($scope.recogizedPhrase);
              $scope.$apply();
            } else {
              $scope.recogizedPhrase = event.results[i][0].transcript + ' (' + confidFix + ')';
              console.log($scope.recogizedPhrase);
              $scope.$apply();
            }
          }
        };
      }
    }

  function Init() {
    $scope.toogleLanguage($scope.languages[1]);
    listenInit();
  }

  Init();
}
