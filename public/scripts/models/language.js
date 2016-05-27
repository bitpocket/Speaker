var Speaker;
(function (Speaker) {
    var Language = (function () {
        function Language(label, id) {
            this.label = label;
            this.id = id;
        }
        return Language;
    }());
    Speaker.Language = Language;
})(Speaker || (Speaker = {}));
//# sourceMappingURL=language.js.map