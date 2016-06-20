var Speaker;
(function (Speaker) {
    var SentenceFinderService = (function () {
        // methods
        function SentenceFinderService($rootScope) {
            this.$rootScope = $rootScope;
        }
        SentenceFinderService.prototype.findSentence = function (word, token) {
            //https://www.wordsapi.com/
            $.ajax({
                type: "POST",
                url: 'https://wordsapiv1.p.mashape.com/words/' + word + '?accessToken=' + token,
                contentType: "application/json; charset=utf-8",
                dataType: "json",
                success: function (data) {
                    var requestId = data.d;
                    $('#blog_subscription_modal #btnSubmitBlogUpdates')
                        .attr("data-request-id", requestId)
                        .attr("data-blog", blog)
                        .attr("data-course", course)
                        .trigger("subscriptionAdded");
                    if (isValid) {
                        localStorage.setItem('blogPopStateNew', 'shown');
                    }
                },
                error: function (data) {
                }
            });
        };
        // fields
        SentenceFinderService.$inject = ["$rootScope"];
        return SentenceFinderService;
    }());
    angular
        .module("app")
        .service("SentenceFinderService", SentenceFinderService);
})(Speaker || (Speaker = {}));
//# sourceMappingURL=sentenceFinder.js.map