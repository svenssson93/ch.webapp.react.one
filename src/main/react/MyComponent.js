import React from 'react';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import { Link } from 'react-router-dom';

const style = {
  display: 'inline-block',
  float: 'left',
  width: '25%',
};

const MyMenu = () => (
  <div>
    <Menu style={{width:'100%'}}>
      <Link to="/users"><MenuItem primaryText="Users" style={style} /></Link>
      <Link to="/"><MenuItem primaryText="About" style={style} /></Link>
      <Link to="/trains"><MenuItem primaryText="Trains" style={style} /></Link>
      <Link to="/environments"><MenuItem primaryText="Environments" style={style} /></Link>
    </Menu>
  </div>
);

export { MyMenu };