import { Background } from '../api/getBackground.js';

async function changeBackground() {
  let city = document.querySelector('.city').innerHTML;
  console.log(`background img: ${city}`);
  let background = await Background(city);
  document.querySelector(".background-img").setAttribute('style', `background-image: url(${background.src});`)
}

document.querySelector(".change-img").onclick = () => {changeBackground()}
