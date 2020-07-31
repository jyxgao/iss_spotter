// const { fetchMyIP } = require('./iss');

const { fetchCoordByIP } = require('./iss');

// fetchMyIP((error, ip) => {
//   if (error) {
//     console.log("It didn't work!", error);
//     return;
//   }
//   console.log('It worked! Returned IP:', ip);
// });

fetchCoordByIP('174.3.97.50', (error, coords) => {
  if (error) {
    console.log(error);
    return;
  }
  console.log(coords);
});