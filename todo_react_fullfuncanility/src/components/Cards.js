import React from 'react';

const Cards = (props) => {
  return (
    <ol key={props.keys}>
      <li>{props.todo}</li>
    </ol>
  );
};

export default Cards;
