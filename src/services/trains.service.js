import config from '../config/config';
import logger from '../logger/logger';

export const getTrains = (location) => {
  let trainsLocation = (location) ? location : config.trainsLocationDashboard;
  logger('info', 'Fecthing train-service at: ' + config.trainsBase + config.trainsLocationsApiUri + '/' + trainsLocation);
  return fetch(config.trainsBase + config.trainsLocationsApiUri + '/' + trainsLocation).then(response => response.json()).then(json => {
    return json;
  });
};