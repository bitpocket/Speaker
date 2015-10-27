  export class Language {
    constructor(label: string, id: string) {
        this.label = label;
        this.id = id;
    }

    public label: string;
    public id: string;

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
    { label: 'CS', id: CS },
    { label: 'EN', id: EN },
    { label: 'ES', id: ES },
    { label: 'DE', id: DE },
    { label: 'IT', id: IT },
    { label: 'PL', id: PL },
    { label: 'PT', id: PT },
    { label: 'SK', id: SK }];
