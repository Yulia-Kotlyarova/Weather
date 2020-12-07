let c_deg = document.getElementById('c-degree');
let f_deg = document.getElementById('f-degree');

function localStorageDegree() {
    if (localStorage.getItem('c') === true) {
        f_deg.classList.remove('active-deg');
        c_deg.classList.add('active-deg');

    } else if (localStorage.getItem('f') === true) {
        c_deg.classList.remove('active-deg');
        f_deg.classList.add('active-deg');
    }
}

c_deg.onclick =  function cDegree() {
    const atr = 'data-c';
    changeDegree(atr);
}

f_deg.onclick =  function fDegree() {
    const atr = 'data-f';
    changeDegree(atr);
};


let changeDegree = (atr) => {
    let attribute = document.querySelectorAll(`[${atr}]`);
    attribute.forEach( text => {
      text.innerHTML = text.getAttribute(`${atr}`);
    })
  }

// function switchDegreeC(degreeContainer) {
//     let num = parseInt(degreeContainer.textContent);
//     num = (num - 32) * 5 / 9;
//     num =  Math.round(num);
//     degreeContainer.innerHTML = `${num}&deg`;
// }

function switchDegreeF(degreeContainer) {
    let num = parseInt(degreeContainer);
    num = num * 9 / 5 + 32;
    num =  Math.round(num);
    return num;
}


function kelvinToC(weather, index){
    let temperature = weather.data[index].temp;//temperature kelvin to celsius
    temperature = temperature - 273.15;
    temperature = Math.round(temperature);
    return temperature;
  }

  export { localStorageDegree, kelvinToC, switchDegreeF };
