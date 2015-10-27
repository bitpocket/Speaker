angular.module('app', [])
  .controller('speakerContrller', speakerContrller);

function speakerContrller($scope) {
  var CS = 'cs-CS',
    EN = 'en-US',
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
      text: "So where are you staying at the moment?",
      language: EN
    }, {
      text: "Wwho are you living with ?",
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
    },

  ];




  // $scope.allPhrases = [
  //     {   text: "I'd just like a word with you, if I might.",
  //         language: EN },
  //     {   text: "God always had the final word.",
  //         language: EN },
  //     {   text: "Dass ein eigenes Zuhause durch nichts zu ersetzen ist.",
  //         language: DE },
  //     {   text: "wiadereczko z wodą",
  //         language: PL }
  // ];

  function speak(phrase, callBack) {
    var u = new SpeechSynthesisUtterance();
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
      recognition.lang = phrase.language;
      recognition.start();
    }
  }

  $scope.selectedPhrases = {};
  $scope.tooglePhrase = function(phrase) {
    $scope.selectedPhrases = {};
    $scope.selectedPhrases[phrase.text] = true;
    $scope.selectedPhrase = phrase;
    speak(phrase, function() {listen(phrase);});
  };

  $scope.isPhraseSelected = function(phrase) {
    return $scope.selectedPhrases[phrase.text];
  };

  $scope.recognizing = false;
  $scope.recogizedPhrase = '';
  $scope.getRecogizedPhrase = function() {
    return $scope.recogizedPhrase || 'Say it ...';
  };

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
