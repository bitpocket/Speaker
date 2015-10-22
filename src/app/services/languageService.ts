import {Language, LANGUAGES} from '../models/languages';

export class LanguageService {
  private selectedLanguageId: String;
  private selectedLanguages = {};
  public languages = LANGUAGES;

  toogleLanguage(languageId: String) {
    this.selectedLanguages = {};
    this.selectedLanguages[languageId.toString()] = true;
    this.selectedLanguageId = languageId;
  }

  isLanguageSelected(languageId: String) {
    return this.selectedLanguages[languageId.toString()];
  }

  getSelectedLanguage() {
    return this.selectedLanguageId;
  }
}
