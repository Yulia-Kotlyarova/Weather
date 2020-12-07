function setCoordinates(latitudeMinutes, latitudeSec, longitudeMinutes, longitudeSec) {
    document.querySelector('.latitude').innerHTML = 
    `<span data-en= 'latitude:' data-be= 'шырата:' data-ru= 'широта:'> 
    </span> <a> ${latitudeMinutes}&deg ${latitudeSec}' </a>`;
    
    document.querySelector('.longitude').innerHTML = 
    `<span data-en= 'longitude:' data-be= 'даўгата:' data-ru= 'долгота:'> 
    </span> <a> ${longitudeMinutes}&deg ${longitudeSec}' </a>`;
}

export { setCoordinates };
