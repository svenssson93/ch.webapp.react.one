import React, { Component } from 'react';
import { Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn } from 'material-ui/Table';
import Paper from 'material-ui/Paper';

class EnvironmentTable extends Component {

  constructor(props) {
    super(props);

    this.state = {
      data: props.environment,
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      data: nextProps.environment,
    });
  }

  render() {
    return (
      <Paper>
        <Table className="tblEnvironment">
          <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
            <TableRow>
              <TableHeaderColumn>Name</TableHeaderColumn>
              <TableHeaderColumn>Value</TableHeaderColumn>
            </TableRow>
          </TableHeader>
          <TableBody displayRowCheckbox={false}>
            {this.state.data.map((environment, index) => {
              return (
                <TableRow key={index}>
                  <TableRowColumn>{environment['name']}</TableRowColumn>
                  <TableRowColumn>{environment['value']}</TableRowColumn>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </Paper>
    );
  }

}

export default EnvironmentTable;