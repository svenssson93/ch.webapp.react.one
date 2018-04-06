import config from '../config/config.js';

export const getTrains = (location) => {
  let trainsLocation = (location) ? location : config.trainsLocationDashboard;
  return fetch(config.trainsBase + config.trainsLocationsApiUri + "/" + trainsLocation).then(response => response.json()).then(json => {
    return json;
  });
};