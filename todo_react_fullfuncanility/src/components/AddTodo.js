import React from 'react';
import Cards from './Cards';
import { useState } from 'react';

const AddTodo = () => {
  const initials = ['Bath', 'Walking', 'Go to Gym'];
  const [data, setdata] = useState(initials);
  const [list, setlist] = useState('');

  const dataStore = (e) => {
    setlist(e.target.value);
    console.log('list', list);
  };
  const handleClick = () => {
    const copyData = [...data];
    copyData.push(list);
    setdata(copyData);
    setlist('');
  };
  return (
    <div>
      <h1>AddTodo</h1>
      <input
        className="addtodo"
        type={'text'}
        onChange={dataStore}
        // value={data}
      />
      <button onClick={handleClick}>ADD</button>

      {data.map((items, key) => (
        <Cards todo={items} keys={key} />
      ))}
    </div>
  );
};
export default AddTodo;
