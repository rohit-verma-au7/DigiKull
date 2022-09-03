import React, { createContext } from 'react';
import Comp2 from './Comp2';

const Biodata = createContext();

const Comp1 = () => {
  return (
    <Biodata.Provider value={'Rohit Verma'}>
      <Comp2 />
    </Biodata.Provider>
  );
};

export { Biodata };
export default Comp1;
