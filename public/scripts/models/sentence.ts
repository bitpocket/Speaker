module Speaker {

  export class Sentence {
    public uuid: string;
    public text: string;
    public language: string;

    constructor(language: string, text: string) {
      this.text = text;
      this.language = language;
      this.uuid = Utils.getUuid();
    }
  }
  
}
