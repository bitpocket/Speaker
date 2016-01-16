import {Pipe} from 'angular2/core';

@Pipe({
    name: 'SelectLanguage'
})

export class SelectLanguage{

    transform(value, [field, languageId]){
        return value.filter((item) => {
            return item[field] == languageId;
        })
    }
}
