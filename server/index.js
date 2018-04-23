import express from 'express';
import bodyParser from 'body-parser';
import serverRenderer from './middleware/renderer';
import logger from './logger/logger.js';

const PORT = 3000;
const path = require('path');

// set navigator and userAgent for MuiThemeProvider.
logger.info("Setting global.navigator & global.navigator.userAgent for MuiThemeProvider (material-ui)");
global.navigator = global.navigator || {};
global.navigator.userAgent = global.navigator.userAgent || 'all';

// initialize the application and create the routes
const app = express();
const router = express.Router();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json())

// root (/) should always serve our server rendered page
router.use('^/$', serverRenderer);

// other static resources should just be served as they are
router.use(express.static(
  path.resolve(__dirname, '..', 'build'),
  { maxAge: '30d' },
));

router.post('/api/logger', (req, res) => {
  logger.log(req.body.level, 'Client: ' + req.body.data);

  return res.end();
});

// anything else should act as our index page
// react-router will take care of everything
router.use('*', serverRenderer);

// tell the app to use the above rules
app.use(router);

// start the app
app.listen(PORT, (error) => {
  if (error) {
    return console.log('something bad happened', error);
  }

  console.log("listening on " + PORT + "...");
});