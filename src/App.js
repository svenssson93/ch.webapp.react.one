import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppMenu from './components/AppMenu';
import routes from './routes';
import './index.css';
import './App.css';

class App extends Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <MuiThemeProvider>
          <div className="App-intro">
            <AppMenu />
            <Switch>
              {routes.map(route => (
                <Route {...route} />
              ))}
            </Switch>
          </div>
        </MuiThemeProvider>
      </div>
    );
  }
}

export default App;
