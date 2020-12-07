import { search_input, search_btn, lang } from './main.js';
import { getWeather } from '../api/getWeather.js';
import state from '../data/translate_data.js';
// import map from '../api/map.js';
import { Background } from '../api/getBackground.js';

async function getCoordinates(res) {
    const coordinates = res.results[0].geometry;
    const latitudeDate = coordinates.lat.toFixed(2).toString().split('.');
    const latitude = coordinates.lat;
    const latitudeMinutes = latitudeDate[0];
    const latitudeSec = latitudeDate[1];
    // document.querySelector('.latitude').innerHTML = `${state.lat[lang]}: ${latitudeMinutes}&deg ${latitudeSec}'`;
  
    const longitudeDate = coordinates.lng.toFixed(2).toString().split('.');
    const longitude = coordinates.lng;
    const longitudeMinutes = longitudeDate[0];
    const longitudeSec = longitudeDate[1];
  
    // document.querySelector('.longitude').innerHTML = `${state.long[lang]}: ${longitudeMinutes}&deg ${longitudeSec}'`;
    let resultCoordinates = {
      latitude, longitude, latitudeMinutes, latitudeSec, longitudeMinutes, longitudeSec
    }
    return resultCoordinates;
    // map(latitude, longitude);
    // getWeather(latitude, longitude);
}

function getCity(res) {
    let place;
    const placeScope = res.results[0].components;
    
    if (placeScope.city !== undefined) {
      place = placeScope.city
    } else if (placeScope.town !== undefined) {
      place = placeScope.town
    } else if (placeScope.village !== undefined) {
      place = placeScope.village
    }
     else if (placeScope.state !== undefined) {
      place = placeScope.state
    } else {
      place = placeScope.city;
      console.log(place);
    };
    let city = `${place}, ${placeScope.country}`
    document.querySelector('.city').innerHTML = `${city}`;
    search_input.value = `${city}`;
    Background(city); 
}

export { getCoordinates, getCity };
