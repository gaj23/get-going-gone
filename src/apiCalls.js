const getData = (url) => {
  return fetch(url)
    .then(response => response.json())
    .catch(err => console.log('Apologizes, we are having trouble loading the data'))
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
  },

  postNewTrip: (newTrip) => {
    return fetch('http://localhost:3001/api/v1/trips', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(newTrip),
      })
      .then(data => data.json())
      .then((data) => {
        return data
      })
      .catch(err => console.log(`Apologizes, we're getting an error: ${err}`))
  }
}


export default apiCalls;