import { lang } from '../js/main.js';
import { search_input } from '../js/main.js';
import { getCoordinates, getCity } from '../js/location.js';

const translate = () => {
  let textToTranslate = "friday";
  let initLang = "en";
  let newLang = "ru";
    let result = fetch(`https://cors-proxy.htmldriven.com/?url=http://translate.google.ru/translate_a/t?client=x&text=${textToTranslate}&hl=${initLang}&sl=${initLang}&tl=${newLang}`)
      .then ((res) => res)
      .catch(() => {
        console.log('что-то не так в translate');
      });
    console.log(result);
    return result;
}

export { translate };