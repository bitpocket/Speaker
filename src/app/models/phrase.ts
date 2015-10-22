import {UUID} from '../utils/uuid';

export class Phrase {
  constructor(text: String, languageId: String) {
      this.text = text;
      this.languageId = languageId;
      this.uuid = UUID();
  }

  public uuid: String;
  public text: String;
  public languageId: String;
}
