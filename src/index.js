import React from 'react';
import ReactDOM from 'react-dom';
import Loadable from 'react-loadable';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';

ReactDOM.hydrate(<Router><App /></Router>, document.getElementById('root'));