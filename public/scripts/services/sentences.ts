module Speaker{

  export class SentencesService {
    static $inject = ["$rootScope"];
    $rootScope;

    constructor($rootScope) {
      this.$rootScope = $rootScope;
    }

    public sentences: Sentence[];

    localStorageKey = "speakerSentences";
    getSentencesFromLocalStorage(): Sentence[] {
      var stringSentences = window.localStorage.getItem(this.localStorageKey) || '[]';
      return JSON.parse(stringSentences);
    }

    setSentencesToLocalStorage(sentences) {
      var stringSentences = JSON.stringify(sentences);
      window.localStorage.setItem(this.localStorageKey, stringSentences);
    }

    getDefaultSentences(): Sentence[] {
      return [
        new Sentence(Languages.EN.id, "The show lets us see the very familiar through fresh eyes."),
        new Sentence(Languages.EN.id, "Guests reaction vary from genuine enthisiasm, to absolute loathing: 'I couldn't bear it'"),
        new Sentence(Languages.EN.id, "He encourage his guests to undertake chellenges such as constructing flat-pack furniture."),
        new Sentence(Languages.EN.id, "Do you mind me asking if you’re in a relationship?"),
        new Sentence(Languages.EN.id, "I felt very awkward about it."),
      ];
    }

    public removeSentence(sentence) {
      var index = this.sentences.indexOf(sentence);
      if (index > -1) {
        this.sentences.splice(index, 1);
      }

      this.$rootScope.$broadcast("sentencesListChanged");
      this.save(undefined, undefined);
    }

    public load(success, error) {
      this.sentences = this.getSentencesFromLocalStorage();
      if (!this.sentences || !this.sentences.length) {
        this.sentences = this.getDefaultSentences();
      }
      if (success) success(this.sentences);

      this.$rootScope.$broadcast("sentencesListChanged");
    }

    public save(success, error) {
      this.setSentencesToLocalStorage(this.sentences);
      if (success) success("OK");
    }

    public addSentence(language: Language, text: string): void {
      this.sentences.push(new Sentence(language.id, text));

      this.$rootScope.$broadcast("sentencesListChanged");
      this.save(undefined, undefined);
    }
  }

  angular
    .module("app")
    .service("sentencesService", SentencesService);
}
