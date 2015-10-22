  export class Language {
    constructor(label: string, code: string) {
        this.label = label;
        this.code = code;
    }

    public label: string;
    public code: string;

  }

  export var
    CS = 'cs-CS',
    EN = 'en-US',
    ES = 'es-ES',
    DE = 'de-DE',
    IT = 'it-IT',
    PL = 'pl-PL',
    PT = 'pt-PT',
    SK = 'sk-SK';

  export var LANGUAGES: Language[] = [
    { label: 'CS', code: CS },
    { label: 'EN', code: EN },
    { label: 'ES', code: ES },
    { label: 'DE', code: DE },
    { label: 'IT', code: IT },
    { label: 'PL', code: PL },
    { label: 'PT', code: PT },
    { label: 'SK', code: SK }];
