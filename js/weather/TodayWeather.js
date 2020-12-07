import { Weather } from './Weather.js';

class TodayWeather extends Weather {
    constructor (weekDay, degree,icon, feel, wind, humidity, description) {
      super(weekDay, degree,icon);
      this.feel = feel;
      this.wind = wind;
      this.humidity = humidity;
      this.description = description;
    }

    setTodayWeatherDescription() {
      return (
        `<p >${this.weekDay} <span class="today-data"> </span></p>
        <strong class = "today-degree">${this.degree}</strong>
        <img src = "${this.icon }" class = "today-icon">

        <ul class = "today-about-weather">
            <li class="weather-mood"> ${this.description}</li>
            <li class="feels-like"> ${this.feel}</li>
            <li class="wind">${this.wind}</li>
            <li class="humidity"> ${this.humidity} </li>
        </ul>`
      )
     }
  }

export { TodayWeather };
