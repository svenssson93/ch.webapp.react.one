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
    <Menu id="navigation" style={{width:'100%'}}>
      <Link id="userLink" to="/users"><MenuItem primaryText="Users" style={style} /></Link>
      <Link id="aboutLink" to="/"><MenuItem primaryText="About" style={style} /></Link>
      <Link id="trainLink" to="/trains"><MenuItem primaryText="Trains" style={style} /></Link>
      <Link id="environmentLink" to="/environments"><MenuItem primaryText="Environments" style={style} /></Link>
    </Menu>
  </div>
);

export { MyMenu };