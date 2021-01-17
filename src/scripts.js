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

const darkLightModeButton = document.querySelector('.dark-light-mode-js');
const currentTripsButton = document.querySelector('.go-to-current-js');
const plannedTripsButton = document.querySelector('.go-to-planned-js');
const pastTripsButton = document.querySelector('.go-to-past-js')
const nextDestinationButton = document.querySelector('.next-destination-js');

darkLightModeButton.addEventListener('click', toggleDarkMode);
currentTripsButton.addEventListener('click', displayCurrentTrips);
plannedTripsButton.addEventListener('click', displayPlannedTrips);
pastTripsButton.addEventListener('click', displayPastTrips);
nextDestinationButton.addEventListener('click', displayBooking);


let traveler;
let travelers = [];
let trips = [];
let destinations = [];

window.onload = Promise.all([apiCalls.getTravelersData(), apiCalls.getTripsData(), apiCalls.getDestinationsData()])
  .then(data => {
    data[0].travelers.forEach(traveler => travelers.push(traveler))
    data[1].trips.forEach(trip => trips.push(trip))
    data[2].destinations.forEach(destination => destinations.push(destination))
    instantiation();
  })

function instantiation() {
  traveler = new Traveler(travelers[7]);
  domUpdates.greetTraveler(traveler);
  domUpdates.updateTravelerStats(traveler, trips, destinations);
}

function displayCurrentTrips() {

}

function displayPlannedTrips() {

}

function displayPastTrips() {

}

function displayBooking() {

}

function toggleDarkMode() {
  darkLightModeButton.classList.toggle('dark-mode-on');
  nextDestinationButton.classList.toggle('dark-mode-on');
  domUpdates.toggleDarkModeUpdates();
}