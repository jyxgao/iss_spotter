const request = require('request');
/**
 * Makes a single API request to retrieve the user's IP address.
 * Input:
 *   - A callback (to pass back an error or the IP string)
 * Returns (via Callback):
 *   - An error, if any (nullable)
 *   - The IP address as a string (null if error). Example: "162.245.144.188"
 */

const fetchMyIP = function(callback) {
  request('https://api.ipify.org?format=json', (error, response, body) => {
    if (error) {
      return callback(error, null);
    }
    
    if (response.statusCode !== 200) {
      const msg = `Status Code ${response.statusCode} when fetching IP. Response: ${body}`;
      callback(Error(msg), null);
      return;
    }
    const data = JSON.parse(body);
    callback(null, data["ip"]);
  });
};

const fetchCoordByIP = function(ip, callback) {
  request('https://ipvigilante.com/json/' + ip, (error, response, body) => {
    if (error) {
      return callback(error, null);
    }
    
    if (response.statusCode !== 200) {
      const msg = `Status code ${response.statusCode} when fetching coordinates for IP. Response: ${body}`;
      callback(Error(msg), null);
      return;
    }

    const data = JSON.parse(body);
    const coord = {};
    coord["latitude"] = data["data"]["latitude"];
    coord["longitude"] = data["data"]["longitude"];

    callback(null, coord);
  });
};

module.exports = { fetchMyIP, fetchCoordByIP };