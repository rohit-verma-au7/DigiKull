import React from 'react';

const Cards = (props) => {
  const { name, id } = props;
  // console.log(name, id);
  console.log('hfhhf', props);
  return (
    <div className="cards">
      <div className="card1" key={id}>
        {name}
        <div className="abc">{props.input}</div>
      </div>
    </div>
  );
};

export default Cards;
