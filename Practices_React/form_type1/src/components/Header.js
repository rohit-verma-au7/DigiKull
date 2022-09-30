import React, { useState } from 'react';
import TableData from './TableData';
import '../App.css';

const Header = () => {
  const [data, setdata] = useState({
    firstName: '',
    lastName: '',
    email: '',
    employeeId: '',
  });

  function handleChange(e) {
    const value = e.target.value;
    setdata({
      ...data,
      [e.target.name]: value,
    });
    // setdata('');
  }
  const showValue = () => {
    console.log('data', data);
    // setdata('');
  };

  return (
    <div>
      <div className="employee-details">Employee Details</div>
      <div className="input-search">
        <input type={'search'} placeholder="search..." />
      </div>
      <div className="input-type">
        <input
          type={'text'}
          name="firstName"
          placeholder="First Name"
          value={data.firstName}
          onChange={handleChange}
        />
        <input
          type={'text'}
          name="lastName"
          placeholder="Last Name"
          value={data.lastName}
          onChange={handleChange}
        />
        <input
          type={'text'}
          name="email"
          placeholder="Email Id"
          value={data.email}
          onChange={handleChange}
        />
        <input
          type={'text'}
          name="employeeId"
          placeholder="Employee Id"
          value={data.employeeId}
          onChange={handleChange}
        />
        <button className="button" onClick={showValue}>
          Add Employee
        </button>
      </div>
      <hr />
      <TableData data={data} />
    </div>
  );
};

export default Header;
