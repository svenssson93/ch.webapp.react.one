import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { StaticRouter } from 'react-router';
import manifest from '../../build/asset-manifest.json';
import logger from '../logger/logger.js';

// import our main App component
import App from '../../src/App';

const path = require('path');
const fs = require ('fs');

export default (req, res, next) => {

  const context = {};

  // point to the html file created by CRA's build tool
  logger.info("Loading client index.html file");
  const filePath = path.resolve(__dirname, '..', '..', 'build', 'index.html');

  fs.readFile(filePath, 'utf8', (err, htmlData) => {
    if (err) {
      console.error('err', err);
      return res.status(404).end();
    }

    const modules = [];
    const extractAssets = (assets, chunks) => Object.keys(assets)
      .filter(asset => chunks.indexOf(asset.replace('.js', '')) > -1)
      .map(k => assets[k]);

    //render the app as a string
    const html = ReactDOMServer.renderToString(
      <StaticRouter location={req.url} context={context}>
        <App />
      </StaticRouter>
    );

    const extraChunks = extractAssets(manifest, modules)
      .map(c => `<script type="text/javascript" src="/${c}"></script>`);

    // inject the rendered app into our html and send it
    return res.send(
      htmlData
      .replace(
        '<div id="root"></div>',
        `<div id="root">${html}</div>`
      )
      .replace(
        '</body>',
        extraChunks.join('') + '</body>'
      )
    );
  });

}