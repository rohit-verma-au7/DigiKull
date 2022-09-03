import React, { Component } from 'react';
import OutputScreen from './OutputScreen';
import './style.css';

class InputField extends Component {
  constructor() {
    super();
    this.state = {
      billAmount: 0,
      service: 0,
      name: '',
      customerList: [
        'Rakesh Suthar offering a tip of 200 Rs',
        'Local Shop Offering a tip of 100 Rs',
        'Local Shop Offering a tip of 50 Rs',
      ],
      tipAmount: '',
      totalTip: 350,
    };
  }
  render() {
    const inputHandlerBillAmount = (e) => {
      this.setState({ billAmount: e.target.value });
      // console.log(typeof e.target.value);
    };

    const inputHandlerCustomerName = (e) => {
      this.setState({ name: e.target.value });
      // console.log('name state', this.state.name);
    };

    const dropDownSelection = (e) => {
      // console.log(e.target.value);
      if (e.target.value === 'excellent') {
        this.setState({ service: 20 });
      } else if (e.target.value === 'moderate') {
        this.setState({ service: 10 });
      } else {
        this.setState({ service: 5 });
      }
    };

    const addCustomerFunction = () => {
      const tip = Number(this.state.billAmount * (this.state.service / 100));
      const newCustomer = `${this.state.name} offering a tip of ${tip} Rs`;
      this.setState({
        customerList: [...this.state.customerList, newCustomer],
      });
      this.setState({ totalTip: this.state.totalTip + tip });
      // console.log('new customer', newCustomer);
      // console.log(this.state.name, this.state.service, this.state.billAmount);
    };

    return (
      <div className="upper-div">
        <h2>Enter Your Bill Amount</h2>
        <input
          className="input-type"
          type={'number'}
          onChange={inputHandlerBillAmount}
        />
        <div className="lower-div">
          <span className="service">
            How was the service :
            <select
              name="experience"
              id="experience"
              onChange={dropDownSelection}
            >
              <option hidden>Choose here</option>
              <option value={'excellent'}>Excellent</option>
              <option value={'moderate'}>Moderate</option>
              <option value={'bad'}>Bad</option>
            </select>
            <input className="input-name" onChange={inputHandlerCustomerName} />
            <button className="addcustomer" onClick={addCustomerFunction}>
              Add Customer
            </button>
          </span>
        </div>
        <OutputScreen state={this.state} />
      </div>
    );
  }
}

export default InputField;
