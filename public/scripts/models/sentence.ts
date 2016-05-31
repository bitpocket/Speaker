module Speaker {
  export class Sentence {
    // fields
    public uuid: string;
    public text: string;
    public language: string;

    // methods
    constructor(language: string, text: string) {
      this.text = text;
      this.language = language;
      this.uuid = Utils.getUuid();
    }
  }
}
