/// <reference path="../../../typings/underscore/underscore.d.ts" />
var Speaker;
(function (Speaker) {
    var SentencesDiff = (function () {
        function SentencesDiff() {
        }
        SentencesDiff.getDiff = function (originalText, parsedText, confidence) {
            var res = new Speaker.ParsedSentence();
            res.originalText = originalText;
            res.parsedText = parsedText;
            res.confidence = Speaker.Utils.round(confidence, 2);
            if (res.originalText && res.parsedText) {
                res.sentencesDiff = SentencesDiff.diffChars(res.originalText, res.parsedText);
            }
            var editDistance = this.getEditDistance(res.originalText, res.parsedText);
            res.editDistance = (1 - editDistance / res.originalText.length);
            res.totalResultRounded = Speaker.Utils.round(res.editDistance, 2);
            return res;
        };
        SentencesDiff.getOnlyAddedDiffs = function (diff) {
            return _.filter(diff, function (d) {
                return !d.removed;
            });
        };
        SentencesDiff.splitToSingleCharacters = function (diff) {
            var res = _.chain(diff)
                .map(function (d) {
                var res = [];
                for (var letter in d.value) {
                    res.push({
                        value: d.value[letter] === " " ? "\u00A0" : d.value[letter],
                        added: d.addad,
                        removed: d.removed
                    });
                }
                return res;
            })
                .flatten()
                .value();
            return res;
        };
        SentencesDiff.diffChars = function (sentenceOne, sentenceTwo) {
            // diffChars diffWords diffWordsWithSpace
            var res = JsDiff.diffWords(sentenceOne.toLowerCase(), sentenceTwo.toLowerCase());
            res = this.getOnlyAddedDiffs(res);
            //res = splitToSingleCharacters(res);
            //res = revertLowerCase(sentenceOne, res);
            return res;
        };
        /*
        Copyright (c) 2011 Andrei Mackenzie
        Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
        The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
        THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
        */
        // Compute the edit distance between the two given strings
        SentencesDiff.getEditDistance = function (a, b) {
            if (!a || !b)
                return;
            if (a.length == 0)
                return b.length;
            if (b.length == 0)
                return a.length;
            var matrix = [];
            // increment along the first column of each row
            var i;
            for (i = 0; i <= b.length; i++) {
                matrix[i] = [i];
            }
            // increment each column in the first row
            var j;
            for (j = 0; j <= a.length; j++) {
                matrix[0][j] = j;
            }
            // Fill in the rest of the matrix
            for (i = 1; i <= b.length; i++) {
                for (j = 1; j <= a.length; j++) {
                    if (b.charAt(i - 1) == a.charAt(j - 1)) {
                        matrix[i][j] = matrix[i - 1][j - 1];
                    }
                    else {
                        matrix[i][j] = Math.min(matrix[i - 1][j - 1] + 1, // substitution
                        Math.min(matrix[i][j - 1] + 1, // insertion
                        matrix[i - 1][j] + 1)); // deletion
                    }
                }
            }
            return matrix[b.length][a.length];
        };
        return SentencesDiff;
    }());
    Speaker.SentencesDiff = SentencesDiff;
})(Speaker || (Speaker = {}));
//# sourceMappingURL=sentencesDiff.js.map