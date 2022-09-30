import React from 'react';
import '../App.css';

const TableData = (props) => {
  console.log('props', props);
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
          <tr className="table-data">
            <td>{props.data.firstName}</td>
            <td>{props.data.lastName}</td>
            <td>{props.data.email}</td>
            <td>
              <button>EDIT</button>
            </td>
            <td>
              <button>DELETE</button>
            </td>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default TableData;
