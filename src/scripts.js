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
const makeBookingButton = document.querySelector('.make-booking-js');

// ** Display Query Selectors **
const homeDisplay = document.querySelector('.dashboard-js');
const currentDisplay = document.querySelector('.detailed-current-trips-js');
const plannedDisplay = document.querySelector('.detailed-planned-trips-js');
const pastDisplay = document.querySelector('.detailed-past-trips-js');
const bookingDisplay = document.querySelector('.booking-js');

// ** Event Listeners **
darkLightModeButton.addEventListener('click', toggleDarkMode);
homeButton.addEventListener('click', showHome);
currentTripsButton.addEventListener('click', showCurrentDetails);
plannedTripsButton.addEventListener('click', showPlannedDetails);
pastTripsButton.addEventListener('click', showPastDetails);
makeBookingButton.addEventListener('click', showBookingDetails);


window.traveler;
window.travelers = [];
window.trips = [];
window.destinations = [];

window.onload = Promise.all([apiCalls.getTravelersData(), apiCalls.getTripsData(), apiCalls.getDestinationsData()])
  .then(data => {
    data[0].travelers.forEach(traveler => travelers.push(traveler))
    data[1].trips.forEach(trip => trips.push(trip))
    data[2].destinations.forEach(destination => destinations.push(destination))
    getData();
  })

function getData() {
  window.traveler = new Traveler(travelers[7]);
  domUpdates.greetTraveler(window.traveler);
  domUpdates.updateTravelerStats(window.traveler, window.trips, window.destinations);
}

function showHome() {
  domUpdates.manageClassList('remove', 'hidden', homeDisplay);
  domUpdates.manageClassList('remove', 'hidden', makeBookingButton);
  hideDetailedDisplays();
}

function showCurrentDetails() {
  domUpdates.manageClassList('add', 'hidden', homeDisplay);
  domUpdates.manageClassList('remove', 'hidden', currentDisplay);
  domUpdates.populateDetails('present', window.traveler, window.trips, window.destinations);
}

function showPlannedDetails() {
  domUpdates.manageClassList('add', 'hidden', homeDisplay);
  domUpdates.manageClassList('remove', 'hidden', plannedDisplay);
  domUpdates.populateDetails('future', window.traveler, window.trips, window.destinations);
}

function showPastDetails() {
  domUpdates.manageClassList('add', 'hidden', homeDisplay);
  domUpdates.manageClassList('remove', 'hidden', pastDisplay);
  domUpdates.populateDetails('past', window.traveler, window.trips, window.destinations);
}

function showBookingDetails() {
  domUpdates.manageClassList('add', 'hidden', homeDisplay);
  domUpdates.manageClassList('add', 'hidden', makeBookingButton);
  hideDetailedDisplays();
  domUpdates.manageClassList('remove', 'hidden', bookingDisplay);
}

function hideDetailedDisplays() {
  const detailedDisplays = [currentDisplay, plannedDisplay, pastDisplay, bookingDisplay];
  detailedDisplays.forEach(display => {
    if (!display.classList.contains('hidden')) {
      domUpdates.manageClassList('add', 'hidden', display);
    }
  })
}

function toggleDarkMode() {
  darkLightModeButton.classList.toggle('dark-mode-on');
  makeBookingButton.classList.toggle('dark-mode-on');
  domUpdates.toggleDarkModeUpdates();
}