import React from 'react';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import { Link } from 'react-router-dom';

const style = {
  display: 'inline-block',
  float: 'left',
  width: '25%',
  textDecoration: 'none',
};

const MyMenu = () => (
  <div>
    <Menu id="navigation" style={{width:'100%'}}>
      <Link id="userLink" to="/users" style={style}><MenuItem primaryText="Users" /></Link>
      <Link id="aboutLink" to="/" style={style}><MenuItem primaryText="About" /></Link>
      <Link id="trainLink" to="/trains" style={style}><MenuItem primaryText="Trains" /></Link>
      <Link id="environmentLink" to="/environments" style={style}><MenuItem primaryText="Environments" /></Link>
    </Menu>
  </div>
);

export { MyMenu };