// const { fetchMyIP } = require('./iss');

// const { fetchCoordByIP } = require('./iss');

const { fetchISSFlyOverTimes } = require('./iss');

// fetchMyIP((error, ip) => {
//   if (error) {
//     console.log("It didn't work!", error);
//     return;
//   }
//   console.log('It worked! Returned IP:', ip);
// });

// const exIP = '174.3.97.50';
// fetchCoordByIP(exIP, (error, coords) => {
//   if (error) {
//     console.log(error);
//     return;
//   }
//   console.log(coords);
// });

const exCoords = { latitude: '-53.45930', longitude: '-113.41450'};

fetchISSFlyOverTimes(exCoords, (error, times) => {
  if (error) {
    console.log(error);
    return;
  }
  console.log(times);
});