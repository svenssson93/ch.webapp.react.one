import environment from './environment.js';

export const getTrains = (location) => {
  let trainsLocation = (location) ? location : environment.trainsLocationDashboard;
  return fetch(environment.trainsBase + environment.trainsLocationsApiUri + "/" + trainsLocation).then(response => response.json()).then(json => {
    return json;
  });
}