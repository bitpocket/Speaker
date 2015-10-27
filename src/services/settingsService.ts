import {Language, EN} from '../models/languages';

export class SettingsService {
  public getDefaultLanguageId (): String {
    return EN;
  }
}
