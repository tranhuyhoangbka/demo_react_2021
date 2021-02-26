import React, {createContext, useState} from 'react';

const FoodContext = createContext();
export const FoodProvider = ({children}) => {
  const [name, setName] = useState('Tra Xanh');
  const [location, setLocation] = useState('thai nguyen');

  return (
    <FoodContext.Provider value={{name, location, setName, setLocation}}>
      {children}
    </FoodContext.Provider>
  );
}

export default FoodContext;