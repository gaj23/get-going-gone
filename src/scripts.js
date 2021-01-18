import './css/base.scss';

import './images/lightDarkMode.png';
import './images/redBlueCompass.png';
import './images/invertedCompass.png';
import './images/arrow.png';


import Traveler from './Traveler';
// import Trip from './Trip';
// import Destination from '.Destination';
import apiCalls from './apiCalls';
import domUpdates from './domUpdates';

// ** Button Query Selectors **
const darkLightModeButton = document.querySelector('.dark-light-mode-js');
const homeButton = document.querySelector('.go-home-js');
const currentTripsButton = document.querySelector('.go-to-current-js');
const plannedTripsButton = document.querySelector('.go-to-planned-js');
const pastTripsButton = document.querySelector('.go-to-past-js')
const nextDestinationButton = document.querySelector('.make-booking-js');

// ** Display Query Selectors **
const homeDisplay = document.querySelector('.dashboard-js');
const currentDisplay = document.querySelector('.detailed-current-trips-js');
const plannedDisplay = document.querySelector('.detailed-planned-trips-js');
const pastDisplay = document.querySelector('.detailed-past-trips-js');

// ** Event Listeners **
darkLightModeButton.addEventListener('click', toggleDarkMode);
homeButton.addEventListener('click', showHome);
currentTripsButton.addEventListener('click', showCurrentDetails);
plannedTripsButton.addEventListener('click', showPlannedDetails);
pastTripsButton.addEventListener('click', showPastDetails);

let traveler;
let travelers = [];
let trips = [];
let destinations = [];

window.onload = Promise.all([apiCalls.getTravelersData(), apiCalls.getTripsData(), apiCalls.getDestinationsData()])
  .then(data => {
    data[0].travelers.forEach(traveler => travelers.push(traveler))
    data[1].trips.forEach(trip => trips.push(trip))
    data[2].destinations.forEach(destination => destinations.push(destination))
    getData();
  })

function getData() {
  traveler = new Traveler(travelers[7]);
  domUpdates.greetTraveler(traveler);
  domUpdates.updateTravelerStats(traveler, trips, destinations);
}

function showHome() {
  domUpdates.manageClassList('remove', 'hidden', homeDisplay);
  const detailedDisplays = [currentDisplay, plannedDisplay, pastDisplay];
  detailedDisplays.forEach(display => {
    if (!display.classList.contains('hidden')) {
      domUpdates.manageClassList('add', 'hidden', display);
    };
  })
}

function showCurrentDetails() {
  domUpdates.manageClassList('add', 'hidden', homeDisplay);
  domUpdates.manageClassList('remove', 'hidden', currentDisplay);
}

function showPlannedDetails() {
  domUpdates.manageClassList('add', 'hidden', homeDisplay);
  domUpdates.manageClassList('remove', 'hidden', plannedDisplay);
}

function showPastDetails() {
  domUpdates.manageClassList('add', 'hidden', homeDisplay);
  domUpdates.manageClassList('remove', 'hidden', pastDisplay);
}

function toggleDarkMode() {
  darkLightModeButton.classList.toggle('dark-mode-on');
  nextDestinationButton.classList.toggle('dark-mode-on');
  domUpdates.toggleDarkModeUpdates();
}