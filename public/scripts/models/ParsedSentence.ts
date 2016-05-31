module Speaker {
  export class ParsedSentence {
    // fields
    public originalText: string;
    public parsedText: string;
    public confidence:number;
    public sentencesDiff: Object[];
    public editDistance: number;
    public totalResultRounded: number;
  }
}
