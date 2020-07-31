const { fetchMyIP } = require('./iss');

const { fetchCoordByIP } = require('./iss');

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

// const exCoords = { latitude: '-53.45930', longitude: '-113.41450'};

// fetchISSFlyOverTimes(exCoords, (error, times) => {
//   if (error) {
//     console.log("It didn't work!", error);
//     return;
//   }
//   console.log("It worked! Returned flyover times: " + "\n", times);
// });

const { nextISSTimesForMyLocation } = require('./iss');


const printPassTimes = function(passTimes) {
  for (let pass of passTimes) {
    // set new Date object that starts from 1970-01-01
    const dateTime = new Date(0);
    // convert seconds to UTC time
    dateTime.setUTCSeconds(pass["risetime"]);

    const duration = pass["duration"];
    console.log(`Next pass at ${dateTime} for ${duration} seconds!`);
  }
};

nextISSTimesForMyLocation((error, passTimes) => {
  if (error) {
    return console.log("It didn't work!", error);
  }
  // success, print out the deets!
  printPassTimes(passTimes);
});