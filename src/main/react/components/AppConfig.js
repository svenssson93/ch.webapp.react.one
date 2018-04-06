import React, { Component } from 'react';
import { Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn } from 'material-ui/Table';
import Paper from 'material-ui/Paper';
import Config from '../config/config.js';

class AppConfig extends Component {

  constructor() {
    super();

    this.state = {

    }
  }

  render() {
    return (
      <div>
        <h1 className="pageTitle">App-Config</h1>
        <Paper>
          <Table className="tblConfig">
            <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
              <TableRow>
                <TableHeaderColumn>Config-Name</TableHeaderColumn>
                <TableHeaderColumn>Value</TableHeaderColumn>
              </TableRow>
            </TableHeader>
            <TableBody id="tblConfig" displayRowCheckbox={false}>
              {Object.entries(Config).map(([key, value]) => {
                return (
                  <TableRow key={key}>
                    <TableRowColumn>{key}</TableRowColumn>
                    <TableRowColumn>{value.toString()}</TableRowColumn>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </Paper>
      </div>
    );
  }

}

export default AppConfig;