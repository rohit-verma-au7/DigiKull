import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import './style.css';
import Cards from './Cards';

const ApiCall = () => {
  const [data, setdata] = useState([]);
  const [input, setinput] = useState('');

  useEffect(() => {
    axios({
      mathod: 'get',
      url: 'https://jsonplaceholder.typicode.com/users',
    })
      .then((res) => setdata(res.data))
      .catch((err) => console.log(err.message));
  }, []);

  const obj = { name: input };

  const postFunction = () => {
    axios({
      method: 'post',
      url: `https://jsonplaceholder.typicode.com/users`,
      data: obj,
    })
      .then((res) => console.log('post response', res))
      .catch((err) => console.log(err.message));
  };

  const inputData = (e) => {
    setinput(e.target.value);
  };
  console.log('obj', obj);
  console.log('data', data);
  return (
    <>
      <div className="user">
        <h2>Hello User</h2>
        <input className="input-tag" type={'text'} onChange={inputData} />
        <button onClick={postFunction}>Add</button>
        {data.map((items) => (
          <Cards name={items.name} key={items.id} />
        ))}
        <Cards input={input} />
      </div>
    </>
  );
};

export default ApiCall;
