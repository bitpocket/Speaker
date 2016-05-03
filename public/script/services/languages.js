(function() {
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
  }
})();
