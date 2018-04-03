import environment from './env.js';

export const getUsers = () => {
  return fetch(environment.backendBase + environment.backendApiUri).then(response => response.json()).then(json => {
    return json['_embedded']['users'];
  });
}