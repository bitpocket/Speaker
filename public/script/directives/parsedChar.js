(function() {
  "use strict";

  angular
    .module("speakerApp")
    .directive("parsedChar", parsedChar);

  function parsedChar() {
    return {
      restrict: 'E',
      template: '<div></div>',
      link: function(scope, element, attrs, ) {

      }
    };
  }
})();
