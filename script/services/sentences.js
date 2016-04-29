(function () {
	"use strict";

	angular
		.module("speakerApp")
		.service("sentencesService", sentencesService);

	sentencesService.$inject = ["$rootScope", "utils", "languages"];

	function sentencesService($rootScope, utils, languages) {
		this.sentences = [];

		var sentencesKey = "speakerSentences";

		function getSentencesFromLocalStorage() {
			var stringSentences = window.localStorage.getItem(sentencesKey) || '[]';
			return JSON.parse(stringSentences);
		}

		function getDefaultSentences() {
			return  [{
					guid: utils.getGUID(),
		      text: "The show lets us see the very familiar through fresh eyes.",
		      language: languages.EN
		    }, {
					guid: utils.getGUID(),
		      text: "Guests reaction vary from genuine enthisiasm, to absolute loathing: 'I couldn't bear it'",
		      language: languages.EN
		    }, {
					guid: utils.getGUID(),
		      text: "He encourage his guests to undertake chellenges such as constructing flat-pack furniture.",
		      language: languages.EN
		    }, {
					guid: utils.getGUID(),
		      text: "Do you mind me asking if you’re in a relationship?",
		      language: languages.EN
		    }, {
					guid: utils.getGUID(),
		      text: "I felt very awkward about it.",
		      language: languages.EN
		    }];
		}

		function setSentencesToLocalStorage(sentences) {
			var stringSentences = JSON.stringify(sentences);
			window.localStorage.setItem(sentencesKey, stringSentences);
		}

		this.removeSentence = function (sentence) {
			var index = this.sentences.indexOf(sentence);
			if (index > -1) {
			    this.sentences.splice(index, 1);
			}

			$rootScope.$broadcast("sentencesListChanged");
			this.save();
		};

		this.load = function (success, error) {
			this.sentences = getSentencesFromLocalStorage();
			if (!this.sentences || !this.sentences.length) {
				this.sentences = getDefaultSentences();
			}
			if (success) success(this.sentences);

			$rootScope.$broadcast("sentencesListChanged");
		};

		this.save = function (success, error) {
			setSentencesToLocalStorage(this.sentences);
			if (success) success("OK");
		};

		this.addSentence = function(sentence){
			this.sentences.push({
				guid: utils.getGUID(),
				text: sentence,
				language: ""//languagesService.EN
			});

			$rootScope.$broadcast("sentencesListChanged");
			this.save();
		};
	}
})();
