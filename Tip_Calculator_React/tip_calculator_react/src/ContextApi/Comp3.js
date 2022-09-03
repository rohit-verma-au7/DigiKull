import React, { useContext } from 'react';
import { Biodata } from './Comp1';

const Comp3 = () => {
  const Name = useContext(Biodata);
  console.log('kgsgsg', Name);

  return <div>{Name}</div>;
};
export default Comp3;
