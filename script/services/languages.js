(function () {
		"use strict";

		angular
			.module("speakerApp")
			.factory("languages", languages);

		function languages() {
			return {
			CS: "cs-CS",
			EN: "en-GB",
			ES: "es-ES",
			DE: "de-DE",
			IT: "it-IT",
			PL: "pl-PL",
			PT: "pt-PT",
			SK: "sk-SK"
		};

			// this.languages = [{
			// 	label: "CS",
			// 	code: this.CS
			// }, {
			// 	label: "EN",
			// 	code: this.EN
			// }, {
			// 	label: "ES",
			// 	code: this.ES
			// }, {
			// 	label: "DE",
			// 	code: this.DE
			// }, {
			// 	label: "IT",
			// 	code: this.IT
			// }, {
			// 	label: "PL",
			// 	code: this.PL
			// }, {
			// 	label: "PT",
			// 	code: this.PT
			// }, {
			// 	label: "SK",
			// 	code: this.SK
			// }];
		}
	})();
