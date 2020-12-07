import state from '../data/translate_data.js';
import { search_input, search_btn } from './main.js';
import { getGeocode } from '../api/getGeocode.js';
import { translate } from '../api/getTranslate.js';

const BE = document.querySelector('.lang-be');
const RU = document.querySelector('.lang-ru');
const EN = document.querySelector('.lang-en');

RU.onclick = (event) => {
  event.preventDefault();
  removeClassActiveLang ();
  RU.classList.add('active-lang');
  let lang = 'data-ru';
  langChange(lang);
}

BE.onclick = function beOnclick (event){
    event.preventDefault();
    removeClassActiveLang ();
    BE.classList.add('active-lang');
    let lang = 'data-be';
    langChange(lang);
}


EN.onclick = (event) => {
    event.preventDefault();
    removeClassActiveLang ();
    EN.classList.add('active-lang');
    let lang = 'data-en';
    langChange(lang);
}

  
function langMode(){
  if ( localStorage.getItem("lang") == "EN") {
    removeClassActiveLang();
    EN.classList.add('active-lang');
    let lang = 'data-en'
    change(lang);
  } else if ( localStorage.getItem("lang") == "RU") {
    removeClassActiveLang();
    RU.classList.add('active-lang');
    let lang = 'data-ru'
    change(lang);
  } else if (localStorage.getItem("lang") == "BE") {
    removeClassActiveLang();
    BE.classList.add('active-lang');
    let lang = 'data-be'
    change(lang);
  }
}

async function langChange(lang) {
  state.lang = document.querySelector('.active-lang > a').textContent;
  search_input.placeholder = state.searchPlaceholder[state.lang];
  search_btn.textContent = state.searchBtn[state.lang];
  await getGeocode();
  localStorage.setItem('lang', state.lang);
  change(lang);
}

let change = (lang) => {
  let attribute = document.querySelectorAll(`[${lang}]`);
  attribute.forEach( text => {
    text.innerHTML = text.getAttribute(`${lang}`);
  })
}

function removeClassActiveLang() {
    document.querySelectorAll('.lang > div').forEach ((el) => {
        el.classList.remove('active-lang');
    })
}

export {change, langMode };
