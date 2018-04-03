const environment = {
  production: false,
  backendBase: 'http://localhost:8080',
  backendApiUri: '/api/users',
  backendApiUriEnvironment: '/api/environment?sort=name&size=300',

  trainsBase: 'https://api.deutschebahn.com',
  trainsLocationsApiUri: '/freeplan/v1/location',
  trainsLocationDashboard: 'Berlin'
};

export default environment;