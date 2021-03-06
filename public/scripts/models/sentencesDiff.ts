/// <reference path="../../../typings/underscore/underscore.d.ts" />

module Speaker {

  declare var JsDiff: any;

  export class SentencesDiff {
    // methods
    public static getDiff(originalText: string, parsedText: string, confidence: number): ParsedSentence {
      let res: ParsedSentence = new ParsedSentence();

      res.originalText = originalText;
      res.parsedText = parsedText;
      res.confidence = Utils.round(confidence, 2);

      if (res.originalText && res.parsedText) {
        res.sentencesDiff = SentencesDiff.diffChars(res.originalText, res.parsedText);
      }

      let editDistance: number = this.getEditDistance(res.originalText, res.parsedText);
      res.editDistance = (1 - editDistance / res.originalText.length);
      res.totalResultRounded = Utils.round(res.editDistance, 2);

      return res;
    }

    static getOnlyAddedDiffs(diff: any[]): any[] {
      return _.filter(diff, (d: any) => {
        return !d.removed;
      });
    }

    static splitToSingleCharacters(diff) {
      let res = _.chain(diff)
        .map((d) => {
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
    }

    public static diffChars(sentenceOne: string, sentenceTwo: string): any[] {
      // diffChars diffWords diffWordsWithSpace
      var res = JsDiff.diffWords(sentenceOne.toLowerCase(), sentenceTwo.toLowerCase());

      res = this.getOnlyAddedDiffs(res);
      //res = splitToSingleCharacters(res);
      //res = revertLowerCase(sentenceOne, res);

      return res;
    }

    /*
    Copyright (c) 2011 Andrei Mackenzie
    Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
    The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
    */
    // Compute the edit distance between the two given strings
    public static getEditDistance(a: string, b: string): number {
      if (!a || !b) return;
      if (a.length == 0) return b.length;
      if (b.length == 0) return a.length;

      let matrix: number[][] = [];

      // increment along the first column of each row
      let i: number;
      for (i = 0; i <= b.length; i++) {
        matrix[i] = [i];
      }

      // increment each column in the first row
      let j;
      for (j = 0; j <= a.length; j++) {
        matrix[0][j] = j;
      }

      // Fill in the rest of the matrix
      for (i = 1; i <= b.length; i++) {
        for (j = 1; j <= a.length; j++) {
          if (b.charAt(i - 1) == a.charAt(j - 1)) {
            matrix[i][j] = matrix[i - 1][j - 1];
          } else {
            matrix[i][j] = Math.min(matrix[i - 1][j - 1] + 1, // substitution
              Math.min(matrix[i][j - 1] + 1, // insertion
                matrix[i - 1][j] + 1)); // deletion
          }
        }
      }

      return matrix[b.length][a.length];
    }
  }
}
