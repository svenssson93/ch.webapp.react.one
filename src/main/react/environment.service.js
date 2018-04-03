import environment from './env.js';

export const getEnvironment = () => {
  return fetch(environment.backendBase + environment.backendApiUriEnvironment).then(response => response.json()).then(json => {
    return json['_embedded']['environment'];
  });
};