const { nextISSTimesForMyLocation } = require('./iss_promised');

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

nextISSTimesForMyLocation()
  .then((passTimes) => {
    printPassTimes(passTimes);
  })
  .catch((error) => {
    console.log("It didn't work: ", error.message);
  });