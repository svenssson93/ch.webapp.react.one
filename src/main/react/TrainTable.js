import React, { Component } from 'react';
import { Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn } from 'material-ui/Table';

class TrainTable extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: props.trains,
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      data: nextProps.trains,
    });
  }

  render() {
    return (
      <Table className="tblTrains">
        <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
          <TableRow>
            <TableHeaderColumn>Name</TableHeaderColumn>
            <TableHeaderColumn>Id</TableHeaderColumn>
            <TableHeaderColumn>Longitude</TableHeaderColumn>
            <TableHeaderColumn>Latitude</TableHeaderColumn>
          </TableRow>
        </TableHeader>
        <TableBody displayRowCheckbox={false}>
            {this.state.data.map((train) => {
              return (
                <TableRow key={train.id}>
                  <TableRowColumn>{train.name}</TableRowColumn>
                  <TableRowColumn>{train.id}</TableRowColumn>
                  <TableRowColumn>{train.lon}</TableRowColumn>
                  <TableRowColumn>{train.lat}</TableRowColumn>
                </TableRow>
              );
            })}
        </TableBody>
      </Table>
    );
  }
}

export default TrainTable;