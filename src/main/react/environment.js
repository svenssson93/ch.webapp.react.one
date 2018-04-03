import React, { Component } from 'react';
import { getEnvironment } from './environment.service.js';
import EnvironmentTable from './EnvironmentTable.js';

class Environment extends Component {

  constructor() {
    super();

    this.state = {
      environment: [],
    };
  }

  componentWillMount() {
    getEnvironment().then((value) => {
      this.setState({
        environment: value,
      });
    });
  }

  render() {
    return (
      <div>
        <h1 className="pageTitle">Environments</h1>
        <EnvironmentTable environment={this.state.environment} />
      </div>
    );
  }

}

export default Environment;