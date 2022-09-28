import React from 'react';

const Mounting = () => {
  return (
    <div>
      <h1> Mounting </h1>
      <p>
        Mounting means putting elements into the DOM. React has four built-in
        methods that gets called, in this order, when mounting a component:
        constructor(), getDerivedStateFromProps(), render(),
        componentDidMount(), The render() method is required and will always be
        called, the others are optional and will be called if you define them.
      </p>
    </div>
  );
};
export default Mounting;
