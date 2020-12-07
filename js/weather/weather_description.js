import state from '../../data/translate_data.js';
import { lang } from '../main.js';
import { getCurrentDate } from '../getDate.js';
import icons from '../../data/icon.js';
import { localStorageDegree, kelvinToC, switchDegreeF } from './degree.js';
import { Weather } from './Weather.js';
import { TodayWeather } from './TodayWeather.js';

async function weatherDescription(weather) {

    let weatherMood = weather.data[0].weather.description; // weather mood
  
    let temperatureFeels = weather.data[0].app_max_temp;// feels like
    temperatureFeels = temperatureFeels - 273.15;
    temperatureFeels = Math.round(temperatureFeels);
  
    let wind = weather.data[0].wind_spd;  // wind
    wind = Math.round(wind);
  
    let humidity = weather.data[0].rh; // humidity
    let getTimezone = weather.timezone;
    
    const nextDaysQuantity = 3;

    let weekdaysArray = getCurrentDate(getTimezone, nextDaysQuantity);

    localStorageDegree();
     
    const dataNextDays = [];

    for (let i = 1; i <= nextDaysQuantity; i++) {
      const icon = await icons[weather.data[i].weather.code];
      const degreeC = kelvinToC(weather, i);
      const degreeF = switchDegreeF(degreeC);
      const degree = `<span data-c= '${degreeC}' data-f= '${degreeF}'> ${localStorage.getItem('c') ? degreeC : degreeF} </span> <sup>&deg</sup>`; 
      // const degree =  kelvinToC(weather, i);
      // const weekday = (lang === "BE") ? state.week[weekdaysArray[i]] : weekdaysArray[i] ;
      const weekday = weekdaysArray[i];
      dataNextDays.push(new Weather(weekday, degree, icon));
    }

    document.querySelector('.wrapper-few-day').innerHTML = '';

    dataNextDays.forEach(day => {
      document.querySelector('.wrapper-few-day').innerHTML += day.setWeatherDescription();
    })

    const todayIcon = await icons[weather.data[0].weather.code];
    const todayC = kelvinToC(weather, 0);
    const todayF = switchDegreeF(todayC);
    const todayDegree = `<strong data-c= '${todayC}' data-f= '${todayF}'> ${localStorage.getItem('c') ? todayC : todayF} </strong> <sup>&deg</sup>`; 
    const todayWeekday = weekdaysArray[0];
    const todayFeelsLike = `<em data-en= 'Feels like:' data-be= 'Адчуваецца як:' data-ru= 'ощущается как:'> 
    </em> <a> ${temperatureFeels}&deg</a>`;

    const todayWind = `<em data-en= 'wind:' data-be= 'вецер:' data-ru= 'ветер:'> 
    </em> <a> ${wind} </a> <em data-en= 'm/s' data-be= 'м/с' data-ru= 'м/с'>  </em>`;
    
    const todayHumidity = `<em data-en= 'humidity:' data-be= 'вільготнасць:' data-ru= 'влажность:'> 
    </em> <a> ${humidity}%</a>`;
    
    const today = new TodayWeather( 
      todayWeekday, 
      todayDegree,
      todayIcon, 
      todayFeelsLike,
      todayWind,
      todayHumidity,
      weatherMood,
      );
    document.querySelector('.today-box').innerHTML = today.setTodayWeatherDescription();
  }

export { weatherDescription };
