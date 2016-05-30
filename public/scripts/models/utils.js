var Speaker;
(function (Speaker) {
    var Utils = (function () {
        function Utils() {
        }
        Utils.getUuid = function () {
            // Otherwise, just use Math.random
            // http://stackoverflow.com/questions/105034/how-to-create-a-guid-uuid-in-javascript/2117523#2117523
            return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
                var r = Math.random() * 16 | 0, v = c === 'x' ? r : (r & 0x3 | 0x8);
                return v.toString(16);
            });
        };
        Utils.round = function (value, decimalPlaces) {
            return Math.round(value * Math.pow(10, decimalPlaces)) / Math.pow(10, decimalPlaces);
        };
        return Utils;
    }());
    Speaker.Utils = Utils;
})(Speaker || (Speaker = {}));
//# sourceMappingURL=Utils.js.map