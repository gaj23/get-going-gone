import './css/base.scss';

import './images/lightDarkMode.png';
import './images/redBlueCompass.png';
import './images/invertedCompass.png';
import './images/arrow.png';


import Traveler from './Traveler';
import Trip from './Trip';
import apiCalls from './apiCalls';
import domUpdates from './domUpdates';

// ** Login **
const loginSection = document.querySelector('.login-display-js')
const loginForm = document.querySelector('.login-form-js');
const loginButton = document.querySelector('.login-button-js');
loginForm.addEventListener('submit', getTraveler);

// ** Button Query Selectors **
const darkLightModeButton = document.querySelector('.dark-light-mode-js');
const homeButton = document.querySelector('.go-home-js');
const currentTripsButton = document.querySelector('.go-to-current-js');
const plannedTripsButton = document.querySelector('.go-to-planned-js');
const pastTripsButton = document.querySelector('.go-to-past-js')
const makeBookingButton = document.querySelector('.make-booking-js');
const bookingEstimateButton = document.querySelector('.estimate-js');
const postBookingForm = document.querySelector('.booking-form-js')
const postBookingButton = document.querySelector('.post-booking-js');

// ** Display Query Selectors **
const homeDisplay = document.querySelector('.dashboard-js');
const currentDisplay = document.querySelector('.detailed-current-trips-js');
const plannedDisplay = document.querySelector('.detailed-planned-trips-js');
const pastDisplay = document.querySelector('.detailed-past-trips-js');
const bookingDisplay = document.querySelector('.booking-js');
const estimateDisplay = document.querySelector('.trip-estimate-js');


// ** Event Listeners **
darkLightModeButton.addEventListener('click', toggleDarkMode);
homeButton.addEventListener('click', showHome);
currentTripsButton.addEventListener('click', showCurrentDetails);
plannedTripsButton.addEventListener('click', showPlannedDetails);
pastTripsButton.addEventListener('click', showPastDetails);
makeBookingButton.addEventListener('click', showBookingDetails);
bookingEstimateButton.addEventListener('click', displayBookingResults);
postBookingForm.addEventListener('click', postBooking);


window.traveler, window.trip;
window.travelers = [];
window.trips = [];
window.destinations = [];

window.onload = Promise.all([apiCalls.getTravelersData(), apiCalls.getTripsData(), apiCalls.getDestinationsData()])
  .then(data => {
    data[0].travelers.forEach(traveler => travelers.push(traveler))
    data[1].trips.forEach(trip => trips.push(trip))
    data[2].destinations.forEach(destination => destinations.push(destination))
  })

function getTraveler() {
  event.preventDefault();
  const username = document.querySelector('#username').value;
  const password = document.querySelector('#password').value;
  const inputs = [username, password]
  if (inputs.every(input => input !== '') && username.startsWith('traveler') && username.split('traveler')[1] !== '') {
    const userNum = username.split('traveler');
    const num = parseInt(userNum[1]);
    const userTraveler = window.travelers.find(traveler => traveler.id === num);
    getData(userTraveler);
  } else {
    loginForm.reset();
    domUpdates.sendWarning();
  }
}

function getData(user) {
  window.traveler = new Traveler(user);
  domUpdates.manageClassList('add', 'hidden', loginSection);
  const mainView = document.querySelector('.main-view-js');
  domUpdates.manageClassList('remove', 'hidden', mainView);
  domUpdates.manageClassList('remove', 'hidden', homeDisplay);
  domUpdates.manageClassList('remove', 'hidden', makeBookingButton);
  domUpdates.greetTraveler(window.traveler);
  domUpdates.updateTravelerStats(window.traveler, window.trips, window.destinations);
}

function displayBookingResults() {
  const goingTo = findDestination();
  const startDate = (document.querySelector('#start').value).replace('-', '/').replace('-', '/');
  const lengthOfTrip = document.querySelector('#duration').value;
  const numOfTravelers = document.querySelector('#travelers').value;
  const tripDetails = [goingTo, startDate, lengthOfTrip, numOfTravelers];
  if (tripDetails.some(element => element === undefined)) {
    domUpdates.manageClassList('remove', 'hidden', estimateDisplay);
    domUpdates.checkInputFields(tripDetails);
  } else {
    collectTripDetails(goingTo, startDate, lengthOfTrip, numOfTravelers);
  }
}

function collectTripDetails(goingTo, startDate, lengthOfTrip, numOfTravelers) {
  window.trip = new Trip({
    userID: window.traveler.id,
    destinationID: goingTo.id,
    travelers: numOfTravelers,
    date: startDate,
    duration: lengthOfTrip,
    status: "pending"
  }, window.trips);
  window.trip.estimateCost(window.destinations);
  domUpdates.manageClassList('remove', 'hidden', estimateDisplay);
  domUpdates.displayEstimate(window.trip);
  postBookingButton.disabled = false;
}

function postBooking() {
  event.preventDefault();
  const choice = findDestination();
  apiCalls.postNewTrip(window.trip).then(response => {
    window.trips.push(response.newTrip);
  })
  domUpdates.alertSuccessfulRequest(choice);
}

function findDestination() {
  const possibleDestination = document.querySelector('#where').value;
  const chosenDestination = window.destinations.find(destination => destination.destination.includes(possibleDestination));
  return chosenDestination;
}

// Manage Display Functions

function showHome() {
  domUpdates.updateTravelerStats(window.traveler, window.trips, window.destinations)
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