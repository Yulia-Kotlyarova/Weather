import {search_input } from './main.js';
import { getGeocode } from '../api/getGeocode.js';

const mic_off = document.querySelector('.bi-mic-mute-fill');
const mic_on = document.querySelector('.bi-mic-fill');
let lang = document.querySelector('.active-lang > a').textContent;

window.SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.interimResults = true;
recognition.lang = lang;

mic_off.onclick = () => {
    mic_on.classList.remove('hidden-mic');
    mic_off.classList.add('hidden-mic');
    recognition.start();
}

recognition.addEventListener ('result', (e) => {
    console.log(e.results);
    const transcript = Array.from(e.results)
    .map(result => result[0])
    .map(result => result.transcript)
    .join('');
    console.log(transcript);
    search_input.value = transcript;

})

recognition.addEventListener ('end', () => {
    mic_on.classList.add('hidden-mic');
    mic_off.classList.remove('hidden-mic');
    getGeocode();
})

