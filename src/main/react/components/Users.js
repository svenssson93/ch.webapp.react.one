import React, { Component } from 'react';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import { getUsers } from '../services/users.service.js';
import UserTable from './UserTable.js';
import { isEqual } from 'lodash';

const style = {
  floatingLabelStyle: {
    left: 0,
  },
  inputStyle: {
    left: '-50px',
  }
};

class Users extends Component {
  constructor() {
    super();
    this.state = {
      users: [],
      allUsers: [],
      value: 0,
    };
  }

  componentWillMount() {
    getUsers().then((value) => {
      this.setState({
        users: value,
        allUsers: value,
      })
    });
  }

  componentWillUpdate(nextProps, nextState) {
    if (nextState.value !== this.state.value) {
      if (nextState['value'] === 0 && !isEqual(this.state.users, this.state.allUsers)) {
        this.setState({
          users: this.state.allUsers,
        })
      } else if (nextState['value'] !== 0) {
        var elm = this.state.allUsers.find((element) => {
          return element.id === nextState['value'];
        });
        this.setState({
          users: [elm],
        });
      }
    }
  }

  handleChange = (event, index, value) => this.setState({value});

  render() {
    let content = this.state.allUsers.map((user, index) => {
      let id = "selUser" + (index + 1);
      return <MenuItem id={id} key={index+1} value={user['id']} primaryText={user['name']} />;
    });
    return (
      <div>
        <h1 className="pageTitle">Users</h1>
        <SelectField
          id="selUser"
          floatingLabelText="Select User"
          floatingLabelStyle={style.floatingLabelStyle}
          inputStyle={style.inputStyle}
          value={this.state.value}
          onChange={this.handleChange}>
          <MenuItem key={0} value={0} primaryText="----" />
          { content }
        </SelectField>
        <UserTable users={this.state.users} />
      </div>
    );
  }
}

export default Users;