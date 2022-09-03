import React, { Component } from 'react';
import './style.css';
export class Header extends Component {
  render() {
    return (
      <div className="header">
        <h1>Tip Calculator</h1>
        <h3>Build in React</h3>
      </div>
    );
  }
}

export default Header;
