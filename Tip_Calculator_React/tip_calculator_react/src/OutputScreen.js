/* eslint-disable no-useless-constructor */
import React, { Component } from 'react';
import './style.css';
import TableOutputScreen from './TableOutputScreen';

class OutputScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tipAmount: 0,
      totalCust: 0,
    };
  }
  render() {
    const { customerList, totalTip } = this.props.state;
    console.log('props', customerList, totalTip);
    const calcTipandCust = () => {
      this.setState({
        tipAmount: totalTip,
      });
      this.setState({ totalCust: customerList.length });
    };
    return (
      <div className="output-screen">
        <h2>Customer List</h2>
        <ul className="outputscreen-ul">
          {customerList.map((item, key) => (
            <li key={key}>{item}</li>
          ))}
        </ul>
        <button className="calculateTipButton" onClick={calcTipandCust}>
          Calculate Tip & Customer
        </button>
        <TableOutputScreen state={this.state} />
      </div>
    );
  }
}

export default OutputScreen;
