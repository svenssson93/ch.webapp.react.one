# React Web-App

## Install

To run this app, please run the following commands in the command line.

1: npm install  
2: SET NODE_ENV=development  
3: npm start  

## Test

To test the application run the following commands in two separate command lines.

1: npm start
2: npm test

## Configuration

Config-file (./config.js) The following settings can be configured:  

url: Currently not used, but reflects the app-url.  
production: Currently not used, intended to distinct between prod/dev environment.  
backendBase: Base-URL to the backend-application.  
backendApiUriUsers: Path to the Users-API.  
backendApiUriEnvironment: Path to the Environment-API.  
trainsBase: Base-URL to the Deutsche Bahn API.  
trainsLocationsApiUri: Path to the Deutsche Bahn API.  
trainsLocationDashboard: Location to start the DB query with (e.g. Berlin, Hamburg, etc.).  
repository: GitHub-Repository URL.  
branch: Currently used branch.  
logLevel: Can be set to the following values to control logging-level. || OFF | INFO | DEBUG | ERROR ||  