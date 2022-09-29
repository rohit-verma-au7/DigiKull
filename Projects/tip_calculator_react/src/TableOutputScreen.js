/* eslint-disable no-useless-constructor */
import React, { Component } from 'react';
import './style.css';

class TableOutputScreen extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { tipAmount, totalCust } = this.props.state;
    return (
      <div>
        <table>
          <tr>
            <th>Total Customer</th>
            <th>Tip</th>
          </tr>
          <tr>
            <td>{totalCust}</td>
            <td>{tipAmount}</td>
          </tr>
        </table>
      </div>
    );
  }
}

export default TableOutputScreen;
