module Speaker {
  export class Language {
    // fields
    public label: string;
    public id: string;

    // methods
    constructor(label: string, id: string) {
      this.label = label;
      this.id = id;
    }
  }
}
