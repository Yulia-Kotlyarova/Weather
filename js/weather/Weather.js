class Weather {
    constructor (weekDay, degree,icon) {
      this.weekDay = weekDay;
      this.degree = degree;
      this.icon = icon;
 }

 setWeatherDescription() {
  return (
    `<div class="few-days">
        <p class = "next-week-day next-week-day-2 "> ${this.weekDay} </p>
        <img class = "next-day-img next-day-img-2" src = "${this.icon}" alt = "weather pic">
        <p class = "next-day-degree next-day-degree-2"> ${this.degree} </p>
    </div>`
  )
 }
}

export {Weather};
