import { OPEN_CAGE_KEY } from './keys.js';
import { getCity, getCoordinates } from '../js/location.js'

let geoSuccess =  function(position) {
    let startPos = position.coords;
    let lang = document.querySelector('.active-lang > a').textContent;

    let result = fetch(`https://api.opencagedata.com/geocode/v1/json?q=${startPos.latitude},${startPos.longitude}&language=${lang}&key=${OPEN_CAGE_KEY}&pretty=1&no_annotations=1`)
    .then ((res) => res.json())
    .catch(() => console.log('err in geoSuccess'));

    return result;
  };

export { geoSuccess };
