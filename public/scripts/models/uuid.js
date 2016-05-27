System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Utils;
    return {
        setters:[],
        execute: function() {
            Utils = (function () {
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
                return Utils;
            }());
            exports_1("Utils", Utils);
        }
    }
});
//# sourceMappingURL=uuid.js.map