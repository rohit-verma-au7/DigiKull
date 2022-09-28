import React from 'react';

const Updation = () => {
  return (
    <div>
      <h1>Updation</h1>
      <p>
        The next phase in the lifecycle is when a component is updated. A
        component is updated whenever there is a change in the component's state
        or props. React has five built-in methods that gets called, in this
        order, when a component is updated:
        <ol>
          <li>getDerivedStateFromProps()</li>
          <li>shouldComponentUpdate()</li>
          <li>render()</li>
          <li>getSnapshotBeforeUpdate()</li>
          <li>componentDidUpdate()</li>
        </ol>
        The render() method is required and will always be called, the others
        are optional and will be called if you define them.
      </p>
    </div>
  );
};
export default Updation;
