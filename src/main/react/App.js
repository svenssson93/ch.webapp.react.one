import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Route, Switch } from 'react-router-dom';
import { MyMenu } from './MyComponent.js';
import Users from './components/Users.js';
import About from './components/About.js';
import Trains from './components/Trains.js';
import Environment from './components/Environment.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>

        <MuiThemeProvider>
          <div>
            <MyMenu />
            <Switch>
              <Route exact path="/" component={About} />
              <Route path="/users" component={Users} />
              <Route path="/trains" component={Trains} />
              <Route path="/environments" component={Environment} />
            </Switch>
          </div>
        </MuiThemeProvider>

      </div>
    );
  }
}

export default App;
