import React from 'react';
import '../App.css';

const TableData = (props) => {
  console.log('props', props.data);
  return (
    <div>
      <div className="table">
        <table>
          <tr className="table-heading">
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email Id</th>
            <th>Action</th>
          </tr>
          {props.data.map((items) => (
            <tr>
              <td>{items.firstName}</td>
              <td>{items.lastName}</td>
              <td>{items.email}</td>
              <td>{items.employeeId}</td>
            </tr>
          ))}
        </table>
      </div>
    </div>
  );
};

export default TableData;
