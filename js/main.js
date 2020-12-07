import { getGeocode } from '../api/getGeocode.js';
import { geoSuccess } from '../api/getLocationName.js';
import { getCoordinates, getCity } from './location.js';
import { setCoordinates } from './setCoordinates.js'
import { Background } from '../api/getBackground.js';
import { weatherDescription } from '../js/weather/weather_description.js';
import { map } from '../api/map.js';
import { getWeather } from '../api/getWeather.js';
import { change, langMode } from '../js/translation.js';

const BE = document.querySelector('.lang-be');
const RU = document.querySelector('.lang-ru');
const EN = document.querySelector('.lang-en');

const search_btn = document.querySelector('.search-btn');
const search_input = document.querySelector('.search-input');

// lang storage

if ( localStorage.getItem("lang") == "EN") {
  removeClassActiveLang();
  EN.classList.add('active-lang');

} else if ( localStorage.getItem("lang") == "RU") {
  removeClassActiveLang();
  RU.classList.add('active-lang');

} else if (localStorage.getItem("lang") == "BE") {
  removeClassActiveLang();
  BE.classList.add('active-lang');

}
function removeClassActiveLang() {
  document.querySelectorAll('.lang > div').forEach ((el) => {
      el.classList.remove('active-lang');
  })
}

// initial page layout
let lang = document.querySelector('.active-lang > a').textContent;
window.onload = async function () {
    function getPosition() {
      return new Promise((res, rej) => {
          navigator.geolocation.getCurrentPosition(res, rej);
      });
    }
    let position = await getPosition(); 
    let locationName = await geoSuccess(position);

    getCity(locationName);
    let coordinates = await getCoordinates(locationName);
    setCoordinates(coordinates.latitudeMinutes, coordinates.latitudeSec, coordinates.longitudeMinutes, coordinates.longitudeSec);
    map(coordinates.latitude, coordinates.longitude);
    let weather = await getWeather(coordinates.latitude, coordinates.longitude);
    await weatherDescription(weather);
    let city = document.querySelector('.city').innerHTML;
    let pic = await Background(city); 
    document.querySelector(".background-img").setAttribute('style', `background-image: url(${pic.src});`)
    langMode();
  };

async function search(event) {
  event.preventDefault();
  let locationName = await getGeocode();

  getCity(locationName);
  let coordinates = await getCoordinates(locationName);
  map(coordinates.latitude, coordinates.longitude);
  getWeather(coordinates.latitude, coordinates.longitude);

  let city = document.querySelector('.city').innerHTML;
  let pic = await Background(city); 
  document.querySelector(".background-img").setAttribute('style', `background-image: url(${pic.src});`)
} 

search_btn.onclick = (event) => { search (event)}

export { search_input, search_btn, lang };
