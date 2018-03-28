import React, { Component } from 'react';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import TrainTable from './TrainTable.js';
import { getTrains } from './trains.service.js';

const btnStyle = {
  margin: 12,
};

class Trains extends Component {
  constructor() {
    super();

    this.state = {
      trains: [],
      location: '',
    };

    this._callTrainService = this._callTrainService.bind(this);
    this._handleTextFieldChange = this._handleTextFieldChange.bind(this);
    this._handleButtonClick = this._handleButtonClick.bind(this);
  }

  componentWillMount() {
    this._callTrainService();
  }

  _handleTextFieldChange(e) {
    this.setState({
      location: e.target.value,
    });
  }

  _handleButtonClick(e) {
    this._callTrainService();
  }

  _callTrainService() {
    getTrains(this.state.location).then((value) => {
      this.setState({
        trains: value,
      });
    });
  }

  render() {
    var dbUrl = "https://developer.deutschebahn.com/store/apis/info?name=Fahrplan-Free&version=v1&provider=DBOpenData#!/default/get_location_name";
    return (
      <div>
        <h1>Train stations</h1>
        <Paper>
          <div>
            <br />
            This data come from an external server of the "Deutsche Bahn".<br />
            Check the "environment*" files of the Frontend application for the API URL.<br />
            One can experiment with the API e.g.&nbsp;
            <a href={dbUrl} target="_blank" rel="noopener noreferrer">here</a>
            &nbsp;under the "API Console" Tab.
          </div>
          <TextField hintText="Enter train location here" onChange={this._handleTextFieldChange} />
          <RaisedButton label="Submit" style={btnStyle} onClick={this._handleButtonClick} />
          <TrainTable trains={this.state.trains} />
        </Paper>
      </div>
    );
  }
}

export default Trains;