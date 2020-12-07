import { MAP_KEY } from './keys.js';

function map(latitude, longitude) {
    mapboxgl.accessToken = MAP_KEY;
    var map = new mapboxgl.Map({
      container: 'viewDiv', 
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [longitude, latitude],
      zoom: 9 
    });
    var marker = new mapboxgl.Marker()
      .setLngLat([longitude, latitude])
      .addTo(map);
  }

export {map};
