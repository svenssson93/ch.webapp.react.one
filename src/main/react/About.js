import React, { Component } from 'react';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';

const btnStyle = {
  margin: 12,
};
const getStartedLink = "https://reactjs.org/docs/hello-world.html";
const tutorialLink = "https://reactjs.org/tutorial/tutorial.html";

class About extends Component {
  render() {
    return (
      <Paper>
        <h1 className="pageTitle about">React</h1>
        <strong>A JavaScript library for building user interfaces</strong>
        <br />
        <RaisedButton id="btnGetStarted" label="Get Started" href={getStartedLink} target="_blank" style={btnStyle} />
        <RaisedButton id="btnTutorial" label="Take the Tutorial" href={tutorialLink} target="_blank" style={btnStyle} />
      </Paper>
    );
  }
}

export default About;