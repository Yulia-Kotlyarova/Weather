import { UNSPLASH } from './keys.js';

function Background(conditions) {
    let result = fetch (`https://api.unsplash.com/photos/random?orientation=landscape&per_page=1&query=${conditions}&client_id=${UNSPLASH}`)
      .then((image) => image.json())
      .then((image) => {
        let pic = new Image();
        pic.src = image.urls.regular;
        // pic.onload = function() {
        //   document.querySelector(".background-img").setAttribute('style', `background-image: url(${pic.src});`)
        // };
        return pic;
      })
      .catch(() => ("try again"));
      return result;
  }

export { Background };
