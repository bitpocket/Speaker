(function() {
  'use strict';

  angular
    .module("speakerApp")
    .controller('homeController', homeController);

  homeController.$inject = ["$scope", "sentencesService", "speechService", "sentencesDiff", "utils"];

  function homeController($scope, sentencesService, speechService, sentencesDiff, utils) {
    $scope.sentences = [];
    $scope.selectedSentence = null;
    $scope.parsedSentence = null;
    $scope.searchingPhrase = null;
    $scope.speechStateSpeaking = false;
    $scope.speechStatePaused = false;
    $scope.recognitionSateStarted = false;
    $scope.recognitionSateEnded = false;
    $scope.sentencesDiff;
    //$scope.parseResult;

    $scope.$on("sentencesListChanged", function(event) {
      $scope.sentences = sentencesService.sentences;
    });

    $scope.$on("speechSyntheseStateChanged", function(event, speaking, paused) {
      $scope.speechStateSpeaking = speaking;
      $scope.speechStatePaused = paused;
      $scope.$apply();
    });

    $scope.$on("recognizedPhraseChanged", function(event, recognizedPhrase) {
      processParsedPhrase(recognizedPhrase);
      $scope.$apply();
    });

    $scope.$on("speechRecognitionStateChanged", function(event, started, ended) {
      $scope.recognitionSateStarted = started;
      $scope.recognitionSateEnded = ended;
      $scope.$apply();
    });

    function processParsedPhrase(recognizedPhrase) {
      $scope.parsedSentence = recognizedPhrase;

      if ($scope.selectedSentence && $scope.selectedSentence.text && $scope.parsedSentence.text) {
        $scope.sentencesDiff = sentencesDiff.diffChars($scope.selectedSentence.text, $scope.parsedSentence.text);
      }

      var confidence = recognizedPhrase.confidence,
        editDistance = sentencesDiff.getEditDistance($scope.selectedSentence.text, $scope.parsedSentence.text),
        editDistanceNormalized = (1 - editDistance / $scope.selectedSentence.text.length),
        totalResult = utils.round(editDistanceNormalized, 2);

      $scope.parsedSentence["editDistance"] = editDistanceNormalized;
      $scope.parsedSentence["totalResult"] = totalResult;
    }

    $scope.addSentence = function(event, sentence) {
      sentencesService.addSentence(sentence);
      $scope.searchingPhrase = null;
      event.preventDefault();
    };

    $scope.removeSentence = function(event, sentence) {
      sentencesService.removeSentence(sentence);
      event.preventDefault();
    };

    $scope.selectSentence = function(event, sentence) {
      $scope.selectedSentence = sentence;
      $scope.parsedSentence = null;
      $scope.sentencesDiff = null;
      event.preventDefault();
    };

    $scope.inputKeyPressed = function(event, sentence) {
      if (event.keyCode == 13) {
        $scope.addSentence(event, sentence);
        return false; // returning false will prevent the event from bubbling up.
      } else {
        return true;
      }
    };

    $scope.playSentence = function(event, sentence) {
      if (!$scope.speechStateSpeaking) {
        speechService.startSpeaking($scope.selectedSentence);
      } else {
        speechService.cancelSpeaking();
      }

      event.preventDefault();
    };

    $scope.startSpeechRecognition = function(event, sentence) {
      if (!$scope.recognitionSateStarted) {
        speechService.startRecongnition($scope.selectedSentence);
      } else {
        speechService.stopRecongnition();
      }
      event.preventDefault();
    };

    function init() {
      sentencesService.load();
      $scope.selectedSentence = $scope.sentences[0];

      // processParsedPhrase({
      //   text: "He encourage his guests to undertake challenges",
      //   confidence: 1.0
      // });
    }

    init();
  }

})();
