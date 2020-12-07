// import { lang } from '../js/main.js';
import state from '../data/translate_data.js';

const getCurrentDate = (getTimezone, nextDaysQuantity) => {
    let weekdaysArray = [];
    let lang = "en";
    
    let time = setInterval(async function setInterval() {
      let date = new Date();
      let optionsToday = {
        timezone: 'UTC',
        month: 'long',
        day: 'numeric',
        weekday: 'long',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
        timeZoneName: 'short'
      };
      let hour = date.getUTCHours(optionsToday.timezone);
      let minutes = date.getUTCMinutes(optionsToday.timezone);
      let sec = date.getUTCSeconds(optionsToday.timezone);
      let today = date.toLocaleString(lang, optionsToday);
      // if (lang == "BE") {
      //   await translateTodayBe(today);
      //  } else {
          let todayData = date.toLocaleString(lang, optionsToday);
          todayData = todayData.split(',');
          // document.querySelector(".today-data").innerHTML = date.toLocaleString(lang, optionsToday);
      //  }
      }, 1000);

      let nextDate2 = new Date();
      let optionsNextDay = {
        weekday: 'long'
      }
      //  if (lang == "BE") {
      //   beWeekDay(nextDate2, nextDate3, nextDate4, optionsNextDay);
      //  }

       for (let i = 0; i <= nextDaysQuantity; i++) {
        let weekday = new Date();
        weekday.setDate(weekday.getDate() + i);
        weekday = weekday.toLocaleString(lang, optionsNextDay);
        weekday = weekday.toLowerCase();
        weekday = `<span data-en= '${weekday}' data-ru= '${state.weekRU[weekday]}' data-be= '${state.weekBE[weekday]}'>  </span>`
        weekdaysArray.push(weekday);
      }
       return weekdaysArray;

  }

export { getCurrentDate };
