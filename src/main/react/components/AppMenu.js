import React, { Component } from 'react';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import { Link } from 'react-router-dom';

const style = {
  display: 'inline-block',
  float: 'left',
  width: '20%',
  textDecoration: 'none',
};

class AppMenu extends Component {

  render() {
    return (
      <div>
        <Menu id="navigation" style={{width:'100%'}}>
          <Link id="userLink" to="/users" style={style}><MenuItem primaryText="Users" /></Link>
          <Link id="aboutLink" to="/" style={style}><MenuItem primaryText="About" /></Link>
          <Link id="trainLink" to="/trains" style={style}><MenuItem primaryText="Trains" /></Link>
          <Link id="environmentLink" to="/environments" style={style}><MenuItem primaryText="Environments" /></Link>
          <Link id="configLink" to="/config" style={style}><MenuItem primaryText="Config" /></Link>
        </Menu>
      </div>
    );
  }

}

export default AppMenu;