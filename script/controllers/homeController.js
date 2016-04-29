(function () {
	'use strict';

	angular
		.module("speakerApp")
		.controller('homeController', homeController);

	homeController.$inject = ["$scope", "sentencesService"];

	function homeController($scope, sentencesService) {
		$scope.sentences = [];
		$scope.selectedSentence = null;
		$scope.parsedSentence = null;
		$scope.searchingPhrase = null;

		$scope.$on("sentencesListChanged", function () {
			$scope.sentences = sentencesService.sentences;
		});

		$scope.addSentence = function (event, sentence) {
			sentencesService.addSentence(sentence);
			$scope.searchingPhrase = null;
			event.preventDefault();
		};

		$scope.removeSentence = function (event, sentence) {
			sentencesService.removeSentence(sentence);
			event.preventDefault();
		};

		$scope.selectSentence = function (event, sentence) {
			$scope.selectedSentence = sentence;
			event.preventDefault();
		};

		$scope.inputKeyPressed = function (event, sentence) {
			if (event.keyCode == 13) {
				$scope.addSentence(event, sentence);
				return false; // returning false will prevent the event from bubbling up.
			} else {
				return true;
			}
		};

		$scope.playSentence = function (event, sentence) {
			event.preventDefault();
		};

		$scope.startSpeechRecognition = function (event, sentence) {
			event.preventDefault();
		};

		function init() {
			sentencesService.load();
			$scope.selectedSentence = $scope.sentences[0];
		}

		init();
	}

})();
