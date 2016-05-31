var Speaker;
(function (Speaker) {
    var Language = (function () {
        // methods
        function Language(label, id) {
            this.label = label;
            this.id = id;
        }
        return Language;
    }());
    Speaker.Language = Language;
})(Speaker || (Speaker = {}));
//# sourceMappingURL=language.js.map