import React, { Component } from 'react';
import { Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn } from 'material-ui/Table';
import Paper from 'material-ui/Paper';

class UserTable extends Component {

  constructor(props) {
    super(props);

    this.state = {
      data: props.users,
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      data: nextProps.users,
    });
  }

  render() {
    return (
      <Paper>
        <Table className="tblUsers">
          <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
            <TableRow>
              <TableHeaderColumn>Id</TableHeaderColumn>
              <TableHeaderColumn>Name</TableHeaderColumn>
              <TableHeaderColumn>E-Mail</TableHeaderColumn>
            </TableRow>
          </TableHeader>
          <TableBody displayRowCheckbox={false}>
            {this.state.data.map((user) => {
              return(
                <TableRow key={user['id']}>
                  <TableRowColumn>{user['id']}</TableRowColumn>
                  <TableRowColumn>{user['name']}</TableRowColumn>
                  <TableRowColumn>{user['email']}</TableRowColumn>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </Paper>
    );
  }
  
}

export default UserTable;