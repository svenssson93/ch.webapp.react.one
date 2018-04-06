const config = {
  // website url
  url: 'http://localhost:3000/',

  // Backend information
  production: false,
  backendBase: 'http://localhost:8080',

  // Users API
  backendApiUri: '/api/users',
  backendApiUriEnvironment: '/api/environment?sort=name&size=300',

  // Trains API DB
  trainsBase: 'https://api.deutschebahn.com',
  trainsLocationsApiUri: '/freeplan/v1/location',
  trainsLocationDashboard: 'Berlin',

  // Deployment settings
  deployment: {
    repository: 'https://github.com/svenssson93/ch.webapp.react.one.git',
    branch: 'master',
  },
};

export default config;