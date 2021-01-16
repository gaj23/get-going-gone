const getData = (url) => {
  return fetch(url)
    .then(response => response.json())
    .catch(err => alert('Apologizes, we are having trouble loading the data'))
}

const apiCalls = {
  getTravelersData: () => {
    return getData('http://localhost:3001/api/v1/travelers');
  },

  getTripsData: () => {
    return getData('http://localhost:3001/api/v1/trips');
  },

  getDestinationsData: () => {
    return getData('http://localhost:3001/api/v1/destinations');
  }
}

export default apiCalls;