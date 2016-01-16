import {Phrase} from '../models/phrase';
import {Language, EN, DE, PL} from '../models/languages';

export class Store {
  private allPhrases: Phrase[];

  public loadPhrases(): Phrase[] {
    return this.defaultPhrases;
  }

  public savePhrases(phrases: Phrase[]) {
    // TODO:
  }

  public getAllPhrases(): Phrase[] {
    if (!this.allPhrases) {
      this.allPhrases = this.loadPhrases();
    }
    return this.allPhrases;
  }

  public getAllPhrasesByLanguage(languageId: String): Phrase[] {
    var allPhrases: Phrase[] = this.getAllPhrases();
    return allPhrases;
  }

  private defaultPhrases: Phrase[] = [
    {
      text: "I'd just like a word with you, if I might.",
      languageId: EN,
      uuid: "1"
    },
    {
      text: "God always had the final word.",
      languageId: EN,
      uuid: "2"
    },
    {
      text: "Dass ein eigenes Zuhause durch nichts zu ersetzen ist.",
      languageId: DE,
      uuid: "3"
    },
    {
      text: "wiadereczko z wodą",
      languageId: PL,
      uuid: "4"
    }
  ];

  public value: string = '';

  public getValue() {
    return this.value;
  }

  public setValue(newValue) {
    this.value = newValue;
  }
}
