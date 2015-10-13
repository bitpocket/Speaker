(function () {
	'use strict';

    angular
    .module('app', [])
    .controller('mainController', function ($scope) {
        $scope.phraseToAdd = '';
        $scope.phrases;
        $scope.storegeKey = 'Separation of concerns phrases';    
        $scope.selectedPhrase;
        
        function loadPhrases(){
            var phrases = window.localStorage.getItem($scope.storegeKey) || '[]';
            return JSON.parse(phrases);
        }
        
        function savePhrases(phrases){
            window.localStorage.setItem($scope.storegeKey, JSON.stringify(phrases));
        }    
        
        function init(){
            $scope.phrases = loadPhrases();
        }

        $scope.addPhrase = function(phraseToAdd){
            if($scope.phraseToAdd) {
                var phrase = {
                    text: $scope.phraseToAdd  
                };
            
                $scope.phrases.push(phrase);
                savePhrases($scope.phrases);
                
                $scope.phraseToAdd = '';
            }
        };        

        $scope.addPhraseByPressEnter = function($event, phraseToAdd){
            if($event.which === 13) {
                $scope.addPhrase(phraseToAdd);
            }
        };
        
        $scope.removePhrase = function(phrase) {
            var index = $scope.phrases.indexOf(phrase);
            if (index > -1) {
                $scope.phrases.splice(index, 1);
                $scope.selectedPhrase = null;
            }            
        }
        
        $scope.selectPhrase = function(phrase) {
            $scope.selectedPhrase = phrase;
        }
        
        init();
    });
    
})();