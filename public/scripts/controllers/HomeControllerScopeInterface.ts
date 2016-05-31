module Speaker {
  export interface HomeControllerScopeInterface extends ng.IScope {
    sentences: Sentence[];
    selectedSentence: Sentence;
    parsedSentence: ParsedSentence;
    searchingPhrase: String;
    speechStateSpeaking: Boolean;
    speechStatePaused: Boolean;
    recognitionSateStarted: Boolean;
    recognitionSateEnded: Boolean;
    sentencesDiff: String[];
    language: Language;
    addSentence(event: any, text: string);
    removeSentence(event, sentence: Sentence);
    selectSentence(event, sentence: Sentence);
    inputKeyPressed(event, text: string);
    playStopSentence(event, sentence: Sentence);
    startStopSpeechRecongnition(event, sentence: Sentence);
  }
}
