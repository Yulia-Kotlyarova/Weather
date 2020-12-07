import { WEATHER_BIT_KEY } from './keys.js';

function getWeather(latitude, longitude){
    let lang = document.querySelector('.active-lang > a').textContent;
  
    let result = fetch(`https://api.weatherbit.io/v2.0/forecast/daily?&lat=${latitude}&lon=${longitude}&days=4&units=S&lang=${lang}&key=${WEATHER_BIT_KEY}`)
      .then ((weather) => weather.json())
      .catch(() => console.log('err in getWeather'));
      return result;
  }

export { getWeather };