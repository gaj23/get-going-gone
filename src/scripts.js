import './css/base.scss';

import './images/lightDarkMode.png';
import './images/redBlueCompass.png';
import './images/invertedCompass.png';
import './images/arrow.png';


import Traveler from './Traveler';
import Trip from './Trip';
import Destination from '.Destination';
import apiCalls from './apiCalls';
import domUpdates from './domUpdates';

const darkLightModeButton = document.querySelector('.dark-light-mode-js');
const nextDestinationButton = document.querySelector('.next-destination-js');

darkLightModeButton.addEventListener('click', toggleDarkMode);

let travelers = [];
let trips = [];
let destinations = [];

window.onload = Promise.all([apiCalls.getTravelersData(), apiCalls.getTripsData(), apiCalls.getDestinationsData()])
  .then(data => {
    data[0].travelers.forEach(traveler => travelers.push(traveler))
    data[1].trips.forEach(trip => trips.push(trip))
    data[2].destinations.forEach(destination => destinations.push(destination))
  })


function toggleDarkMode() {
  document.querySelector('body').classList.toggle('dark-mode-on');
  darkLightModeButton.classList.toggle('dark-mode-on');
  nextDestinationButton.classList.toggle('dark-mode-on');
  toggleLogoDarkMode();
}

function toggleLogoDarkMode() {
  const logo = document.querySelector('.logo-js')
  logo.classList.toggle('dark-mode-on');
  if (logo.classList.contains('dark-mode-on')) {
    logo.src = './images/invertedCompass.png';
  } else {
    logo.src = './images/redBlueCompass.png';
  }
}