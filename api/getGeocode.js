import { OPEN_CAGE_KEY } from './keys.js';
import { lang } from '../js/main.js';
import { search_input } from '../js/main.js';
import { getCoordinates, getCity } from '../js/location.js';

const getGeocode = () => {
    let searchValue = search_input.value.toString();
  
    let geocodeResult = fetch(`https://api.opencagedata.com/geocode/v1/json?q=${searchValue}&language=${lang}&key=${OPEN_CAGE_KEY}&pretty=1&no_annotations=1`)
      .then ((res) => res.json())
      .catch(() => {
        search_input.value = `try again`;
        search_input.style.color = 'white';
      });
      return geocodeResult;
}

export { getGeocode };
