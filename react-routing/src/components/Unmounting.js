import React from 'react';

const Unmounting = () => {
  return (
    <div>
      <h1>Unmounting</h1>
      <p>
        Unmounting The next phase in the lifecycle is when a component is
        removed from the DOM, or unmounting as React likes to call it. React has
        only one built-in method that gets called when a component is unmounted:
        componentWillUnmount()
      </p>
    </div>
  );
};
export default Unmounting;
